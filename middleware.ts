// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";

const locales = ["en", "fr", "de"];
const defaultLocale = "en";

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const { pathname } = req.nextUrl;

  const isStatic = /\.(.*)$/.test(pathname);
  const isApi = pathname.startsWith("/api");
  const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`));

  if (!(isStatic || isApi || hasLocale)) {
    const acceptLang = req.headers.get("accept-language");
    const browserLang = acceptLang?.split(",")[0].split("-")[0] || defaultLocale;
    const locale = locales.includes(browserLang) ? browserLang : defaultLocale;

    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Delegate to Clerk middleware
  return clerkMiddleware()(req, event);
}

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};