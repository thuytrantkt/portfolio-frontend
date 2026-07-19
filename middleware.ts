import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Routes available in development only — blocked in production builds. */
const DEV_ONLY_PATHS = ["/demo"];

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  const isDevOnly = DEV_ONLY_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (isDevOnly) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/demo", "/demo/:path*"],
};
