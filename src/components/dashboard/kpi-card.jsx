'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { TrendingUp, TrendingDown } from "lucide-react"
import { ChartNoAxesColumnIncreasing } from "lucide-react"
import { ChartNoAxesColumnDecreasing } from "lucide-react"
import { ChevronRightIcon } from "lucide-react"

export function KPICard({ title, value, badge, icon, past, ratio, onSelectMetric, data }) {
  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col justify-between border py-2 px-4 shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="text-md font-medium">{title}</h3>
        <div className="w-10 h-10">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm text-slate-100 w-full h-full flex items-center justify-center bg-slate-700 rounded-md">{icon}</DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="max-h-[300px] w-[200px] overflow-y-auto">
              {data.map((option, index) => (
                <DropdownMenuItem onClick={() => onSelectMetric(option)} key={index}>{option.title}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex justify-start items-end gap-4">
        <h2 className="text-3xl font-light">
          <span>
            <span className="text-lg">{!ratio && (<span>$</span>)}</span>
          </span>
          {value}
          <span className="text-xs">{!ratio && (<span>MXN</span>)}</span>
        </h2>
        {past.includes("+") ? (
          <Badge className="text-green-500 bg-green-100">{badge}</Badge>
        ) : (
          <Badge className="text-red-500 bg-red-100">{badge}</Badge>
        )}
      </div>
      <Button variant={"outline"} className="w-full rounded-md flex justify-between items-center py-2 px-4 border">
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