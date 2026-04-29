import "./globals.css"
import type { ReactNode } from "react"

export const metadata = {
  title: "TalentTrail — TrailBot AI Career Tools",
  description:
    "TrailBot AI by TalentTrail — a polished AI workspace for resume matching, study notes, quizzes, mock interviews, and personalized AI courses.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
