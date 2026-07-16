import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  RocketIcon,
  ChartLineData01Icon,
  Coins01Icon,
  ChipIcon,
  ArrowRight01Icon,
  GitBranchIcon,
  GitCommitIcon,
} from "@hugeicons/core-free-icons";

import { PageBody, PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { UsageChartCard } from "@/components/console/usage-chart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { deployments, activity } from "@/lib/mock-data";

export default function OverviewPage() {
  return (
    <PageBody>
      <PageHeader
        title="Overview"
        description="Your workspace at a glance — deployments, agents, usage, and spend."
      >
        <Button variant="outline" size="sm">
          Last 30 days
        </Button>
        <Button size="sm" className="gap-1.5">
          <HugeiconsIcon icon={RocketIcon} className="size-4" strokeWidth={1.8} />
          Deploy
        </Button>
      </PageHeader>

      {/* KPI tiles */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Deployments"
          value="128"
          delta="12%"
          trend="up"
          hint="this week"
          icon={RocketIcon}
        />
        <StatCard
          label="Requests · 24h"
          value="35.6K"
          delta="8.4%"
          trend="up"
          hint="across all projects"
          icon={ChartLineData01Icon}
        />
        <StatCard
          label="Tokens · 30d"
          value="2.1B"
          delta="14%"
          trend="up"
          hint="input + output"
          icon={ChipIcon}
        />
        <StatCard
          label="Spend · MTD"
          value="$6,284"
          delta="3.1%"
          trend="down"
          hint="vs. last month"
          icon={Coins01Icon}
        />
      </div>

      {/* Usage + activity */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-start justify-between gap-2">
            <div className="space-y-1">
              <CardTitle>Usage</CardTitle>
              <p className="text-sm text-muted-foreground">
                Requests, tokens, and cost over the last 30 days.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-muted-foreground"
            >
              <Link href="/usage">
                View all
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="size-4"
                  strokeWidth={1.8}
                />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <UsageChartCard />
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Activity</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <ol className="flex flex-col">
              {activity.map((a, i) => (
                <li key={a.id}>
                  <div className="flex items-start gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-muted/50">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                    <div className="flex-1 text-sm leading-snug">
                      <span className="font-medium">{a.actor}</span>{" "}
                      <span className="text-muted-foreground">{a.action}</span>{" "}
                      <span className="font-medium">{a.target}</span>
                      <div className="text-xs text-muted-foreground">
                        {a.time}
                      </div>
                    </div>
                  </div>
                  {i < activity.length - 1 ? null : null}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Recent deployments */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent deployments</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-muted-foreground"
          >
            <Link href="/deployments">
              View all
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="size-4"
                strokeWidth={1.8}
              />
            </Link>
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {deployments.slice(0, 6).map((d) => (
              <div
                key={d.id}
                className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-muted/40 sm:px-6"
              >
                <div className="w-28 shrink-0">
                  <StatusBadge status={d.status} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm font-medium">
                      {d.project}
                    </span>
                    <Badge
                      variant="secondary"
                      className="hidden px-1.5 text-[10px] sm:inline-flex"
                    >
                      {d.env}
                    </Badge>
                  </div>
                  <p className="truncate text-xs text-muted-foreground">
                    {d.message}
                  </p>
                </div>
                <div className="hidden items-center gap-2 text-xs text-muted-foreground md:flex">
                  <HugeiconsIcon
                    icon={GitBranchIcon}
                    className="size-3.5"
                    strokeWidth={1.8}
                  />
                  <span className="font-mono">{d.branch}</span>
                  <Separator orientation="vertical" className="h-3" />
                  <HugeiconsIcon
                    icon={GitCommitIcon}
                    className="size-3.5"
                    strokeWidth={1.8}
                  />
                  <span className="font-mono">{d.commit}</span>
                </div>
                <div className="w-20 shrink-0 text-end text-xs text-muted-foreground tabular-nums">
                  {d.created}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageBody>
  );
}
