import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for the ones starting with:
  // - api, _next, _vercel (internal)
  // - og, rss, vcard (machine/crawler-facing routes, must stay locale-free)
  // - llms.txt, llms-full.txt, and per-section .md/.mdx AI-agent routes
  // - any path containing a file extension (static assets)
  matcher: [
    "/((?!api|_next|_vercel|og|rss|vcard|llms\\.txt|llms-full\\.txt|about\\.md|experience\\.md|awards\\.md|projects\\.md|certifications\\.md|blog\\.mdx|.*\\..*).*)",
  ],
};
