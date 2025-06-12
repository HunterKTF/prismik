'use client'

import { useState, useEffect } from "react"

import { dataCards } from "@/components/dashboard/metrics-data";

import { KPICard } from "@/components/dashboard/kpi-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { TableDemo } from "@/components/dashboard/profit-card";
import { LiquidityCard } from "@/components/dashboard/liquidity-card";
import { ReceivableCard } from "@/components/dashboard/receivable-card";
import { ExpensesCard } from "@/components/dashboard/expenses-card";

export default function DashboardContainer() {
  const [cardData, setCardData] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      const result = await dataCards();
      setCardData(result);
    }
    fetchData()
  }, [])

  // Handler to change a specific card's metric
  const updateCardMetric = (index, newMetricData) => {
    setCardData(prev =>
      prev.map((item, i) => (i === index ? { ...item, ...newMetricData } : item))
    )
  }

  return (
    <div className="w-full h-full">
      <div className="w-full h-[20%] grid grid-flow-col grid-cols-4 px-4 py-1 gap-2">
        {cardData.slice(0, 4).map((item, index) => (
          <KPICard
            key={index}
            title={item.title}
            value={item.value}
            badge={item.badge}
            icon={item.icon}
            past={item.past}
            ratio={item.ratio}
            onSelectMetric={(newMetric) => updateCardMetric(index, newMetric)}
            data={cardData}
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
  )
}