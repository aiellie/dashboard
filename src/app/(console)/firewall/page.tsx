import type { Metadata } from "next";
import { Shield01Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Firewall",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Firewall"
      description="Protect your apps with rules, rate limits, and bot mitigation."
      icon={Shield01Icon}
    />
  );
}
