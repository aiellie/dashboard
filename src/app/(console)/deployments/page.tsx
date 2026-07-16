import type { Metadata } from "next";
import { RocketIcon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Deployments",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Deployments"
      description="Builds, preview URLs, and production releases across your projects."
      icon={RocketIcon}
      action="Deploy"
    />
  );
}
