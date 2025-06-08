'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function LiquidityCard() {
  return (
    <Card className="w-full h-full py-4 gap-2">
      <CardHeader className="gap-0">
        <CardTitle className="text-lg">Liquidity</CardTitle>
        <CardDescription>My card description</CardDescription>
      </CardHeader>
      <CardContent className="h-full flex flex-col justify-center items-center text-sm gap-1">
        <div className="w-full flex justify-between">
          <p>Current Ratio</p>
          <p>1.45</p>
        </div>
        <div className="w-full flex justify-between">
          <p>Quick Ratio</p>
          <p>1.21</p>
        </div>
        <div className="w-full flex justify-between">
          <p>Cash on Hand</p>
          <p>$820k</p>
        </div>
      </CardContent>
      <CardFooter className="font-light text-md">
        Status: Healthy
      </CardFooter>
    </Card>
  )
}