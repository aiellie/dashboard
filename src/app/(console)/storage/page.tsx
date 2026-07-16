import type { Metadata } from "next";
import { Database01Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Storage",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Storage"
      description="Databases, blob storage, and key-value stores."
      icon={Database01Icon}
      action="Create store"
    />
  );
}
