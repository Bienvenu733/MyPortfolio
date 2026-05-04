import { RssIcon } from "lucide-react";

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Copyright &copy; {new Date().getFullYear()} {SITE_INFO.name}. All
          rights
        </p>
        <p className="text-center font-mono text-xs text-muted-foreground">
          Built with Next.js & Tailwind CSS
        </p>
        <div className="screen-line-before screen-line-after flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            <a
              className="flex text-muted-foreground transition-colors hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                "https://www.linkedin.com/in/mo%C3%AFse-bienvenu-w-ouedraogo-3053b5308/"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.linkedin className="h-5 w-auto" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <Separator />

            <a
              className="flex text-muted-foreground transition-colors hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                "https://github.com/Bienvenu733"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.github className="h-5 w-auto" />
              <span className="sr-only">GitHub</span>
            </a>

            <Separator />

            <a
              className="flex text-muted-foreground transition-colors hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                "https://x.com/bienvenu7343862"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.x className="h-5 w-auto" />
              <span className="sr-only">X</span>
            </a>

            <Separator />

            <a
              className="flex text-muted-foreground transition-colors hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                "https://stackoverflow.com/users/32680858/mo%c3%afse-bienvenu-ouedraogo"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.stackoverflow className="h-5 w-auto" />
              <span className="sr-only">Stack Overflow</span>
            </a>

            <Separator />

            <a
              className="flex text-muted-foreground transition-colors hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                "https://discord.com/users/1306718538651795499"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.discord className="h-5 w-auto" />
              <span className="sr-only">Discord</span>
            </a>

            <Separator />

            <a
              className="flex text-muted-foreground transition-colors hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                "https://www.facebook.com/moise.bienvenu.ouedraogo"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.facebook className="h-5 w-auto" />
              <span className="sr-only">Facebook</span>
            </a>

            <Separator />

            <a
              className="flex text-muted-foreground transition-colors hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL || "https://wa.me/22675318962"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.whatsapp className="h-5 w-auto" />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
