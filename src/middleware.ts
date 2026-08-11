import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/admin-auth";

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // The login page and its API must stay reachable.
  if (pathname === "/admin/login" || pathname.startsWith("/api/admin/")) {
    return NextResponse.next();
  }

  const secret = process.env.ADMIN_SECRET_KEY;

  // Fail closed: without a signing secret no session can be trusted.
  if (!secret) {
    return NextResponse.redirect(new URL("/admin/login?error=unconfigured", request.url));
  }

  const session = await verifySessionToken(request.cookies.get(ADMIN_COOKIE)?.value, secret);

  if (!session) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname + search);
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete(ADMIN_COOKIE);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
