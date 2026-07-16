import type { Metadata } from "next";
import { TaskDaily01Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Tasks",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Tasks"
      description="Background jobs, scheduled runs, and long-running agent tasks."
      icon={TaskDaily01Icon}
    />
  );
}
