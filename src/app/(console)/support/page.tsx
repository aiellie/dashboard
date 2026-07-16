import type { Metadata } from "next";
import { HelpCircleIcon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Support",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Support"
      description="Get help from the team and browse common questions."
      icon={HelpCircleIcon}
      action="Contact us"
    />
  );
}
