import type { Metadata } from "next";
import { FunctionSquareIcon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Functions",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Functions"
      description="Edge and serverless compute running close to your users."
      icon={FunctionSquareIcon}
    />
  );
}
