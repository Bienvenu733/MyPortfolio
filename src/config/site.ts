import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
];

export const GITHUB_USERNAME = "bienvenu733";
export const SOURCE_CODE_GITHUB_REPO = "bienvenu733/MyPortfolio";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/bienvenu733/MyPortfolio";

export const UTM_PARAMS = {
  utm_source: "https://bienvenu733.github.io",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
