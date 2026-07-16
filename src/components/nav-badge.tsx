import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { NavBadge as NavBadgeType } from "@/config/navigation";

export function NavBadge({ badge }: { badge: NavBadgeType }) {
  if (badge.tone === "live") {
    return (
      <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/70" />
          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
        </span>
        {badge.label}
      </span>
    );
  }

  if (badge.tone === "new") {
    return (
      <Badge
        variant="secondary"
        className="border-transparent bg-primary/10 px-1.5 text-[10px] font-medium text-primary dark:bg-primary/20 dark:text-primary-foreground"
      >
        {badge.label}
      </Badge>
    );
  }

  if (badge.tone === "beta") {
    return (
      <Badge
        variant="outline"
        className="px-1.5 text-[10px] font-medium text-muted-foreground"
      >
        {badge.label}
      </Badge>
    );
  }

  // count
  return (
    <Badge
      variant="secondary"
      className={cn(
        "min-w-5 justify-center rounded-full px-1.5 text-[10px] font-medium tabular-nums",
      )}
    >
      {badge.label}
    </Badge>
  );
}
