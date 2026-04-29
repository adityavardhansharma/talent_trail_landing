import "./globals.css"
import type { ReactNode } from "react"

export const metadata = {
  title: "TalentTrail — AI-Powered Career Tools",
  description:
    "Unlock your potential with TalentTrail's cutting-edge AI tools for resume matching, study assistance, mock interviews, and more.",
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
