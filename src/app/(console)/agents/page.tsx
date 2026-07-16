import type { Metadata } from "next";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  RoboticIcon,
  PlusSignIcon,
  PlayIcon,
  PauseIcon,
  ChartLineData01Icon,
  Analytics01Icon,
  TaskDaily01Icon,
  MoreHorizontalIcon,
  Clock01Icon,
  Delete02Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons";

import { PageBody, PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { agents, type Agent } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Agents",
};

const STATUS: Record<
  Agent["status"],
  { label: string; dot: string; text: string; pulse?: boolean }
> = {
  running: {
    label: "Running",
    dot: "bg-emerald-500",
    text: "text-emerald-600 dark:text-emerald-400",
    pulse: true,
  },
  scheduled: {
    label: "Scheduled",
    dot: "bg-sky-500",
    text: "text-sky-600 dark:text-sky-400",
  },
  paused: {
    label: "Paused",
    dot: "bg-amber-500",
    text: "text-amber-600 dark:text-amber-400",
  },
  idle: {
    label: "Idle",
    dot: "bg-muted-foreground",
    text: "text-muted-foreground",
  },
};

function AgentStatus({ status }: { status: Agent["status"] }) {
  const c = STATUS[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium",
        c.text,
      )}
    >
      <span className="relative flex size-1.5">
        {c.pulse ? (
          <span
            className={cn(
              "absolute inline-flex size-full animate-ping rounded-full opacity-75",
              c.dot,
            )}
          />
        ) : null}
        <span
          className={cn("relative inline-flex size-1.5 rounded-full", c.dot)}
        />
      </span>
      {c.label}
    </span>
  );
}

export default function AgentsPage() {
  return (
    <PageBody>
      <PageHeader
        title="Agents"
        description="Autonomous agents that plan, code, and run tasks on your behalf."
      >
        <Button variant="outline" size="sm">
          Documentation
        </Button>
        <Button size="sm" className="gap-1.5">
          <HugeiconsIcon
            icon={PlusSignIcon}
            className="size-4"
            strokeWidth={1.8}
          />
          New agent
        </Button>
      </PageHeader>

      {/* Fleet stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          label="Active agents"
          value="2"
          hint="of 5"
          icon={RoboticIcon}
        />
        <StatCard
          label="Runs today"
          value="184"
          delta="12%"
          trend="up"
          hint="across the fleet"
          icon={TaskDaily01Icon}
        />
        <StatCard
          label="Avg success rate"
          value="94.6%"
          delta="2%"
          trend="up"
          hint="last 7 days"
          icon={Analytics01Icon}
        />
      </div>

      {/* Agent control panel */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {agents.map((agent) => (
          <Card
            key={agent.id}
            className="gap-0 py-0 shadow-xs transition-colors hover:border-primary/30 hover:ring-primary/30"
          >
            <CardContent className="flex h-full flex-col gap-4 p-5">
              {/* Header row */}
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <HugeiconsIcon
                    icon={RoboticIcon}
                    className="size-5"
                    strokeWidth={1.8}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium leading-tight">
                    {agent.name}
                  </div>
                  <div className="truncate text-xs text-muted-foreground">
                    {agent.model}
                  </div>
                </div>
                <AgentStatus status={agent.status} />
              </div>

              {/* Description */}
              <p className="text-sm leading-snug text-muted-foreground">
                {agent.description}
              </p>

              {/* Success rate meter */}
              <div className="mt-auto flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Success rate</span>
                  <span className="font-medium tabular-nums">
                    {agent.successRate}%
                  </span>
                </div>
                <Progress value={agent.successRate} className="h-1.5" />
              </div>

              {/* Footer stats + actions */}
              <div className="flex items-center gap-3 border-t pt-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <HugeiconsIcon
                    icon={ChartLineData01Icon}
                    className="size-3.5"
                    strokeWidth={1.8}
                  />
                  <span className="tabular-nums">{agent.runs}</span> runs
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <HugeiconsIcon
                    icon={Clock01Icon}
                    className="size-3.5"
                    strokeWidth={1.8}
                  />
                  {agent.lastRun}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ms-auto size-7 text-muted-foreground"
                    >
                      <HugeiconsIcon
                        icon={MoreHorizontalIcon}
                        className="size-4"
                        strokeWidth={1.8}
                      />
                      <span className="sr-only">Agent actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem>
                      <HugeiconsIcon
                        icon={PlayIcon}
                        className="size-4"
                        strokeWidth={1.8}
                      />
                      Run now
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HugeiconsIcon
                        icon={agent.status === "paused" ? PlayIcon : PauseIcon}
                        className="size-4"
                        strokeWidth={1.8}
                      />
                      {agent.status === "paused" ? "Resume" : "Pause"}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HugeiconsIcon
                        icon={ViewIcon}
                        className="size-4"
                        strokeWidth={1.8}
                      />
                      View runs
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      <HugeiconsIcon
                        icon={Delete02Icon}
                        className="size-4"
                        strokeWidth={1.8}
                      />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageBody>
  );
}
