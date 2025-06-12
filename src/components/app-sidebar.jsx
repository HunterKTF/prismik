"use client"

import * as React from "react"
import {
  AudioWaveform,
  Banknote,
  Blocks,
  CircleArrowOutUpRight,
  Command,
  GalleryVerticalEnd,
  LayoutDashboard,
  Landmark,
  LifeBuoy,
  Network,
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
      url: "/dashboard",
      icon: LayoutDashboard,
      items: [
        {
          title: "Revenue",
          url: "/dashboard/revenue",
        },
        {
          title: "Profitability",
          url: "/dashboard/profitability",
        },
        {
          title: "Efficiency",
          url: "/dashboard/efficiency",
        },
        {
          title: "Liquidity",
          url: "/dashboard/liquidity",
        },
        {
          title: "Leverage",
          url: "/dashboard/leverage",
        },
      ],
    },
    {
      title: "Cashflow",
      url: "/cashflow",
      icon: CircleArrowOutUpRight,
      items: [
        {
          title: "Operations",
          url: "/cashflow/operations",
        },
        {
          title: "Investing",
          url: "/cashflow/investing",
        },
        {
          title: "Financing",
          url: "/cashflow/financing",
        },
      ],
    },
    {
      title: "Receivables & Debt",
      url: "/receivables",
      icon: Banknote,
    },
    {
      title: "Expense Breakdown",
      url: "/expenses",
      icon: Blocks,
    },
    {
      title: "Economic Benchmark",
      url: "/econ_benchmarks",
      icon: Landmark,
    },
    {
      title: "Pretax ROCE",
      url: "/pretax_roce",
      icon: Network,
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
