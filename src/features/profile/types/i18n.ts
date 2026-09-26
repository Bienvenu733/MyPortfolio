import type { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

/** Free text provided in every supported locale. */
export type LocalizedText = Record<Locale, string>;
