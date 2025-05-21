import {
  IconBrandAmazon,
  IconBrandCashapp,
  IconBrandFirebase,
} from "@tabler/icons-react";
import {
  BadgeCent,
  BellRing,
  Crown,
  FileText,
  GitFork,
  IdCard,
  Info,
  Link,
  MessageSquareDot,
  Plug,
} from "lucide-react";

export const sidebarData = {
  user: {
    name: "Pavan",
    email: "pavanpn111@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "amazon.com",
      logo: IconBrandAmazon,
      plan: "Enterprise",
    },
    {
      name: "firebase.com",
      logo: IconBrandFirebase,
      plan: "Startup",
    },
    {
      name: "creatiwise.com",
      logo: IconBrandCashapp,
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
