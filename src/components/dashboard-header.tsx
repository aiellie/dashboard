"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Notification03Icon,
  Github01Icon,
  CircleArrowUpRight02Icon,
} from "@hugeicons/core-free-icons";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchCommand } from "@/components/search-command";
import { allNavItems } from "@/config/navigation";

function usePageTitle() {
  const pathname = usePathname();
  if (pathname === "/") return "Overview";
  const match = allNavItems.find(
    (i) => i.url !== "/" && pathname.startsWith(i.url),
  );
  if (match) return match.title;
  const seg = pathname.split("/").filter(Boolean)[0] ?? "";
  return seg.charAt(0).toUpperCase() + seg.slice(1);
}

export function DashboardHeader() {
  const title = usePageTitle();

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b bg-background/80 backdrop-blur-md transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-2 px-3 sm:px-4">
        <SidebarTrigger className="-ms-1 text-muted-foreground" />
        <Separator
          orientation="vertical"
          className="me-1 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden sm:block">
              <BreadcrumbLink asChild>
                <Link href="/">aiellie</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden sm:block" />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="ms-auto flex items-center gap-1.5">
          <SearchCommand />
          <Button
            variant="ghost"
            size="icon"
            className="hidden size-8 text-muted-foreground sm:inline-flex"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <HugeiconsIcon
                icon={Github01Icon}
                className="size-[18px]"
                strokeWidth={1.8}
              />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative size-8 text-muted-foreground"
            aria-label="Notifications"
          >
            <HugeiconsIcon
              icon={Notification03Icon}
              className="size-[18px]"
              strokeWidth={1.8}
            />
            <span className="absolute end-1.5 top-1.5 size-2 rounded-full bg-primary ring-2 ring-background" />
          </Button>
          <ThemeToggle />
          <Separator
            orientation="vertical"
            className="mx-1 hidden data-[orientation=vertical]:h-4 sm:block"
          />
          <Button size="sm" className="hidden h-8 gap-1.5 sm:inline-flex">
            <HugeiconsIcon
              icon={CircleArrowUpRight02Icon}
              className="size-4"
              strokeWidth={2}
            />
            Deploy
          </Button>
        </div>
      </div>
    </header>
  );
}
