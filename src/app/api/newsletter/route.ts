import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";
import { rateLimit, getIpFromRequest } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = getIpFromRequest(request);
    const { success: rateLimitOk } = rateLimit(`newsletter:${ip}`, 5, 300_000);

    if (!rateLimitOk) {
      return NextResponse.json(
        { success: false, error: "Too many requests." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validation = newsletterSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { email, name } = validation.data;

    try {
      const { prisma } = await import("@/lib/prisma");
      const existing = await prisma.newsletterSubscriber.findUnique({ where: { email } });

      if (existing) {
        if (existing.status === "UNSUBSCRIBED") {
          await prisma.newsletterSubscriber.update({
            where: { email },
            data: { status: "ACTIVE" },
          });
        } else {
          return NextResponse.json({ success: true, message: "Already subscribed!" });
        }
      } else {
        await prisma.newsletterSubscriber.create({
          data: { email, name, ipAddress: ip },
        });
      }
    } catch (dbError) {
      console.warn("Database save failed:", dbError);
    }

    try {
      if (process.env.RESEND_API_KEY) {
        const { sendNewsletterWelcome } = await import("@/lib/email");
        await sendNewsletterWelcome(email, name);
      }
    } catch (emailError) {
      console.warn("Email send failed:", emailError);
    }

    return NextResponse.json({ success: true, message: "Successfully subscribed!" });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
