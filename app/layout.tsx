import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chakra UI Autocomplete",
  description: "A modern autocomplete component built with Chakra UI v2 and Next.js 15",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import './globals.css'