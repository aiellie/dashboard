import type { Metadata } from "next";
import { BubbleChatIcon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Chat",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Chat"
      description="Talk to your agents and models in a shared, threaded workspace."
      icon={BubbleChatIcon}
      action="New chat"
    />
  );
}
