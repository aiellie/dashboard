import type { Metadata } from "next";
import { Folder01Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Projects"
      description="Every project in this workspace — deploy, configure, and monitor."
      icon={Folder01Icon}
      action="New Project"
    />
  );
}
