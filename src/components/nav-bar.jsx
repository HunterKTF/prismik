"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { NavBreadcrumbs } from "@/components/nav-breadcrumbs"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

import { CalendarSync, Download } from "lucide-react"

export function NavBar() {
  const pages = [
    {
      "title": "Dashboard",
      "link": "/dashboard",
      "separator": true,
      "isPage": false,
    },
    {
      "title": "Dashboard",
      "link": "/dashboard",
      "separator": false,
      "isPage": true,
    },
  ]

  return (
    <div className="w-full flex justify-between items-center px-4">
      <div className="flex items-center ">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        <NavBreadcrumbs pages={pages} />
      </div>
      <div className="flex items-center gap-2">
        <Select className="">
          <SelectTrigger className="w-[180px] text-sm">
            <CalendarSync />
            <SelectValue placeholder="Periodicity" />
          </SelectTrigger>
          <SelectContent className="text-sm">
            <SelectGroup>
              <SelectLabel>Select Period</SelectLabel>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <DateRangePicker />
        <Button className="text-sm">
          <Download />
          Download CSV
        </Button>
      </div>
    </div>
  )
}