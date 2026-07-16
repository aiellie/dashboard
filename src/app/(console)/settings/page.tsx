import type { Metadata } from "next";
import { Settings01Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Settings",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Settings"
      description="Workspace preferences and configuration."
      icon={Settings01Icon}
    />
  );
}
