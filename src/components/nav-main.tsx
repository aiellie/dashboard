"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavBadge } from "@/components/nav-badge";
import { navGroups } from "@/config/navigation";

function isActive(pathname: string, url: string) {
  if (url === "/") return pathname === "/";
  return pathname === url || pathname.startsWith(`${url}/`);
}

export function NavMain() {
  const pathname = usePathname();

  return (
    <>
      {navGroups.map((group, gi) => (
        <SidebarGroup key={group.label ?? gi}>
          {group.label ? (
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          ) : null}
          <SidebarMenu>
            {group.items.map((item) => {
              const active = isActive(pathname, item.url);
              return (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={active}
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <HugeiconsIcon icon={item.icon} strokeWidth={1.8} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge ? (
                    <SidebarMenuBadge className="peer-hover/menu-button:text-inherit">
                      <NavBadge badge={item.badge} />
                    </SidebarMenuBadge>
                  ) : null}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}
