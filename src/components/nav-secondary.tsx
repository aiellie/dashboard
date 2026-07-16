"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navSecondary } from "@/config/navigation";

export function NavSecondary() {
  return (
    <SidebarGroup className="mt-auto py-0">
      <SidebarGroupContent>
        <SidebarMenu>
          {navSecondary.map((item) => (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton asChild size="sm" tooltip={item.title}>
                <Link href={item.url}>
                  <HugeiconsIcon icon={item.icon} strokeWidth={1.8} />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
