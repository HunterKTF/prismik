"use client"

import * as React from "react"
import {
  ArrowUpDown,
  AudioWaveform,
  Banknote,
  Blocks,
  BookOpen,
  Bot,
  CircleArrowOutUpRight,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Landmark,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  TableProperties
} from "lucide-react"

import { ClientSwitcher } from "@/components/client-switcher"
import { NavMain } from "@/components/nav-main"
import { NavData } from "@/components/nav-data"
import { NavSecondary } from "@/components/nav-secondary"
import { SidebarUpload } from "@/components/nav-upload"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

const data = {
  clients: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/evilrabbit.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#dashboard",
      icon: LayoutDashboard,
      items: [
        {
          title: "Revenue",
          url: "#sec1",
        },
        {
          title: "Profitability",
          url: "#sec2",
        },
        {
          title: "Efficiency",
          url: "#sec3",
        },
        {
          title: "Liquidity",
          url: "#sec4",
        },
        {
          title: "Leverage",
          url: "#sec5",
        },
      ],
    },
    {
      title: "Cashflow",
      url: "#cashflow",
      icon: CircleArrowOutUpRight,
      items: [
        {
          title: "Operations",
          url: "#cash1",
        },
        {
          title: "Investing",
          url: "#cash2",
        },
        {
          title: "Financing",
          url: "#cash3",
        },
      ],
    },
    {
      title: "Receivables & Debt",
      url: "#rnd",
      icon: Banknote,
    },
    {
      title: "Expense Breakdown",
      url: "#rnd",
      icon: Blocks,
    },
    {
      title: "Economic Benchmark",
      url: "#economics",
      icon: Landmark,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
  ],
  data: [
    {
      name: "Upload Data",
      url: "#",
      icon: TableProperties,
    },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <ClientSwitcher
          clients={data.clients}
          defaultClient={data.clients[0]}
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavData data={data.data} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <SidebarUpload />
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
