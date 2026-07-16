import type { Metadata } from "next";
import { Layers01Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Batches",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Batches"
      description="Run large asynchronous jobs at a lower per-token cost."
      icon={Layers01Icon}
      action="New batch"
    />
  );
}
