import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  SESSION_MAX_AGE,
  createSessionToken,
  verifyPassword,
} from "@/lib/admin-auth";
import { rateLimit, getIpFromRequest } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = getIpFromRequest(request);
    const { success: withinLimit } = rateLimit(`admin-login:${ip}`, 5, 5 * 60_000);

    if (!withinLimit) {
      return NextResponse.json(
        { success: false, error: "Too many attempts. Try again in a few minutes." },
        { status: 429 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const passwordHash = process.env.ADMIN_PASSWORD_HASH;
    const secret = process.env.ADMIN_SECRET_KEY;

    if (!adminEmail || !passwordHash || !secret) {
      console.error("Admin login is not configured (ADMIN_EMAIL / ADMIN_PASSWORD_HASH / ADMIN_SECRET_KEY).");
      return NextResponse.json(
        { success: false, error: "Admin login is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required." },
        { status: 400 }
      );
    }

    // Always run the hash comparison so a wrong email and a wrong password
    // take the same amount of time.
    const passwordOk = await verifyPassword(password, passwordHash);
    const emailOk = email === adminEmail.trim().toLowerCase();

    if (!emailOk || !passwordOk) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_COOKIE, await createSessionToken(email, secret), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_MAX_AGE,
    });
    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}
