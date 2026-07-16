import type { Metadata } from "next";
import { ChartLineData01Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Usage",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Usage"
      description="Track tokens, spend, and rate limits over time."
      icon={ChartLineData01Icon}
    />
  );
}
