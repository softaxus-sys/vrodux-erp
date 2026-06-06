import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { rateLimit, getIpFromRequest } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = getIpFromRequest(request);
    const { success: rateLimitOk } = rateLimit(`contact:${ip}`, 3, 60_000);

    if (!rateLimitOk) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data.", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const data = validation.data;

    // Try to save to database (graceful failure if DB not configured)
    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.contactMessage.create({
        data: {
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          country: data.country,
          subject: data.subject,
          message: data.message,
          ipAddress: ip,
          userAgent: request.headers.get("user-agent") || undefined,
        },
      });

      await prisma.lead.create({
        data: {
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          country: data.country,
          subject: data.subject,
          message: data.message,
          source: "contact",
          ipAddress: ip,
        },
      });
    } catch (dbError) {
      console.warn("Database save failed (DB may not be configured):", dbError);
    }

    // Try to send emails (graceful failure if not configured)
    try {
      if (process.env.RESEND_API_KEY) {
        const { sendContactNotification } = await import("@/lib/email");
        await sendContactNotification(data);
      }
    } catch (emailError) {
      console.warn("Email send failed:", emailError);
    }

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
