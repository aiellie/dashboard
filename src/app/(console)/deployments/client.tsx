"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GitBranchIcon,
  MoreHorizontalIcon,
  RocketIcon,
  ViewIcon,
  TerminalIcon,
  Delete02Icon,
} from "@hugeicons/core-free-icons";

import { deployments, type Deployment } from "@/lib/mock-data";
import { StatusBadge } from "@/components/status-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Filter = "all" | "production" | "preview" | "errors";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "production", label: "Production" },
  { value: "preview", label: "Preview" },
  { value: "errors", label: "Errors" },
];

function matches(d: Deployment, f: Filter) {
  switch (f) {
    case "production":
      return d.env === "Production";
    case "preview":
      return d.env === "Preview";
    case "errors":
      return d.status === "error";
    default:
      return true;
  }
}

export function DeploymentsClient() {
  const [filter, setFilter] = React.useState<Filter>("all");

  const rows = deployments.filter((d) => matches(d, filter));
  const count = (f: Filter) => deployments.filter((d) => matches(d, f)).length;

  return (
    <div className="flex flex-col gap-4">
      <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)}>
        <TabsList>
          {FILTERS.map((f) => (
            <TabsTrigger key={f.value} value={f.value} className="gap-1.5">
              {f.label}
              <span className="rounded-full bg-muted-foreground/15 px-1.5 text-xs text-muted-foreground tabular-nums">
                {count(f.value)}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <Card className="py-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="ps-4">Status</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Message</TableHead>
                <TableHead className="hidden md:table-cell">Branch</TableHead>
                <TableHead className="hidden lg:table-cell">Author</TableHead>
                <TableHead className="hidden text-end sm:table-cell">
                  Duration
                </TableHead>
                <TableHead className="text-end">Created</TableHead>
                <TableHead className="w-10 pe-4">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((d) => (
                <TableRow key={d.id} className="hover:bg-muted/40">
                  <TableCell className="ps-4 py-3">
                    <StatusBadge status={d.status} />
                  </TableCell>
                  <TableCell className="py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{d.project}</span>
                      <Badge
                        variant="secondary"
                        className="px-1.5 text-[10px] font-medium"
                      >
                        {d.env}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="py-3">
                    <div className="max-w-[240px] truncate sm:max-w-[320px] lg:max-w-[420px]">
                      {d.message}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {d.commit}
                    </div>
                  </TableCell>
                  <TableCell className="hidden py-3 md:table-cell">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <HugeiconsIcon
                        icon={GitBranchIcon}
                        className="size-3.5"
                        strokeWidth={1.8}
                      />
                      <span className="font-mono text-xs">{d.branch}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden py-3 lg:table-cell">
                    <div className="flex items-center gap-2">
                      <Avatar size="sm">
                        <AvatarFallback className="text-[10px] uppercase">
                          {d.author.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{d.author}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden py-3 text-end text-muted-foreground tabular-nums sm:table-cell">
                    {d.duration}
                  </TableCell>
                  <TableCell className="py-3 text-end text-muted-foreground">
                    {d.created}
                  </TableCell>
                  <TableCell className="py-3 pe-4 text-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8 text-muted-foreground"
                        >
                          <HugeiconsIcon
                            icon={MoreHorizontalIcon}
                            className="size-4"
                            strokeWidth={1.8}
                          />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem>
                          <HugeiconsIcon
                            icon={ViewIcon}
                            className="size-4"
                            strokeWidth={1.8}
                          />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <HugeiconsIcon
                            icon={RocketIcon}
                            className="size-4"
                            strokeWidth={1.8}
                          />
                          Redeploy
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <HugeiconsIcon
                            icon={TerminalIcon}
                            className="size-4"
                            strokeWidth={1.8}
                          />
                          View logs
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          <HugeiconsIcon
                            icon={Delete02Icon}
                            className="size-4"
                            strokeWidth={1.8}
                          />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {rows.length === 0 ? (
                <TableRow className="hover:bg-transparent">
                  <TableCell
                    colSpan={8}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No deployments match this filter.
                  </TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
