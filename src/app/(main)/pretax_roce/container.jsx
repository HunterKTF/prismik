'use client'

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function PretaxRoceContainer() {
  const wrapperRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [start, setStart] = useState({ x: 0, y: 0 })
  const [scrollStart, setScrollStart] = useState({ left: 0, top: 0 })

  // Start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStart({ x: e.clientX, y: e.clientY })
    if (wrapperRef.current) {
      setScrollStart({
        left: wrapperRef.current.scrollLeft,
        top: wrapperRef.current.scrollTop,
      })
    }
  }

  // While dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return
    const dx = e.clientX - start.x
    const dy = e.clientY - start.y
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft = scrollStart.left - dx
      wrapperRef.current.scrollTop = scrollStart.top - dy
    }
  }

  // Stop dragging
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Attach global mouseup/move to window for safety
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, start, scrollStart])

  return (
    <div className="w-full h-full p-4">
      <div className="w-full h-full bg-muted-foreground/10 rounded-xl">

      </div>
    </div>
  )
}