'use client'

import { useState } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Bar, BarChart, Line, LineChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { TrendingUp } from "lucide-react"

export const description = "Revenue and Growth Bar Chart"

const chartData = [
  { month: "January", current: 186, past: 80 },
  { month: "February", current: 305, past: 200 },
  { month: "March", current: 237, past: 120 },
  { month: "April", current: 73, past: 190 },
  { month: "May", current: 209, past: 130 },
  { month: "June", current: 214, past: 140 },
  { month: "July", current: 192, past: 213 },
  { month: "August", current: 238, past: 138 },
  { month: "September", current: 103, past: 168 },
  { month: "October", current: 90, past: 210 },
  { month: "November", current: 102, past: 347 },
  { month: "December", current: 143, past: 283 },
]

const BarChartConfig = {
  current: {
    label: "Current Year",
    color: "var(--chart-1)",
  },
  past: {
    label: "Past Year",
    color: "var(--chart-2)",
  },
}

const LineChartConfig = {
  current: {
    label: "Current Year",
    color: "var(--chart-1)",
  },
}

export function RevenueChart() {
  const [chart, setChart] = useState("versus")
  return (
    <Card className="@container/card w-full h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <h1 className="text-xl">Revenue and Growth</h1>
          <Select onValueChange={(value) => setChart(value)} value={chart}>
            <SelectTrigger className="w-[200px] text-sm px-4 py-0 font-light">
              <SelectValue placeholder="Select a chart" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Charts</SelectLabel>
                <SelectItem value="versus">Versus Chart</SelectItem>
                <SelectItem value="line">Line Chart</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex items-center h-full">
        {chart === "versus" && (
          <VersusChart />
        )}
        {chart === "line" && (
          <SingleChart />
        )}
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export function VersusChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ChartContainer config={BarChartConfig} className="w-full h-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey={"month"} tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
          <Bar dataKey="current" fill="var(--chart-1)" radius={4} />
          <Bar dataKey="past" fill="var(--chart-2)" radius={4} />
        </BarChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}

export function SingleChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ChartContainer config={LineChartConfig} className="w-full h-full">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="current"
            type="natural"
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}