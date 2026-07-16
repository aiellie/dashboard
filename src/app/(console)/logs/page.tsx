import type { Metadata } from "next";
import { SourceCodeSquareIcon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Logs",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Logs"
      description="Inspect requests, traces, tool calls, and responses."
      icon={SourceCodeSquareIcon}
    />
  );
}
