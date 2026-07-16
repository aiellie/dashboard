import { HugeiconsIcon } from "@hugeicons/react";
import {
  PlusSignIcon,
  Shield01Icon,
  Copy01Icon,
  EyeIcon,
  MoreHorizontalIcon,
  PencilEdit02Icon,
  RefreshIcon,
  Delete02Icon,
  Folder01Icon,
  Key01Icon,
} from "@hugeicons/core-free-icons";

import { PageBody, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { apiKeys, projects, type ApiKey } from "@/lib/mock-data";

export const metadata = { title: "API keys" };

const permissionBadge: Record<
  ApiKey["permission"],
  { variant: "secondary" | "outline"; className?: string }
> = {
  All: { variant: "secondary" },
  Write: { variant: "outline" },
  Read: { variant: "outline", className: "text-muted-foreground" },
};

const envDot: Record<ApiKey["env"], string> = {
  Production: "bg-emerald-500",
  Development: "bg-sky-500",
};

const rateLimits = [
  { label: "Requests / min", used: "4,210", limit: "10,000", value: 42 },
  { label: "Tokens / min", used: "1.26M", limit: "2,000,000", value: 63 },
  { label: "Concurrent requests", used: "12", limit: "40", value: 30 },
];

export default function ApiKeysPage() {
  return (
    <PageBody>
      <PageHeader
        title="API keys"
        description="Keys applications use to authenticate with the aiellie platform API."
      >
        <Button size="sm" className="gap-1.5">
          <HugeiconsIcon icon={PlusSignIcon} className="size-4" strokeWidth={1.8} />
          Create key
        </Button>
      </PageHeader>

      {/* Security note */}
      <Card className="border bg-muted/30 shadow-none">
        <CardContent className="flex items-start gap-3">
          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-background text-muted-foreground ring-1 ring-border">
            <HugeiconsIcon icon={Shield01Icon} className="size-4" strokeWidth={1.8} />
          </span>
          <div className="space-y-0.5 text-sm">
            <p className="font-medium">Keep your secret keys safe</p>
            <p className="text-muted-foreground">
              A key&apos;s full secret is shown only once, at creation. Store it
              in a secure vault — you won&apos;t be able to view it again. Rotate
              or revoke immediately if a key is ever exposed.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Keys table */}
      <Card className="gap-0 py-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="ps-4 sm:ps-6">Name</TableHead>
              <TableHead>Key</TableHead>
              <TableHead>Permission</TableHead>
              <TableHead>Environment</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Last used</TableHead>
              <TableHead>Created by</TableHead>
              <TableHead className="pe-4 text-end sm:pe-6">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiKeys.map((k) => (
              <TableRow key={k.id}>
                <TableCell className="ps-4 font-medium sm:ps-6">
                  {k.name}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <code className="font-mono text-xs text-muted-foreground">
                      {k.prefix}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 text-muted-foreground"
                      aria-label="Copy key"
                    >
                      <HugeiconsIcon
                        icon={Copy01Icon}
                        className="size-3.5"
                        strokeWidth={1.8}
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 text-muted-foreground"
                      aria-label="Reveal key"
                    >
                      <HugeiconsIcon
                        icon={EyeIcon}
                        className="size-3.5"
                        strokeWidth={1.8}
                      />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={permissionBadge[k.permission].variant}
                    className={permissionBadge[k.permission].className}
                  >
                    {k.permission}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="gap-1.5 font-normal">
                    <span
                      className={cn("size-1.5 rounded-full", envDot[k.env])}
                    />
                    {k.env}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground tabular-nums">
                  {k.created}
                </TableCell>
                <TableCell className="text-muted-foreground tabular-nums">
                  {k.lastUsed}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <AvatarFallback className="uppercase">
                        {k.createdBy.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{k.createdBy}</span>
                  </div>
                </TableCell>
                <TableCell className="pe-4 text-end sm:pe-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7 text-muted-foreground"
                        aria-label="Key actions"
                      >
                        <HugeiconsIcon
                          icon={MoreHorizontalIcon}
                          className="size-4"
                          strokeWidth={1.8}
                        />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem>
                        <HugeiconsIcon
                          icon={PencilEdit02Icon}
                          className="size-4"
                          strokeWidth={1.8}
                        />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <HugeiconsIcon
                          icon={RefreshIcon}
                          className="size-4"
                          strokeWidth={1.8}
                        />
                        Rotate
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">
                        <HugeiconsIcon
                          icon={Delete02Icon}
                          className="size-4"
                          strokeWidth={1.8}
                        />
                        Revoke
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Limits + defaults */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Rate limits</CardTitle>
            <CardDescription>
              Current account limits across all keys.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            {rateLimits.map((r) => (
              <div key={r.label} className="space-y-2">
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="font-medium tabular-nums">
                    <span className="text-muted-foreground">{r.used}</span>
                    <span className="text-muted-foreground/50"> / </span>
                    {r.limit}
                  </span>
                </div>
                <Progress value={r.value} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Default project</CardTitle>
            <CardDescription>
              New keys are scoped here unless you pick another project.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-lg bg-muted/40 p-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-background text-muted-foreground ring-1 ring-border">
                <HugeiconsIcon
                  icon={Folder01Icon}
                  className="size-4"
                  strokeWidth={1.8}
                />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">aiellie-console</p>
                <p className="truncate text-xs text-muted-foreground">
                  console.aiellie.dev
                </p>
              </div>
              <Badge variant="secondary" className="ms-auto gap-1">
                <HugeiconsIcon
                  icon={Key01Icon}
                  className="size-3"
                  strokeWidth={1.8}
                />
                4 keys
              </Badge>
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-project">Change default</Label>
              <Select defaultValue="aiellie-console">
                <SelectTrigger id="default-project" className="w-full">
                  <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                  {projects.map((p) => (
                    <SelectItem key={p.id} value={p.name}>
                      {p.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Applies to keys created from the dashboard.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageBody>
  );
}
