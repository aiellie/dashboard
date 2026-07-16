import type { Metadata } from "next";
import { SlidersHorizontalIcon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Fine-tuning",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Fine-tuning"
      description="Adapt base models to your own data and evaluations."
      icon={SlidersHorizontalIcon}
      action="New job"
    />
  );
}
