'use client'

import { Handle, Position } from 'react-flow-renderer'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import {
  DollarSign,
  Percent
} from "lucide-react"

export default function CustomNode({ data }) {
  return (
    <Card className="w-[280px]">
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-black" />

      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>

      <CardContent>
        {data.unit ? (
          <span className="flex text-3xl items-center gap-2">
            {data.value}
            <span className={`text-xs p-1 rounded ${data.badgeColor}`}>
              0.0%
            </span>
          </span>
        ) : (
          <span className="flex text-3xl items-center gap-2">
            {data.icon === "percent" ? <Percent size={16} /> : <DollarSign size={16} />} {data.value}
            <span className={`text-xs p-1 rounded ${data.badgeColor}`}>
              0.0%
            </span>
          </span>
        )}

      </CardContent>

      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-black" />
    </Card >
  )
}
