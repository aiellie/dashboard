import { HugeiconsIcon } from "@hugeicons/react";
import { TerminalIcon, Layers01Icon } from "@hugeicons/core-free-icons";

import { PageBody, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/format";
import { models, type Model } from "@/lib/mock-data";

export const metadata = { title: "Models" };

function ModelStatusBadge({ status }: { status: Model["status"] }) {
  if (status === "GA") {
    return <Badge variant="secondary">GA</Badge>;
  }
  if (status === "Preview") {
    return (
      <Badge variant="outline" className="border-primary/30 text-primary">
        Preview
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="text-muted-foreground">
      Legacy
    </Badge>
  );
}

export default function ModelsPage() {
  const featured = models.filter((m) => m.featured);

  return (
    <PageBody>
      <PageHeader
        title="Models"
        description="Browse and compare the foundation models available to your workspace."
      >
        <Select defaultValue="all">
          <SelectTrigger size="sm" className="w-[150px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All providers</SelectItem>
            <SelectItem value="anthropic">Anthropic</SelectItem>
            <SelectItem value="openai">OpenAI</SelectItem>
            <SelectItem value="google">Google</SelectItem>
            <SelectItem value="meta">Meta</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm" className="gap-1.5">
          <HugeiconsIcon icon={Layers01Icon} className="size-4" strokeWidth={1.8} />
          Compare
        </Button>
      </PageHeader>

      {/* Featured */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium">Featured</h2>
          <span className="text-xs text-muted-foreground tabular-nums">
            {featured.length} models
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((m) => (
            <Card key={m.id} className="h-full shadow-xs">
              <CardHeader>
                <div className="space-y-1">
                  <div className="text-[11px] font-medium tracking-wider text-muted-foreground uppercase">
                    {m.provider}
                  </div>
                  <CardTitle className="text-base font-semibold">
                    {m.name}
                  </CardTitle>
                </div>
                <CardDescription className="leading-snug">
                  {m.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-1.5">
                  {m.capabilities.map((c) => (
                    <Badge key={c} variant="secondary">
                      {c}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <span className="text-xs text-muted-foreground tabular-nums">
                  {m.context} context
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs tabular-nums">
                    <span className="font-medium text-foreground">
                      ${m.input}
                    </span>
                    <span className="text-muted-foreground"> / </span>
                    <span className="font-medium text-foreground">
                      ${m.output}
                    </span>
                    <span className="text-muted-foreground"> per 1M</span>
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="-me-1.5 gap-1.5 text-muted-foreground"
                  >
                    <HugeiconsIcon
                      icon={TerminalIcon}
                      className="size-3.5"
                      strokeWidth={1.8}
                    />
                    Playground
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* All models */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium">All models</h2>
          <span className="text-xs text-muted-foreground tabular-nums">
            {models.length} models
          </span>
        </div>

        <Card className="shadow-xs">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="ps-4 sm:ps-6">Model</TableHead>
                  <TableHead>Context</TableHead>
                  <TableHead className="text-end">
                    Input{" "}
                    <span className="font-normal text-muted-foreground">
                      /1M
                    </span>
                  </TableHead>
                  <TableHead className="text-end">
                    Output{" "}
                    <span className="font-normal text-muted-foreground">
                      /1M
                    </span>
                  </TableHead>
                  <TableHead>Capabilities</TableHead>
                  <TableHead className="pe-4 text-end sm:pe-6">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {models.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell className="ps-4 py-3 sm:ps-6">
                      <div className="font-medium">{m.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {m.provider}
                      </div>
                    </TableCell>
                    <TableCell className="py-3 text-muted-foreground tabular-nums">
                      {m.context}
                    </TableCell>
                    <TableCell className="py-3 text-end tabular-nums">
                      {formatCurrency(m.input, 2)}
                    </TableCell>
                    <TableCell className="py-3 text-end tabular-nums">
                      {formatCurrency(m.output, 2)}
                    </TableCell>
                    <TableCell className="max-w-[240px] py-3 whitespace-normal">
                      <div className="flex flex-wrap gap-1">
                        {m.capabilities.map((c) => (
                          <Badge key={c} variant="secondary">
                            {c}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="pe-4 py-3 text-end sm:pe-6">
                      <ModelStatusBadge status={m.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </PageBody>
  );
}
