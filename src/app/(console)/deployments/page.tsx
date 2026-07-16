import { HugeiconsIcon } from "@hugeicons/react";
import { RocketIcon } from "@hugeicons/core-free-icons";

import { PageBody, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { projects } from "@/lib/mock-data";
import { DeploymentsClient } from "./client";

export const metadata = { title: "Deployments" };

export default function DeploymentsPage() {
  return (
    <PageBody>
      <PageHeader
        title="Deployments"
        description="Every build across your projects — production and preview, newest first."
      >
        <Select defaultValue="all">
          <SelectTrigger size="sm" className="w-[190px]">
            <SelectValue placeholder="All projects" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All projects</SelectItem>
            <SelectGroup>
              <SelectLabel>Projects</SelectLabel>
              {projects.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button size="sm" className="gap-1.5">
          <HugeiconsIcon icon={RocketIcon} className="size-4" strokeWidth={1.8} />
          Deploy
        </Button>
      </PageHeader>

      <DeploymentsClient />
    </PageBody>
  );
}
