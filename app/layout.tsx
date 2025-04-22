import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import { ThemeWrapper } from '@/components/ThemeWrapper'
import { Toaster } from "@/components/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

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
      <head>
        {/* favicon */}
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link
          rel="icon"
          href="/icon.ico"
          type="image/icon"
          sizes="64x64"
        />
      </head>
      <body className={inter.className}>
        <ThemeWrapper>
          {children}
          <Analytics />
          <SpeedInsights />
          <Toaster />
        </ThemeWrapper>
      </body>
    </html>
  )
}
