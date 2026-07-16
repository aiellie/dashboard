"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  PlusSignIcon,
  Attachment01Icon,
  Mic01Icon,
  SentIcon,
  Copy01Icon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  RepeatIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { chatThreads, sampleConversation } from "@/lib/mock-data";

const MODEL_OPTIONS = [
  "Claude Opus 4.8",
  "Claude Fable 5",
  "Claude Sonnet 5",
  "Claude Haiku 4.5",
  "GPT-5",
];

const ASSISTANT_ACTIONS = [
  { icon: Copy01Icon, label: "Copy" },
  { icon: ThumbsUpIcon, label: "Good response" },
  { icon: ThumbsDownIcon, label: "Bad response" },
  { icon: RepeatIcon, label: "Regenerate" },
];

function Orb() {
  return (
    <span className="mt-0.5 size-7 shrink-0 rounded-full bg-gradient-to-br from-violet-300 to-indigo-400 ring-1 ring-inset ring-white/20" />
  );
}

export function ChatClient() {
  const [draft, setDraft] = React.useState("");
  const [model, setModel] = React.useState(MODEL_OPTIONS[0]);
  const [activeThread, setActiveThread] = React.useState(chatThreads[0].id);

  const active =
    chatThreads.find((t) => t.id === activeThread) ?? chatThreads[0];

  function send() {
    if (!draft.trim()) return;
    setDraft("");
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="flex h-[calc(100svh-3.5rem)]">
      {/* Threads rail */}
      <aside className="hidden w-72 shrink-0 flex-col border-e md:flex">
        <div className="flex h-12 shrink-0 items-center justify-between px-3 pe-2">
          <span className="text-sm font-semibold tracking-tight">Chats</span>
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-muted-foreground"
            aria-label="New chat"
          >
            <HugeiconsIcon
              icon={PlusSignIcon}
              className="size-4"
              strokeWidth={1.8}
            />
          </Button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-2">
          <div className="flex flex-col gap-0.5">
            {chatThreads.map((thread) => {
              const isActive = thread.id === active.id;
              return (
                <button
                  key={thread.id}
                  type="button"
                  onClick={() => setActiveThread(thread.id)}
                  className={cn(
                    "flex w-full flex-col gap-0.5 rounded-lg px-3 py-2 text-start transition-colors",
                    isActive
                      ? "bg-muted"
                      : "hover:bg-muted/50",
                  )}
                >
                  <span className="truncate text-sm font-medium">
                    {thread.title}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {thread.preview}
                  </span>
                  <span className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="truncate">{thread.model}</span>
                    <span className="text-muted-foreground/50">·</span>
                    <span className="shrink-0 tabular-nums">
                      {thread.updated}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Conversation */}
      <section className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="flex h-12 shrink-0 items-center justify-between gap-3 border-b px-4">
          <h1 className="min-w-0 truncate text-sm font-medium">
            {active.title}
          </h1>
          <Select value={model} onValueChange={setModel}>
            <SelectTrigger size="sm" className="gap-2">
              <HugeiconsIcon
                icon={SparklesIcon}
                className="size-3.5 text-muted-foreground"
                strokeWidth={1.8}
              />
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end">
              {MODEL_OPTIONS.map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </header>

        {/* Messages */}
        <div className="min-h-0 flex-1 space-y-6 overflow-y-auto p-4 sm:p-6">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
            {sampleConversation.map((message) =>
              message.role === "user" ? (
                <div key={message.id} className="flex justify-end">
                  <div className="ms-auto max-w-[80%] rounded-2xl bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground">
                    {message.content}
                  </div>
                </div>
              ) : (
                <div key={message.id} className="flex gap-3">
                  <Orb />
                  <div className="min-w-0 max-w-[80%] space-y-1.5">
                    <div className="rounded-2xl bg-muted px-4 py-2.5 text-sm leading-relaxed text-foreground">
                      {message.content}
                    </div>
                    <div className="flex items-center gap-0.5 ps-1 text-muted-foreground">
                      {ASSISTANT_ACTIONS.map((action) => (
                        <Button
                          key={action.label}
                          variant="ghost"
                          size="icon-xs"
                          aria-label={action.label}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <HugeiconsIcon
                            icon={action.icon}
                            className="size-3.5"
                            strokeWidth={1.8}
                          />
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Composer */}
        <div className="shrink-0 border-t p-3 sm:p-4">
          <div className="mx-auto w-full max-w-3xl">
            <div className="rounded-2xl border bg-card p-2 shadow-xs transition-colors focus-within:border-ring">
              <Textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Message aiellie…"
                className="min-h-11 resize-none border-0 bg-transparent px-2 py-1.5 shadow-none focus-visible:border-0 focus-visible:ring-0 dark:bg-transparent"
              />
              <div className="flex items-center justify-between gap-2 px-1 pt-1">
                <div className="flex items-center gap-0.5">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="text-muted-foreground"
                    aria-label="Attach file"
                  >
                    <HugeiconsIcon
                      icon={Attachment01Icon}
                      className="size-4"
                      strokeWidth={1.8}
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="text-muted-foreground"
                    aria-label="Dictate"
                  >
                    <HugeiconsIcon
                      icon={Mic01Icon}
                      className="size-4"
                      strokeWidth={1.8}
                    />
                  </Button>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="hidden text-xs text-muted-foreground sm:inline">
                    {model}
                  </span>
                  <Button
                    size="icon-sm"
                    onClick={send}
                    disabled={!draft.trim()}
                    aria-label="Send message"
                  >
                    <HugeiconsIcon
                      icon={SentIcon}
                      className="size-4"
                      strokeWidth={1.8}
                    />
                  </Button>
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              aiellie can make mistakes. Verify important information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
