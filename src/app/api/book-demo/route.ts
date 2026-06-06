import { NextRequest, NextResponse } from "next/server";
import { demoBookingSchema } from "@/lib/validations";
import { rateLimit, getIpFromRequest } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = getIpFromRequest(request);
    const { success: rateLimitOk } = rateLimit(`demo:${ip}`, 2, 60_000);

    if (!rateLimitOk) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validation = demoBookingSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data.", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const data = validation.data;

    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.demoBooking.create({
        data: {
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          country: data.country,
          employees: data.employees,
          industry: data.industry,
          preferredDate: data.preferredDate,
          preferredTime: data.preferredTime,
          notes: data.notes,
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
          message: data.notes || "Demo booking request",
          source: "demo",
          ipAddress: ip,
        },
      });
    } catch (dbError) {
      console.warn("Database save failed:", dbError);
    }

    try {
      if (process.env.RESEND_API_KEY) {
        const { sendDemoNotification } = await import("@/lib/email");
        await sendDemoNotification(data);
      }
    } catch (emailError) {
      console.warn("Email send failed:", emailError);
    }

    return NextResponse.json({ success: true, message: "Demo booked successfully." });
  } catch (error) {
    console.error("Demo booking API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
