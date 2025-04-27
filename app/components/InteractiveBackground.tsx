"use client"

import { useEffect, useRef } from "react"

export default function InteractiveBackground() {
  const interactiveBgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (interactiveBgRef.current) {
        const glow = interactiveBgRef.current.querySelector(".glow") as HTMLElement
        if (glow) {
          glow.style.left = `${e.clientX}px`
          glow.style.top = `${e.clientY}px`
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={interactiveBgRef} className="interactive-bg absolute inset-0 pointer-events-none">
      <div className="aura"></div>
      <div className="grid-lines"></div>
      <div className="glow"></div>
    </div>
  )
}
