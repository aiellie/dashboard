import type { Metadata } from "next";
import { Globe02Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Domains",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Domains"
      description="Connect custom domains and manage DNS and certificates."
      icon={Globe02Icon}
      action="Add domain"
    />
  );
}
