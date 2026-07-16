import type { Metadata } from "next";
import { TerminalIcon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Playground",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Playground"
      description="Prototype prompts, tools, and completions before you ship them."
      icon={TerminalIcon}
      action="New session"
    />
  );
}
