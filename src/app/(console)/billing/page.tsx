import type { Metadata } from "next";
import { CreditCardIcon } from "@hugeicons/core-free-icons";

import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Billing",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Billing"
      description="Plans, invoices, usage limits, and payment methods."
      icon={CreditCardIcon}
      action="Manage plan"
    />
  );
}
