'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { TrendingUp } from "lucide-react"

const invoices = [
  {
    id: "001",
    department: "Marketing",
    revenue: "$250.00",
    margin: "12%",
  },
  {
    id: "002",
    department: "Product",
    revenue: "$150.00",
    margin: "18%",
  },
  {
    id: "003",
    department: "Tech",
    revenue: "$350.00",
    margin: "11%",
  },
  {
    id: "004",
    department: "Research & Dev",
    revenue: "$450.00",
    margin: "5%",
  },
  {
    id: "005",
    department: "Merch",
    revenue: "$550.00",
    margin: "2%",
  },
  {
    id: "006",
    department: "Others",
    revenue: "$200.00",
    margin: "4%",
  },
]

export function TableDemo() {
  return (
    <Card className="w-full h-[44vh] flex flex-col overflow-hidden shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-xl">Profitability</CardTitle>
        <CardDescription>Breakdown by department</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto px-4 py-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Department</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead className="text-right">Profit Margin</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.department}</TableCell>
                <TableCell>{invoice.revenue}</TableCell>
                <TableCell className="text-right pr-4">{invoice.margin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
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