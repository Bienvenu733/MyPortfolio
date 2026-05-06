import dayjs from "dayjs";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { getIcon, Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import type { Certification } from "../../types/certifications";

export function CertificationItem({
  className,
  certification,
}: {
  className?: string;
  certification: Certification;
  theme?: boolean;
}) {
  const canExpand = !!certification.description;

  return (
    <CollapsibleWithContext disabled={!canExpand} asChild>
      <div className={className}>
        <div className="flex items-center hover:bg-accent2">
          {certification.issuerLogoURL ? (
            <Image
              src={certification.issuerLogoURL}
              alt={certification.issuer}
              width={32}
              height={32}
              quality={100}
              className={`mx-4 flex size-6 shrink-0 select-none ${certification.theme && "not-dark:invert"}`}
              unoptimized
              aria-hidden
            />
          ) : (
            <div
              className={cn(
                "mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg select-none",
                "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background",
                "bg-muted text-muted-foreground [&_svg]:size-4"
              )}
              aria-hidden
            >
              {getIcon(certification.issuerIconName) ?? <Icons.certificate />}
            </div>
          )}

          <div className="flex-1 border-l border-dashed border-edge">
            <CollapsibleTrigger className="flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {certification.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                  <dl>
                    <dt className="sr-only">Issued by</dt>
                    <dd>
                      <span aria-hidden>@</span>
                      <span className="ml-0.5">{certification.issuer}</span>
                    </dd>
                  </dl>

                  <Separator
                    className="data-[orientation=vertical]:h-4"
                    orientation="vertical"
                  />

                  <dl>
                    <dt className="sr-only">Issued on</dt>
                    <dd>
                      <time
                        dateTime={dayjs(certification.issueDate).toISOString()}
                      >
                        {dayjs(certification.issueDate).format("DD.MM.YYYY")}
                      </time>
                    </dd>
                  </dl>
                </div>
              </div>

              {certification.credentialURL && (
                <SimpleTooltip content="Open Certificate">
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                    href={certification.credentialURL}
                    target="_blank"
                    rel="noopener"
                  >
                    <ArrowUpRightIcon
                      className="pointer-events-none size-4"
                      aria-hidden
                    />
                    <span className="sr-only">Ouvrir</span>
                  </a>
                </SimpleTooltip>
              )}

              {canExpand && (
                <div
                  className="shrink-0 text-muted-foreground [&_svg]:size-4"
                  aria-hidden
                >
                  <CollapsibleChevronsIcon />
                </div>
              )}
            </CollapsibleTrigger>
          </div>
        </div>

        {canExpand && (
          <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <div className="border-t border-edge shadow-inner">
              <Prose className="p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
                <Markdown>{certification.description}</Markdown>
              </Prose>
            </div>
          </CollapsibleContent>
        )}
      </div>
    </CollapsibleWithContext>
  );
}
