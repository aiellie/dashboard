/**
 * Static mock data for the console template.
 * Relative timestamps are pre-formatted strings to keep SSR/CSR output stable
 * (no Date.now() at render → no hydration mismatch).
 */

export type DeployStatus =
  | "ready"
  | "building"
  | "error"
  | "queued"
  | "canceled";

export type Framework =
  | "Next.js"
  | "Remix"
  | "Astro"
  | "SvelteKit"
  | "Nuxt"
  | "Vite";

export type Project = {
  id: string;
  name: string;
  framework: Framework;
  repo: string;
  domain: string;
  env: "Production" | "Preview";
  status: DeployStatus;
  updated: string;
  branch: string;
  favorite?: boolean;
};

export const projects: Project[] = [
  {
    id: "p_console",
    name: "aiellie-console",
    framework: "Next.js",
    repo: "aiellie/console",
    domain: "console.aiellie.dev",
    env: "Production",
    status: "ready",
    updated: "2m ago",
    branch: "main",
    favorite: true,
  },
  {
    id: "p_ui",
    name: "aiellie-ui",
    framework: "Next.js",
    repo: "aiellie/ui",
    domain: "ui.aiellie.dev",
    env: "Production",
    status: "ready",
    updated: "1h ago",
    branch: "main",
    favorite: true,
  },
  {
    id: "p_docs",
    name: "docs",
    framework: "Astro",
    repo: "aiellie/docs",
    domain: "docs.aiellie.dev",
    env: "Production",
    status: "building",
    updated: "just now",
    branch: "feat/api-reference",
  },
  {
    id: "p_api",
    name: "api-gateway",
    framework: "Remix",
    repo: "aiellie/api-gateway",
    domain: "api.aiellie.dev",
    env: "Production",
    status: "ready",
    updated: "5h ago",
    branch: "main",
  },
  {
    id: "p_marketing",
    name: "marketing",
    framework: "Nuxt",
    repo: "aiellie/marketing",
    domain: "aiellie.dev",
    env: "Production",
    status: "error",
    updated: "3h ago",
    branch: "main",
  },
  {
    id: "p_playground",
    name: "playground",
    framework: "Vite",
    repo: "aiellie/playground",
    domain: "play.aiellie.dev",
    env: "Preview",
    status: "ready",
    updated: "yesterday",
    branch: "main",
  },
  {
    id: "p_status",
    name: "status-page",
    framework: "SvelteKit",
    repo: "aiellie/status",
    domain: "status.aiellie.dev",
    env: "Production",
    status: "queued",
    updated: "6h ago",
    branch: "main",
  },
  {
    id: "p_blog",
    name: "blog",
    framework: "Astro",
    repo: "aiellie/blog",
    domain: "blog.aiellie.dev",
    env: "Production",
    status: "ready",
    updated: "2d ago",
    branch: "main",
  },
];

export type Deployment = {
  id: string;
  project: string;
  status: DeployStatus;
  env: "Production" | "Preview";
  branch: string;
  commit: string;
  message: string;
  author: string;
  created: string;
  duration: string;
};

