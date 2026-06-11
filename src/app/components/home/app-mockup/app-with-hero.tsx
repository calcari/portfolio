"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"

import { AppShell } from "./app-shell"
import { HeroDrawer } from "./hero-drawer"
import type { NavItem } from "./nav-config"

export function AppWithHero({
  children,
  realisationNavItems,
}: {
  children: React.ReactNode
  realisationNavItems: NavItem[]
}) {
  const pathname = usePathname()
  const [heroOpen, setHeroOpen] = useState(pathname === "/")

  return (
    <>
      <AppShell
        onOpenHero={() => setHeroOpen(true)}
        realisationNavItems={realisationNavItems}
      >
        {children}
      </AppShell>
      <HeroDrawer open={heroOpen} onOpenChange={setHeroOpen} />
    </>
  )
}
