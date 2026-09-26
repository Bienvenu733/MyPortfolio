"use client";

import { useLocale, useTranslations } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import { Button } from "./ui/button";

const LOCALE_LABEL_KEYS: Record<(typeof routing.locales)[number], string> = {
  fr: "french",
  en: "english",
};

export function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="icon-sm"
          aria-label={t("label")}
          className="font-mono text-xs uppercase"
        >
          {locale}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" collisionPadding={8}>
        {routing.locales.map((l) => (
          <DropdownMenuItem key={l} asChild>
            <Link href={pathname} locale={l}>
              {t(LOCALE_LABEL_KEYS[l])}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