export const deployments: Deployment[] = [
  {
    id: "dpl_9Ha2",
    project: "aiellie-console",
    status: "ready",
    env: "Production",
    branch: "main",
    commit: "a1c93f2",
    message: "feat: wire command palette to router",
    author: "ellie",
    created: "2m ago",
    duration: "38s",
  },
  {
    id: "dpl_8Gb1",
    project: "docs",
    status: "building",
    env: "Preview",
    branch: "feat/api-reference",
    commit: "77d0e14",
    message: "docs: add streaming examples",
    author: "ellie",
    created: "just now",
    duration: "—",
  },
  {
    id: "dpl_7Fc0",
    project: "aiellie-ui",
    status: "ready",
    env: "Production",
    branch: "main",
    commit: "3b8a9c1",
    message: "fix: sidebar rail focus ring in RTL",
    author: "ellie",
    created: "1h ago",
    duration: "41s",
  },
  {
    id: "dpl_6Ed9",
    project: "marketing",
    status: "error",
    env: "Production",
    branch: "main",
    commit: "de44a02",
    message: "chore: bump nuxt to 3.14",
    author: "sam",
    created: "3h ago",
    duration: "1m 12s",
  },
  {
    id: "dpl_5Dc8",
    project: "api-gateway",
    status: "ready",
    env: "Production",
    branch: "main",
    commit: "9f2b1aa",
    message: "perf: cache model routing table",
    author: "sam",
    created: "5h ago",
    duration: "52s",
  },
  {
    id: "dpl_4Cb7",
    project: "status-page",
    status: "queued",
    env: "Production",
    branch: "main",
    commit: "c1d7e33",
    message: "feat: incident timeline",
    author: "ellie",
    created: "6h ago",
    duration: "—",
  },
  {
    id: "dpl_3Ba6",
    project: "playground",
    status: "canceled",
    env: "Preview",
    branch: "spike/tools",
    commit: "0aa1b90",
    message: "spike: tool-calling sandbox",
    author: "ellie",
    created: "yesterday",
    duration: "—",
  },
  {
    id: "dpl_2Az5",
    project: "blog",
    status: "ready",
    env: "Production",
    branch: "main",
    commit: "b7c3d21",
    message: "post: shipping the console",
    author: "ellie",
    created: "2d ago",
    duration: "29s",
  },
];

export type Model = {
  id: string;
  name: string;
  provider: string;
  description: string;
  context: string;
  input: number; // $ / 1M tokens
  output: number; // $ / 1M tokens
  capabilities: string[];
  status: "GA" | "Preview" | "Legacy";
  featured?: boolean;
};

export const models: Model[] = [
  {
    id: "fable-5",
    name: "Claude Fable 5",
    provider: "Anthropic",
    description: "Most capable model for deep reasoning and agentic work.",
    context: "500K",
    input: 5,
    output: 25,
    capabilities: ["Reasoning", "Vision", "Tools", "1M ctx"],
    status: "GA",
    featured: true,
  },
  {
    id: "opus-4-8",
    name: "Claude Opus 4.8",
    provider: "Anthropic",
    description: "Frontier intelligence with fast, high-quality output.",
    context: "200K",
    input: 5,
    output: 15,
    capabilities: ["Reasoning", "Vision", "Tools"],
    status: "GA",
    featured: true,
  },
  {
    id: "sonnet-5",
    name: "Claude Sonnet 5",
    provider: "Anthropic",
    description: "Balanced speed and intelligence for production traffic.",
    context: "200K",
    input: 3,
    output: 15,
    capabilities: ["Vision", "Tools"],
    status: "GA",
  },
  {
    id: "haiku-4-5",
    name: "Claude Haiku 4.5",
    provider: "Anthropic",
    description: "Fastest, most cost-effective model for light tasks.",
    context: "200K",
    input: 1,
    output: 5,
    capabilities: ["Vision", "Tools"],
    status: "GA",
  },
  {
    id: "gpt-5",
    name: "GPT-5",
    provider: "OpenAI",
    description: "General-purpose flagship with strong tool use.",
    context: "256K",
    input: 5,
    output: 20,
    capabilities: ["Reasoning", "Vision", "Tools"],
    status: "GA",
  },
  {
    id: "o4",
    name: "o4",
    provider: "OpenAI",
    description: "Reasoning-optimized model for hard problems.",
    context: "200K",
    input: 8,
    output: 32,
    capabilities: ["Reasoning", "Tools"],
    status: "Preview",
  },
  {
    id: "gemini-3-pro",
    name: "Gemini 3 Pro",
    provider: "Google",
    description: "Long-context multimodal model.",
    context: "2M",
    input: 4,
    output: 12,
    capabilities: ["Vision", "Audio", "1M ctx"],
    status: "GA",
  },
  {
    id: "llama-4-405b",
    name: "Llama 4 405B",
    provider: "Meta",
    description: "Open-weights model for self-hosting.",
    context: "128K",
    input: 2,
    output: 6,
    capabilities: ["Tools", "Open weights"],
    status: "GA",
  },
];

export type ApiKey = {
  id: string;
  name: string;
  prefix: string;
  created: string;
  lastUsed: string;
  createdBy: string;
  permission: "All" | "Read" | "Write";
  env: "Production" | "Development";
};

