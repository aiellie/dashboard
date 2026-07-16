import type { Metadata } from "next";
import { SparklesIcon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Changelog",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Changelog"
      description="What's new, improved, and fixed in the console."
      icon={SparklesIcon}
    />
  );
}
