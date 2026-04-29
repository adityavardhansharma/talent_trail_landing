"use client"

import { useEffect, useRef } from "react"

export default function InteractiveBackground() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Soft base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F4FAFF] to-white" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid" />

      {/* Floating gradient blobs */}
      <div
        className="blob blob-a"
        style={{
          width: 520,
          height: 520,
          left: "-120px",
          top: "-120px",
          background:
            "radial-gradient(closest-side, rgba(71, 181, 255, 0.55), rgba(71, 181, 255, 0))",
        }}
      />
      <div
        className="blob blob-b"
        style={{
          width: 600,
          height: 600,
          right: "-160px",
          top: "80px",
          background:
            "radial-gradient(closest-side, rgba(19, 99, 223, 0.45), rgba(19, 99, 223, 0))",
        }}
      />
      <div
        className="blob blob-c"
        style={{
          width: 480,
          height: 480,
          left: "30%",
          bottom: "-160px",
          background:
            "radial-gradient(closest-side, rgba(124, 196, 250, 0.45), rgba(124, 196, 250, 0))",
        }}
      />

      {/* Cursor follow glow */}
      <div ref={glowRef} className="cursor-glow" />
    </div>
  )
}
