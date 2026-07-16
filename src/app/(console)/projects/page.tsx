import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  PlusSignIcon,
  Globe02Icon,
  StarIcon,
  GitBranchIcon,
} from "@hugeicons/core-free-icons";

import { PageBody, PageHeader } from "@/components/page-header";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/mock-data";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <PageBody>
      <PageHeader
        title="Projects"
        description="Every app connected to your workspace — deploy, preview, and ship."
      >
        <div className="relative w-56">
          <HugeiconsIcon
            icon={Search01Icon}
            className="pointer-events-none absolute inset-y-0 start-2.5 my-auto size-4 text-muted-foreground"
            strokeWidth={1.8}
          />
          <Input
            type="search"
            placeholder="Search projects…"
            className="h-8 ps-8"
          />
        </div>
        <Button size="sm" className="gap-1.5">
          <HugeiconsIcon
            icon={PlusSignIcon}
            className="size-4"
            strokeWidth={1.8}
          />
          New Project
        </Button>
      </PageHeader>

      {/* Filter row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Tabs defaultValue="all" className="w-fit">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="production">Production</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
        </Tabs>

        <Select defaultValue="recent">
          <SelectTrigger size="sm" className="w-48">
            <span className="text-muted-foreground">Sort:</span>
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="recent">Recent activity</SelectItem>
            <SelectItem value="name">Name</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Project grid */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.id}
            href={`/projects/${p.id}`}
            className="group/project rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <Card className="cursor-pointer gap-4 shadow-xs transition-all group-hover/project:shadow-sm group-hover/project:ring-primary/30">
              <CardContent className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-foreground">
                  {p.framework.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium">{p.name}</div>
                  <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                    <HugeiconsIcon
                      icon={Globe02Icon}
                      className="size-3.5 shrink-0"
                      strokeWidth={1.8}
                    />
                    <span className="truncate transition-colors group-hover/project:text-primary">
                      {p.domain}
                    </span>
                  </div>
                </div>
                <HugeiconsIcon
                  icon={StarIcon}
                  className={cn(
                    "size-4 shrink-0 transition-colors",
                    p.favorite
                      ? "fill-primary text-primary"
                      : "text-muted-foreground/40 group-hover/project:text-muted-foreground",
                  )}
                  strokeWidth={1.8}
                />
              </CardContent>

              <CardContent className="flex flex-wrap items-center gap-2">
                <StatusBadge status={p.status} />
                <Badge variant="secondary" className="px-1.5 text-[10px]">
                  {p.env}
                </Badge>
                <Badge variant="outline" className="px-1.5 text-[10px]">
                  {p.framework}
                </Badge>
              </CardContent>

              <CardFooter className="justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <HugeiconsIcon
                    icon={GitBranchIcon}
                    className="size-3.5"
                    strokeWidth={1.8}
                  />
                  <span className="font-mono">{p.branch}</span>
                </span>
                <span className="tabular-nums">Updated {p.updated}</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </PageBody>
  );
}
