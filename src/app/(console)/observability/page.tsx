import type { Metadata } from "next";
import { Analytics01Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Observability",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Observability"
      description="Metrics, traces, and performance insights for your apps."
      icon={Analytics01Icon}
    />
  );
}
