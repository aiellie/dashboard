import { cn } from "@/lib/utils";
import type { DeployStatus } from "@/lib/mock-data";

const CONFIG: Record<
  DeployStatus,
  { label: string; dot: string; text: string; pulse?: boolean }
> = {
  ready: {
    label: "Ready",
    dot: "bg-emerald-500",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  building: {
    label: "Building",
    dot: "bg-amber-500",
    text: "text-amber-600 dark:text-amber-400",
    pulse: true,
  },
  queued: {
    label: "Queued",
    dot: "bg-sky-500",
    text: "text-sky-600 dark:text-sky-400",
  },
  error: {
    label: "Error",
    dot: "bg-destructive",
    text: "text-destructive",
  },
  canceled: {
    label: "Canceled",
    dot: "bg-muted-foreground",
    text: "text-muted-foreground",
  },
};

export function StatusBadge({
  status,
  className,
}: {
  status: DeployStatus;
  className?: string;
}) {
  const c = CONFIG[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium",
        c.text,
        className,
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
        <span className={cn("relative inline-flex size-1.5 rounded-full", c.dot)} />
      </span>
      {c.label}
    </span>
  );
}
