import { getMetrics } from "@/actions/metrics";

import { AppSidebar } from "@/components/app-sidebar"
import { NavBar } from "@/components/nav-bar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import {
  Store,
  Wallet,
  ReceiptText,
  Banknote,
} from "lucide-react";

import { KPICard } from "@/components/dashboard/kpi-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { TableDemo } from "@/components/dashboard/profit-card";
import { LiquidityCard } from "@/components/dashboard/liquidity-card";
import { ReceivableCard } from "@/components/dashboard/receivable-card";
import { ExpensesCard } from "@/components/dashboard/expenses-card";

export default async function Page() {
  const reports = await getMetrics();

  const data = [
    {
      title: "Net Sales",
      value: reports.curr_metrics["Total Revenue"],
      badge: "50%",
      icon: <Store size={20} />,
      past: "+12",
      ratio: false,
    },
    {
      title: "Inventory",
      value: reports.curr_metrics["Inventory"],
      badge: "30%",
      icon: <Wallet size={20} />,
      past: "+8",
      ratio: false,
    },
    {
      title: "Operating Cash Flow",
      value: reports.curr_metrics["Operating Cash Flow"],
      badge: "20%",
      icon: <ReceiptText size={20} />,
      past: "-0.5",
      ratio: false,
    },
    {
      title: "Gross Profit",
      value: reports.curr_metrics["Gross Profit"],
      badge: "10%",
      icon: <Banknote size={20} />,
      past: "+0.2",
      ratio: false,
    }
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <NavBar />
        </header>
        <div className="w-full h-full">
          <div className="w-full h-[20%] grid grid-flow-col grid-cols-4 px-4 py-1 gap-2">
            {data.map((item, index) => (
              <KPICard
                key={index}
                title={item.title}
                value={item.value}
                badge={item.badge}
                icon={item.icon}
                past={item.past}
                ratio={item.ratio}
              />
            ))}
          </div>
          <div className="w-full h-[50%] grid grid-flow-col grid-cols-4 px-4 py-1 gap-2">
            <div className="w-full h-full flex justify-center items-center col-span-2 row-span-2">
              <RevenueChart />
            </div>
            <div className="w-full h-full flex justify-center items-center col-span-2 row-span-2 bg-white rounded-xl border shadow-sm">
              <TableDemo />
            </div>
          </div>
          <div className="w-full h-[30%] grid grid-flow-col grid-cols-4 px-4 pt-1 pb-4 gap-2">
            <div className="w-full h-full flex justify-center items-center">
              <LiquidityCard />
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <ReceivableCard />
            </div>
            <div className="w-full h-full col-span-2 flex justify-center items-center bg-black/10 rounded-xl">
              <ExpensesCard />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
