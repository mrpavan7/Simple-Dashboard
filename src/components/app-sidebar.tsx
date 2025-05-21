import * as React from "react";
import {
  AudioWaveform,
  BadgeCent,
  BellRing,
  Command,
  Crown,
  FileText,
  GalleryVerticalEnd,
  GitFork,
  IdCard,
  Info,
  Link,
  MessageSquareDot,
  Plug,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import AppTitle from "./app-title";
import { Separator } from "./ui/separator";

// This is sample data.
const data = {
  user: {
    name: "Pavan",
    email: "pavanpn111@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "amazon.com",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "flipkart.com",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "creatiwise.com",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Articles",
      url: "#",
      icon: FileText,
      isActive: true,
      items: [
        {
          title: "Create Articles",
          url: "#",
        },
        {
          title: "Generated Articles",
          url: "#",
        },
        {
          title: "Keyword Projects",
          url: "#",
        },
        {
          title: "AI Keyword to Article",
          url: "#",
        },
        {
          title: "Steal Competitor Keyword",
          url: "#",
        },
        {
          title: "Import Keyword from GSC",
          url: "#",
        },
        {
          title: "Manual Keyword to Article",
          url: "#",
        },
        {
          title: "Bulk Keyword to Article",
          url: "#",
        },
        {
          title: "Longtail Keyword to Article",
          url: "#",
        },
        {
          title: "Article Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Auto Blog",
      url: "#",
      icon: IdCard,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Internal Links",
      url: "#",
      icon: GitFork,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Free Backlinks",
      url: "#",
      icon: Link,
    },
    {
      title: "Integrations",
      url: "#",
      icon: Plug,
    },
    {
      title: "Subscription",
      url: "#",
      icon: Crown,
    },
    {
      title: "Affiliate Program",
      url: "#",
      icon: BadgeCent,
    },
    {
      title: "Help Center",
      url: "#",
      icon: Info,
    },
    {
      title: "Updates",
      url: "#",
      icon: BellRing,
    },
    {
      title: "Live Chat Support",
      url: "#",
      icon: MessageSquareDot,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppTitle title="abun" />
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <Separator />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