export const apiKeys: ApiKey[] = [
  {
    id: "key_1",
    name: "production-server",
    prefix: "sk-ael-•••••••••••••8fa2",
    created: "Apr 2, 2026",
    lastUsed: "2m ago",
    createdBy: "ellie",
    permission: "All",
    env: "Production",
  },
  {
    id: "key_2",
    name: "edge-functions",
    prefix: "sk-ael-•••••••••••••2b19",
    created: "Mar 28, 2026",
    lastUsed: "1h ago",
    createdBy: "ellie",
    permission: "Write",
    env: "Production",
  },
  {
    id: "key_3",
    name: "analytics-readonly",
    prefix: "sk-ael-•••••••••••••7c04",
    created: "Mar 15, 2026",
    lastUsed: "yesterday",
    createdBy: "sam",
    permission: "Read",
    env: "Production",
  },
  {
    id: "key_4",
    name: "local-dev",
    prefix: "sk-ael-•••••••••••••d5e8",
    created: "Feb 9, 2026",
    lastUsed: "3d ago",
    createdBy: "ellie",
    permission: "All",
    env: "Development",
  },
];

/** Daily usage series for charts — 30 points. */
export type UsagePoint = {
  date: string; // "Jun 17"
  requests: number;
  tokens: number; // millions
  cost: number; // dollars
};

export const usageSeries: UsagePoint[] = [
  { date: "Jun 17", requests: 12400, tokens: 41, cost: 128 },
  { date: "Jun 18", requests: 13100, tokens: 44, cost: 137 },
  { date: "Jun 19", requests: 11800, tokens: 39, cost: 121 },
  { date: "Jun 20", requests: 15200, tokens: 52, cost: 162 },
  { date: "Jun 21", requests: 9800, tokens: 32, cost: 99 },
  { date: "Jun 22", requests: 8600, tokens: 28, cost: 86 },
  { date: "Jun 23", requests: 16900, tokens: 58, cost: 181 },
  { date: "Jun 24", requests: 18200, tokens: 63, cost: 197 },
  { date: "Jun 25", requests: 17400, tokens: 60, cost: 188 },
  { date: "Jun 26", requests: 19100, tokens: 66, cost: 206 },
  { date: "Jun 27", requests: 14300, tokens: 49, cost: 152 },
  { date: "Jun 28", requests: 12700, tokens: 42, cost: 131 },
  { date: "Jun 29", requests: 20400, tokens: 71, cost: 221 },
  { date: "Jun 30", requests: 22800, tokens: 79, cost: 247 },
  { date: "Jul 1", requests: 21500, tokens: 74, cost: 233 },
  { date: "Jul 2", requests: 23600, tokens: 82, cost: 258 },
  { date: "Jul 3", requests: 19800, tokens: 68, cost: 214 },
  { date: "Jul 4", requests: 15100, tokens: 51, cost: 159 },
  { date: "Jul 5", requests: 16700, tokens: 57, cost: 178 },
  { date: "Jul 6", requests: 24900, tokens: 87, cost: 272 },
  { date: "Jul 7", requests: 26300, tokens: 92, cost: 288 },
  { date: "Jul 8", requests: 25100, tokens: 88, cost: 274 },
  { date: "Jul 9", requests: 27800, tokens: 97, cost: 305 },
  { date: "Jul 10", requests: 29200, tokens: 102, cost: 321 },
  { date: "Jul 11", requests: 22400, tokens: 78, cost: 244 },
  { date: "Jul 12", requests: 20900, tokens: 72, cost: 227 },
  { date: "Jul 13", requests: 31500, tokens: 110, cost: 347 },
  { date: "Jul 14", requests: 33800, tokens: 118, cost: 372 },
  { date: "Jul 15", requests: 32100, tokens: 112, cost: 353 },
  { date: "Jul 16", requests: 35600, tokens: 124, cost: 391 },
];

export type Activity = {
  id: string;
  actor: string;
  action: string;
  target: string;
  time: string;
  kind: "deploy" | "agent" | "key" | "domain" | "member" | "billing";
};

