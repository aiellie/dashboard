import type { Metadata } from "next";
import { ChipIcon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Models",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Models"
      description="Browse, compare, and route across every available model."
      icon={ChipIcon}
    />
  );
}
