import "./globals.css"
import type { ReactNode } from "react"

export const metadata = {
  title: "TalentTrail - AI-Powered Career Tools",
  description:
    "Unlock your potential with TalentTrail's cutting-edge AI tools for job matching, study assistance, and interview preparation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        <div className="interactive-bg">
          <div className="aura"></div>
          <div className="grid-lines"></div>
          <div className="glow"></div>
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