export const activity: Activity[] = [
  {
    id: "a1",
    actor: "ellie",
    action: "deployed",
    target: "aiellie-console",
    time: "2m ago",
    kind: "deploy",
  },
  {
    id: "a2",
    actor: "agent · Refactorer",
    action: "opened PR on",
    target: "aiellie-ui",
    time: "12m ago",
    kind: "agent",
  },
  {
    id: "a3",
    actor: "sam",
    action: "rotated key",
    target: "edge-functions",
    time: "40m ago",
    kind: "key",
  },
  {
    id: "a4",
    actor: "ellie",
    action: "added domain",
    target: "play.aiellie.dev",
    time: "1h ago",
    kind: "domain",
  },
  {
    id: "a5",
    actor: "agent · Triage",
    action: "resolved 3 tasks in",
    target: "support-queue",
    time: "2h ago",
    kind: "agent",
  },
  {
    id: "a6",
    actor: "sam",
    action: "invited",
    target: "jordan@aiellie.dev",
    time: "3h ago",
    kind: "member",
  },
  {
    id: "a7",
    actor: "system",
    action: "processed invoice for",
    target: "June usage",
    time: "yesterday",
    kind: "billing",
  },
];

export type Agent = {
  id: string;
  name: string;
  description: string;
  model: string;
  status: "running" | "idle" | "scheduled" | "paused";
  runs: number;
  successRate: number;
  lastRun: string;
};

export const agents: Agent[] = [
  {
    id: "ag_refactor",
    name: "Refactorer",
    description: "Opens PRs to clean up and modernize code across repos.",
    model: "Claude Opus 4.8",
    status: "running",
    runs: 342,
    successRate: 96,
    lastRun: "12m ago",
  },
  {
    id: "ag_triage",
    name: "Triage",
    description: "Labels, prioritizes, and answers incoming support tickets.",
    model: "Claude Sonnet 5",
    status: "running",
    runs: 1208,
    successRate: 91,
    lastRun: "2m ago",
  },
  {
    id: "ag_review",
    name: "Reviewer",
    description: "Reviews every PR for bugs, security, and style.",
    model: "Claude Fable 5",
    status: "idle",
    runs: 587,
    successRate: 98,
    lastRun: "1h ago",
  },
  {
    id: "ag_release",
    name: "Release Notes",
    description: "Drafts changelogs from merged pull requests each Friday.",
    model: "Claude Haiku 4.5",
    status: "scheduled",
    runs: 24,
    successRate: 100,
    lastRun: "3d ago",
  },
  {
    id: "ag_seo",
    name: "SEO Writer",
    description: "Generates and updates marketing copy and metadata.",
    model: "GPT-5",
    status: "paused",
    runs: 78,
    successRate: 88,
    lastRun: "1w ago",
  },
];

export type ChatThread = {
  id: string;
  title: string;
  model: string;
  updated: string;
  preview: string;
};

export const chatThreads: ChatThread[] = [
  {
    id: "t1",
    title: "Refactor the sidebar to use slots",
    model: "Claude Opus 4.8",
    updated: "2m ago",
    preview: "Here's a plan that keeps the collapsible rail working…",
  },
  {
    id: "t2",
    title: "Why is my build failing on Nuxt 3.14?",
    model: "Claude Sonnet 5",
    updated: "1h ago",
    preview: "The error points at an ESM/CJS interop issue in…",
  },
  {
    id: "t3",
    title: "Write migration for the usage table",
    model: "Claude Fable 5",
    updated: "yesterday",
    preview: "I'll add a reversible migration and a backfill…",
  },
  {
    id: "t4",
    title: "Draft launch tweet for the console",
    model: "GPT-5",
    updated: "2d ago",
    preview: "Ship it: three dashboards, one console…",
  },
];

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export const sampleConversation: ChatMessage[] = [
  {
    id: "m1",
    role: "user",
    content:
      "Refactor the sidebar so each nav group can be collapsed independently.",
  },
  {
    id: "m2",
    role: "assistant",
    content:
      "Good call. I'll wrap each SidebarGroup in a Collapsible and persist the open state per group in a cookie so it survives reloads. This keeps the icon-rail mode working because collapsed groups just render their trigger. Want me to open a PR against aiellie/console with the change and a short migration note?",
  },
  {
    id: "m3",
    role: "user",
    content: "Yes, open the PR and add tests for the persistence.",
  },
];
