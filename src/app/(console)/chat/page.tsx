import type { Metadata } from "next";

import { ChatClient } from "./client";

export const metadata: Metadata = {
  title: "Chat",
};

export default function Page() {
  return <ChatClient />;
}
