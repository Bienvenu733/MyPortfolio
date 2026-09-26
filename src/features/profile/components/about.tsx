import { useTranslations } from "next-intl";

import { Markdown } from "@/components/markdown";
import { Prose } from "@/components/ui/typography";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  const t = useTranslations("about");

  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>{t("title")}</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <Markdown>{t("content")}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  );
}
