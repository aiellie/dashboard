"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { UnfoldMoreIcon, PlusSignIcon } from "@hugeicons/core-free-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { EllieMark } from "@/components/ellie-mark";
import { workspaces, type Workspace } from "@/config/navigation";

export function TeamSwitcher() {
  const { isMobile } = useSidebar();
  const [active, setActive] = React.useState<Workspace>(workspaces[0]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center overflow-hidden rounded-lg ring-1 ring-border/60">
                <EllieMark className="size-8!" />
              </div>
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-semibold tracking-tight">
                  {active.name}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {active.plan} · console
                </span>
              </div>
              <HugeiconsIcon
                icon={UnfoldMoreIcon}
                className="ms-auto text-muted-foreground"
                strokeWidth={1.8}
              />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-60 rounded-xl"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Workspaces
            </DropdownMenuLabel>
            {workspaces.map((ws, i) => (
              <DropdownMenuItem
                key={ws.slug}
                onClick={() => setActive(ws)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center overflow-hidden rounded-md ring-1 ring-border/60">
                  <EllieMark className="size-6!" />
                </div>
                <span className="flex-1">{ws.name}</span>
                <Badge variant="secondary" className="px-1.5 text-[10px]">
                  {ws.plan}
                </Badge>
                <DropdownMenuShortcut>⌘{i + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2 text-muted-foreground">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <HugeiconsIcon icon={PlusSignIcon} className="size-4" />
              </div>
              <span>Create workspace</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
