import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

import { Button } from "@/components/ui/button";

type PagePlaceholderProps = {
  title: string;
  description?: string;
  icon: IconSvgElement;
  action?: string;
};

/**
 * Intentionally content-free page scaffold — a titled header + a dashed
 * "content goes here" canvas. Every console route renders one of these until
 * its real UI is built.
 */
export function PagePlaceholder({
  title,
  description,
  icon,
  action,
}: PagePlaceholderProps) {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
          {description ? (
            <p className="text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {action ? <Button size="sm">{action}</Button> : null}
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-dashed bg-muted/30">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.4] [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px]"
        />
        <div className="relative flex max-w-sm flex-col items-center gap-3 px-6 py-16 text-center">
          <div className="flex size-12 items-center justify-center rounded-2xl border bg-background text-primary shadow-sm">
            <HugeiconsIcon icon={icon} className="size-6" strokeWidth={1.8} />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">{title} workspace</p>
            <p className="text-xs text-muted-foreground">
              This page is wired up and ready. Content is coming next.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
