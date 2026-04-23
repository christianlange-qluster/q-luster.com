import { NextRequest, NextResponse } from "next/server";
import { PREVIEW_KEY, PREVIEW_COOKIE } from "@/lib/preview";

/**
 * Preview-access middleware.
 *
 * If the request URL contains ?preview=<PREVIEW_KEY>, set a cookie that
 * grants access to the gated homepage and redirect to a clean URL (so the
 * key doesn't sit in the address bar / browser history).
 *
 * Anyone with the unlock URL can view; anyone without it sees 404.
 */
export function middleware(req: NextRequest) {
  const previewParam = req.nextUrl.searchParams.get("preview");
  if (previewParam === PREVIEW_KEY) {
    const cleanUrl = req.nextUrl.clone();
    cleanUrl.searchParams.delete("preview");
    const res = NextResponse.redirect(cleanUrl);
    res.cookies.set(PREVIEW_COOKIE, PREVIEW_KEY, {
      maxAge: 60 * 60 * 24 * 60, // 60 days
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      path: "/",
    });
    return res;
  }
  return NextResponse.next();
}

export const config = {
  // Only run on the root path (where the gate is). Lets static assets bypass.
  matcher: "/",
};
