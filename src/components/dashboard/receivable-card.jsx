'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ReceivableCard() {
  return (
    <Card className="w-full h-full py-4 gap-2">
      <CardHeader className="gap-0">
        <CardTitle className="text-lg">Client Receivables</CardTitle>
        <CardDescription>My card description</CardDescription>
      </CardHeader>
      <CardContent className="h-full flex flex-col justify-center items-center text-sm gap-1">
        <div className="w-full flex justify-between">
          <p>Total Outstanding</p>
          <p>$285k</p>
        </div>
        <div className="w-full flex justify-between">
          <p>Avg. Days to Collect</p>
          <p>42 days</p>
        </div>
        <div className="w-full flex justify-between">
          <p>Overdue Days (30+)</p>
          <p>$74.5k</p>
        </div>
      </CardContent>
      <CardFooter className="font-light text-md">
        Status: Action Required
      </CardFooter>
    </Card>
  )
}