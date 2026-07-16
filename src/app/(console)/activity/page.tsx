import type { Metadata } from "next";
import { PulseRectangle01Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Activity",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Activity"
      description="A live feed of deploys, runs, and changes across the workspace."
      icon={PulseRectangle01Icon}
    />
  );
}
