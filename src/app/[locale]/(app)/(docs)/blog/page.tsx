import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { PostItem } from "@/features/blog/components/post-item";
import { getAllPosts } from "@/features/blog/data/posts";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("blog");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Page() {
  const t = await getTranslations("blog");
  const locale = await getLocale();
  const allPosts = getAllPosts(locale);

  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">{t("title")}</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {t("description")}
        </p>
      </div>

      <div className="relative pt-4">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {allPosts.map((post, index) => (
            <PostItem
              key={post.slug}
              post={post}
              shouldPreloadImage={index <= 4}
            />
          ))}
        </div>
      </div>

      <div className="h-4" />
    </>
  );
}
