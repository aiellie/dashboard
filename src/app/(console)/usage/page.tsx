import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChartLineData01Icon,
  ChipIcon,
  Coins01Icon,
  Clock01Icon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";

import { PageBody, PageHeader } from "@/components/page-header";
import { StatCard } from "@/components/stat-card";
import { UsageChartCard } from "@/components/console/usage-chart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatCurrency } from "@/lib/format";
import { models, projects } from "@/lib/mock-data";

export const metadata = { title: "Usage · aiellie" };

const TOTAL_COST = 6284;

const modelUsage = [34, 22, 18, 12, 8, 6].map((share, i) => ({
  ...models[i],
  share,
  cost: Math.round((TOTAL_COST * share) / 100),
}));

const projectCost = [38, 24, 16, 10, 7, 5].map((share, i) => ({
  ...projects[i],
  share,
  cost: Math.round((TOTAL_COST * share) / 100),
}));

export default function UsagePage() {
  return (
    <PageBody>
      <PageHeader
        title="Usage"
        description="Requests, tokens, and spend across every project and model."
      >
        <Select defaultValue="30">
          <SelectTrigger size="sm" className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm" className="gap-1.5">
          <HugeiconsIcon
            icon={ArrowDownRight01Icon}
            className="size-4"
            strokeWidth={1.8}
          />
          Export
        </Button>
      </PageHeader>

      {/* KPI tiles */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total requests"
          value="612K"
          delta="8%"
          trend="up"
          hint="vs. previous period"
          icon={ChartLineData01Icon}
        />
        <StatCard
          label="Tokens"
          value="2.1B"
          delta="14%"
          trend="up"
          hint="input + output"
          icon={ChipIcon}
        />
        <StatCard
          label="Total cost"
          value="$6,284"
          delta="3%"
          trend="down"
          hint="vs. previous period"
          icon={Coins01Icon}
        />
        <StatCard
          label="Avg latency"
          value="412ms"
          delta="5%"
          trend="flat"
          hint="p50 across models"
          icon={Clock01Icon}
        />
      </div>

      {/* Usage over time */}
      <Card>
        <CardHeader>
          <CardTitle>Usage over time</CardTitle>
          <CardDescription>
            Daily requests, tokens, and cost for the selected range.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UsageChartCard />
        </CardContent>
      </Card>

      {/* Breakdowns */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Usage by model</CardTitle>
            <CardDescription>
              Share of total spend by model this period.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            {modelUsage.map((m, i) => (
              <div key={m.id} className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className="size-2 shrink-0 rounded-full"
                      style={{ backgroundColor: `var(--chart-${(i % 5) + 1})` }}
                    />
                    <span className="truncate text-sm font-medium">
                      {m.name}
                    </span>
                    <Badge
                      variant="secondary"
                      className="hidden px-1.5 text-[10px] font-normal sm:inline-flex"
                    >
                      {m.provider}
                    </Badge>
                  </div>
                  <span className="shrink-0 text-sm font-medium tabular-nums">
                    {formatCurrency(m.cost)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={m.share} className="h-1.5" />
                  <span className="w-9 shrink-0 text-end text-xs text-muted-foreground tabular-nums">
                    {m.share}%
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cost by project</CardTitle>
            <CardDescription>
              Top projects by spend this period.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            {projectCost.map((p, i) => (
              <div key={p.id} className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className="size-2 shrink-0 rounded-full"
                      style={{ backgroundColor: `var(--chart-${(i % 5) + 1})` }}
                    />
                    <span className="truncate text-sm font-medium">
                      {p.name}
                    </span>
                    <Badge
                      variant="secondary"
                      className="hidden px-1.5 text-[10px] font-normal sm:inline-flex"
                    >
                      {p.framework}
                    </Badge>
                  </div>
                  <span className="shrink-0 text-sm font-medium tabular-nums">
                    {formatCurrency(p.cost)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={p.share} className="h-1.5" />
                  <span className="w-9 shrink-0 text-end text-xs text-muted-foreground tabular-nums">
                    {p.share}%
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </PageBody>
  );
}
