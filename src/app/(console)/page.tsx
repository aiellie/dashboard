import { DashboardSquare01Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export default function OverviewPage() {
  return (
    <PagePlaceholder
      title="Overview"
      description="Your workspace at a glance — deployments, agents, usage, and health."
      icon={DashboardSquare01Icon}
      action="Deploy"
    />
  );
}
