import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import { ArrowUpRight01Icon, ArrowDownRight01Icon } from "@hugeicons/core-free-icons";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export function StatCard({
  label,
  value,
  delta,
  trend = "up",
  icon,
  hint,
  className,
}: {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "flat";
  icon?: IconSvgElement;
  hint?: string;
  className?: string;
}) {
  const positive = trend === "up";
  const negative = trend === "down";

  return (
    <Card className={cn("gap-0 py-0 shadow-xs", className)}>
      <CardContent className="flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{label}</span>
          {icon ? (
            <span className="text-muted-foreground/70">
              <HugeiconsIcon icon={icon} className="size-4" strokeWidth={1.8} />
            </span>
          ) : null}
        </div>
        <div className="flex items-end justify-between gap-2">
          <span className="text-2xl font-semibold tracking-tight tabular-nums">
            {value}
          </span>
          {delta ? (
            <span
              className={cn(
                "flex items-center gap-0.5 text-xs font-medium",
                positive && "text-emerald-600 dark:text-emerald-400",
                negative && "text-destructive",
                trend === "flat" && "text-muted-foreground",
              )}
            >
              {trend !== "flat" ? (
                <HugeiconsIcon
                  icon={positive ? ArrowUpRight01Icon : ArrowDownRight01Icon}
                  className="size-3.5"
                  strokeWidth={2}
                />
              ) : null}
              {delta}
            </span>
          ) : null}
        </div>
        {hint ? (
          <span className="text-xs text-muted-foreground">{hint}</span>
        ) : null}
      </CardContent>
    </Card>
  );
}
