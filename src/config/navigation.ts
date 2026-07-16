import type { IconSvgElement } from "@hugeicons/react";
import {
  DashboardSquare01Icon,
  Folder01Icon,
  RocketIcon,
  PulseRectangle01Icon,
  BubbleChatIcon,
  RoboticIcon,
  TaskDaily01Icon,
  TerminalIcon,
  ChipIcon,
  Key01Icon,
  SlidersHorizontalIcon,
  Layers01Icon,
  ChartLineData01Icon,
  SourceCodeSquareIcon,
  Globe02Icon,
  Database01Icon,
  Analytics01Icon,
  Shield01Icon,
  FunctionSquareIcon,
  UserMultiple02Icon,
  CreditCardIcon,
  PuzzleIcon,
  Settings01Icon,
  Book02Icon,
  HelpCircleIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

export type BadgeTone = "count" | "new" | "beta" | "live";

export type NavBadge = {
  label: string;
  tone?: BadgeTone;
};

export type NavItem = {
  title: string;
  url: string;
  icon: IconSvgElement;
  badge?: NavBadge;
  /** Optional nested children rendered as a collapsible sub-tree. */
  items?: { title: string; url: string }[];
};

export type NavGroup = {
  label?: string;
  items: NavItem[];
};

/**
 * Console information architecture.
 * Merges three product surfaces into one workspace:
 *   • Overview + Infrastructure  → Vercel-style deploy/hosting
 *   • Agents                     → Codex-style agent & chat surface
 *   • AI Platform                → OpenAI / Claude platform (models & API)
 */
export const navGroups: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { title: "Overview", url: "/", icon: DashboardSquare01Icon },
      {
        title: "Projects",
        url: "/projects",
        icon: Folder01Icon,
        badge: { label: "12", tone: "count" },
      },
      {
        title: "Deployments",
        url: "/deployments",
        icon: RocketIcon,
        badge: { label: "Live", tone: "live" },
      },
      { title: "Activity", url: "/activity", icon: PulseRectangle01Icon },
    ],
  },
  {
    label: "Agents",
    items: [
      {
        title: "Chat",
        url: "/chat",
        icon: BubbleChatIcon,
        badge: { label: "New", tone: "new" },
      },
      {
        title: "Agents",
        url: "/agents",
        icon: RoboticIcon,
        badge: { label: "2", tone: "count" },
      },
      { title: "Tasks", url: "/tasks", icon: TaskDaily01Icon },
      { title: "Playground", url: "/playground", icon: TerminalIcon },
    ],
  },
  {
    label: "AI Platform",
    items: [
      { title: "Models", url: "/models", icon: ChipIcon },
      { title: "API Keys", url: "/api-keys", icon: Key01Icon },
      {
        title: "Fine-tuning",
        url: "/fine-tuning",
        icon: SlidersHorizontalIcon,
      },
      { title: "Batches", url: "/batches", icon: Layers01Icon },
      { title: "Usage", url: "/usage", icon: ChartLineData01Icon },
      { title: "Logs", url: "/logs", icon: SourceCodeSquareIcon },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { title: "Domains", url: "/domains", icon: Globe02Icon },
      { title: "Storage", url: "/storage", icon: Database01Icon },
      { title: "Observability", url: "/observability", icon: Analytics01Icon },
      {
        title: "Firewall",
        url: "/firewall",
        icon: Shield01Icon,
        badge: { label: "Beta", tone: "beta" },
      },
      { title: "Functions", url: "/functions", icon: FunctionSquareIcon },
    ],
  },
  {
    label: "Workspace",
    items: [
      { title: "Team", url: "/team", icon: UserMultiple02Icon },
      { title: "Billing", url: "/billing", icon: CreditCardIcon },
      { title: "Integrations", url: "/integrations", icon: PuzzleIcon },
      { title: "Settings", url: "/settings", icon: Settings01Icon },
    ],
  },
];

export const navSecondary: NavItem[] = [
  { title: "Documentation", url: "/docs", icon: Book02Icon },
  { title: "Changelog", url: "/changelog", icon: SparklesIcon },
  { title: "Support", url: "/support", icon: HelpCircleIcon },
];

/** Every routable destination, used to generate stub pages + the command menu. */
export const allNavItems: NavItem[] = [
  ...navGroups.flatMap((g) => g.items),
  ...navSecondary,
];

export type Workspace = {
  name: string;
  slug: string;
  plan: string;
};

export const workspaces: Workspace[] = [
  { name: "aiellie", slug: "aiellie", plan: "Pro" },
  { name: "Ellie OS", slug: "ellie-os", plan: "Enterprise" },
  { name: "Personal", slug: "personal", plan: "Hobby" },
];

export const currentUser = {
  name: "Ellie",
  handle: "aiellie",
  email: "elliesophia1@gmail.com",
  avatar: "/avatars/ellie.png",
};
