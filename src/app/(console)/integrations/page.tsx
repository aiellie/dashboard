import type { Metadata } from "next";
import { PuzzleIcon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Integrations",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Integrations"
      description="Connect third-party services, webhooks, and connectors."
      icon={PuzzleIcon}
      action="Browse"
    />
  );
}
