'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { TrendingUp, TrendingDown } from "lucide-react"
import { ChartNoAxesColumnIncreasing } from "lucide-react"
import { ChartNoAxesColumnDecreasing } from "lucide-react"
import { ChevronRightIcon } from "lucide-react"

export function KPICard({ title, value, badge, icon, past }) {
  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col justify-between border py-2 px-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="p-3 bg-slate-700 rounded-md">
          <p className="text-sm text-slate-100">{icon}</p>
        </div>
      </div>
      <div className="flex justify-start items-end gap-4">
        <h2 className="text-3xl font-light">
          ${value}
          <span className="text-xs">MXN</span>
        </h2>
        {past.includes("+") ? (
          <Badge className="text-green-500 bg-green-100">{badge}</Badge>
        ) : (
          <Badge className="text-red-500 bg-red-100">{badge}</Badge>
        )}
      </div>
      <Button variant={"outline"} className="w-full rounded-full flex justify-between items-center py-2 px-4 border">
        {past.includes("+") ? (
          <p className="text-xs flex gap-2 items-end">
            <ChartNoAxesColumnIncreasing className="size-4 " />
            {past} more than last month
          </p>
        ) : (
          <p className="text-xs flex gap-2 items-end">
            <ChartNoAxesColumnDecreasing className="size-4 " />
            {past} less than last month
          </p>
        )}
        <ChevronRightIcon size={16} />
      </Button>
    </div>
  )
}