import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";
  const proto = request.headers.get("x-forwarded-proto") || "https";

  const isWww = host.startsWith("www.");
  const isHttp = proto === "http";

  // Skip redirect during local development
  const isLocal = host.includes("localhost") || host.includes("127.0.0.1");

  if (!isLocal && (isWww || isHttp)) {
    const canonicalHost = isWww ? host.slice(4) : host;
    const redirectUrl = `https://${canonicalHost}${url.pathname}${url.search}`;
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt, ads.txt (metadata files)
     * - image extensions (svg, png, jpg, jpeg, webp, avif)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|ads.txt|.*\\.(?:svg|png|jpg|jpeg|webp|avif)$).*)",
  ],
};
