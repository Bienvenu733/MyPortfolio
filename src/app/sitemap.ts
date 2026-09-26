import dayjs from "dayjs";
import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/features/blog/data/posts";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = routing.locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => ({
      url:
        locale === routing.defaultLocale
          ? `${SITE_INFO.url}/blog/${post.slug}`
          : `${SITE_INFO.url}/${locale}/blog/${post.slug}`,
      lastModified: dayjs(post.metadata.updatedAt).toISOString(),
    }))
  );

  const products: MetadataRoute.Sitemap = [];

  const routes = ["", "/blog", "/products"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: dayjs().toISOString(),
  }));

  return [...routes, ...posts, ...products];
}
