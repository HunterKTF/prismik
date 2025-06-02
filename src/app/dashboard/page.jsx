import { AppSidebar } from "@/components/app-sidebar"
import { NavBar } from "@/components/nav-bar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <NavBar />
        </header>
        <div className="w-full h-full">
          <div className="w-full h-[20%] grid grid-flow-col grid-cols-4 px-4 py-1 gap-2">
            <div className="w-full h-full flex justify-center items-center bg-black/10 rounded-xl">KPI 1</div>
            <div className="w-full h-full flex justify-center items-center bg-black/10 rounded-xl">KPI 2</div>
            <div className="w-full h-full flex justify-center items-center bg-black/10 rounded-xl">KPI 3</div>
            <div className="w-full h-full flex justify-center items-center bg-black/10 rounded-xl">KPI 4</div>
          </div>
          <div className="w-full h-[50%] grid grid-flow-col grid-cols-4 px-4 py-1 gap-2">
            <div className="w-full h-full flex justify-center items-center row-span-2 bg-black/10 rounded-xl">Revenue</div>
            <div className="w-full h-full flex justify-center items-center col-span-2 bg-black/10 rounded-xl">Debt to Equity Ratio</div>
            <div className="w-full h-full flex justify-center items-center col-span-2 bg-black/10 rounded-xl">Interest coverage Ratio</div>
            <div className="w-full h-full flex justify-center items-center row-span-2 bg-black/10 rounded-xl">Profitability</div>
          </div>
          <div className="w-full h-[30%] grid grid-flow-col grid-cols-2 px-4 pt-1 pb-4 gap-2">
            <div className="w-full h-full flex justify-center items-center bg-black/10 rounded-xl">Efficiency</div>
            <div className="w-full h-full flex justify-center items-center bg-black/10 rounded-xl">Liquidity</div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
