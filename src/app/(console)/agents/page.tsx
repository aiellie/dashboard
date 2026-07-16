import type { Metadata } from "next";
import { RoboticIcon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Agents",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Agents"
      description="Autonomous agents that plan, code, and run tasks on your behalf."
      icon={RoboticIcon}
      action="New agent"
    />
  );
}
