import type { Metadata } from "next";
import { Key01Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "API Keys",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="API Keys"
      description="Create and revoke secret keys for programmatic access."
      icon={Key01Icon}
      action="Create key"
    />
  );
}
