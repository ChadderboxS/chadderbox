import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import { ThemeWrapper } from '@/components/ThemeWrapper'
import { Toaster } from "@/components/toaster"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chad Stilwell - Technology Executive | CTO | AI & Data Science Leader",
  description:
    "Personal website of Chad Stilwell, showcasing professional experience, projects, and contact information.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeWrapper>
          {children}
          <Analytics />
          <Toaster />
        </ThemeWrapper>
      </body>
    </html>
  )
}
