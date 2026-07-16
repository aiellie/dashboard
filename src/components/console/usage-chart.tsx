"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { usageSeries } from "@/lib/mock-data";
import { compactNumber, formatCurrency } from "@/lib/format";

type Metric = "requests" | "tokens" | "cost";

const META: Record<
  Metric,
  { label: string; color: string; fmt: (n: number) => string }
> = {
  requests: {
    label: "Requests",
    color: "var(--chart-3)",
    fmt: (n) => compactNumber(n),
  },
  tokens: {
    label: "Tokens (M)",
    color: "var(--chart-2)",
    fmt: (n) => `${n}M`,
  },
  cost: {
    label: "Cost",
    color: "var(--chart-4)",
    fmt: (n) => formatCurrency(n),
  },
};

export function UsageChart({
  metric = "requests",
  height = 260,
  data = usageSeries,
}: {
  metric?: Metric;
  height?: number;
  data?: typeof usageSeries;
}) {
  const meta = META[metric];
  const config = {
    [metric]: { label: meta.label, color: meta.color },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={config} style={{ height }} className="w-full">
      <AreaChart data={data} margin={{ left: 4, right: 4, top: 8, bottom: 0 }}>
        <defs>
          <linearGradient id={`fill-${metric}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={meta.color} stopOpacity={0.32} />
            <stop offset="100%" stopColor={meta.color} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.4} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          minTickGap={28}
          className="text-xs"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={40}
          tickMargin={4}
          tickFormatter={(v) => meta.fmt(Number(v))}
          className="text-xs"
        />
        <ChartTooltip
          cursor={{ strokeDasharray: "3 3" }}
          content={
            <ChartTooltipContent
              labelClassName="text-muted-foreground"
              formatter={(value) => (
                <span className="font-medium tabular-nums">
                  {meta.fmt(Number(value))}
                </span>
              )}
            />
          }
        />
        <Area
          dataKey={metric}
          type="monotone"
          stroke={meta.color}
          strokeWidth={2}
          fill={`url(#fill-${metric})`}
          dot={false}
          activeDot={{ r: 3.5 }}
        />
      </AreaChart>
    </ChartContainer>
  );
}

export function UsageChartCard() {
  const [metric, setMetric] = React.useState<Metric>("requests");
  const metrics: Metric[] = ["requests", "tokens", "cost"];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-1.5">
        {metrics.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMetric(m)}
            data-active={metric === m}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:bg-secondary data-[active=true]:text-foreground"
          >
            {META[m].label}
          </button>
        ))}
      </div>
      <UsageChart metric={metric} />
    </div>
  );
}
