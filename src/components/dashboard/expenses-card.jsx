'use client'

import { Pie, PieChart } from "recharts"

import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const description = "Expenses breakdown by category"

const chartData = [
    { expense: "salaries", amount: 60000, fill: "var(--color-salaries)" },
    { expense: "software", amount: 25000, fill: "var(--color-software)" },
    { expense: "marketing", amount: 18000, fill: "var(--color-marketing)" },
    { expense: "rent_and_ops", amount: 15000, fill: "var(--color-rent_and_ops)" },
]

const chartConfig = {
    expenses: {
        label: "Expenses",
    },
    salaries: {
        label: "Salaries",
        color: "var(--chart-1)",
    },
    software: {
        label: "Software",
        color: "var(--chart-2)",
    },
    marketing: {
        label: "Marketing",
        color: "var(--chart-3)",
    },
    rent_and_ops: {
        label: "Rent & Ops",
        color: "var(--chart-4)",
    },
}

export function ExpensesCard() {
    return (
        <Card className="w-full h-full py-4 gap-2">
            <CardHeader className="gap-0">
                <CardTitle className="text-lg">Expenses Breakdown</CardTitle>
                <CardDescription>My card description</CardDescription>
            </CardHeader>
            <CardContent className="h-full flex gap-4">
                <div className="w-full h-full flex flex-col justify-center text-sm gap-2">
                    <div className="w-full flex justify-between">
                        <p>Total Expenses</p>
                        <p>$128k</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p>Top Category</p>
                        <p>Salaries (47%)</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <p>MoM Change</p>
                        <p>+12%</p>
                    </div>
                </div>

                <div className="aspect-square h-full">
                    <ChartContainer
                        config={chartConfig}
                        className="aspect-auto h-full [&_.recharts-pie-label-text]:fill-foreground mx-auto max-h-[250px] pb-0"
                    >
                        <PieChart>
                            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                            <Pie data={chartData} dataKey="amount" nameKey={"expense"} />
                        </PieChart>
                    </ChartContainer>
                </div>
                <div className="min-w-[200px] h-full flex flex-col justify-center text-sm gap-1">
                    <span className="w-full flex gap-2"> 
                        <div className="h-[16px] min-w-[16px] bg-chart-1 rounded-xs" /> 
                        <p>Salaries</p>
                        <p className="w-full text-right">$60k</p>
                    </span>
                    <span className="w-full flex gap-2"> 
                        <div className="h-[16px] min-w-[16px] bg-chart-2 rounded-xs" /> 
                        Software
                        <p className="w-full text-right">$25k</p>
                    </span>
                    <span className="w-full flex gap-2"> 
                        <div className="h-[16px] min-w-[16px] bg-chart-3 rounded-xs" /> 
                        Marketing
                        <p className="w-full text-right">$18k</p>
                    </span>
                    <span className="w-full flex gap-2"> 
                        <div className="h-[16px] min-w-[16px] bg-chart-4 rounded-xs" /> 
                        <p className="min-w-[80px]">Rent & Ops</p>
                        <p className="w-full text-right">$15k</p>
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}