"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 px-4 bg-background shadow lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <span className="font-bold">Chad Stilwell</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <nav className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </nav>
    </header>
  )
}
