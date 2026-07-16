import type { Metadata } from "next";
import { Book02Icon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Documentation",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Documentation"
      description="Guides, API references, and everything you need to build."
      icon={Book02Icon}
    />
  );
}
