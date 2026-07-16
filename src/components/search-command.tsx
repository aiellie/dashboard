"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { navGroups, navSecondary } from "@/config/navigation";

export function SearchCommand() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          e.key === "/" &&
          ["INPUT", "TEXTAREA"].includes(
            (e.target as HTMLElement)?.tagName ?? "",
          )
        )
          return;
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = React.useCallback(
    (url: string) => {
      setOpen(false);
      router.push(url);
    },
    [router],
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex h-8 w-full items-center gap-2 rounded-lg border bg-muted/40 px-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted/70 sm:w-64"
      >
        <HugeiconsIcon
          icon={Search01Icon}
          className="size-4 shrink-0"
          strokeWidth={1.8}
        />
        <span className="flex-1 text-start">Search…</span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-0.5 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search projects, pages, actions…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {navGroups.map((group, gi) => (
            <React.Fragment key={group.label ?? gi}>
              <CommandGroup heading={group.label}>
                {group.items.map((item) => (
                  <CommandItem
                    key={item.url}
                    value={`${item.title} ${item.url}`}
                    onSelect={() => go(item.url)}
                  >
                    <HugeiconsIcon icon={item.icon} strokeWidth={1.8} />
                    <span>{item.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              {gi < navGroups.length - 1 ? <CommandSeparator /> : null}
            </React.Fragment>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Help">
            {navSecondary.map((item) => (
              <CommandItem
                key={item.url}
                value={item.title}
                onSelect={() => go(item.url)}
              >
                <HugeiconsIcon icon={item.icon} strokeWidth={1.8} />
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
