import type { Metadata } from "next";
import { UserMultiple02Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Team",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Team"
      description="Invite members, manage roles, and control access."
      icon={UserMultiple02Icon}
      action="Invite"
    />
  );
}
