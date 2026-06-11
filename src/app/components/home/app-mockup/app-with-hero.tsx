"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"

import { AppShell } from "./app-shell"
import { HeroDrawer } from "./hero-drawer"

export function AppWithHero({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [heroOpen, setHeroOpen] = useState(pathname === "/")

  return (
    <>
      <AppShell onOpenHero={() => setHeroOpen(true)}>{children}</AppShell>
      <HeroDrawer open={heroOpen} onOpenChange={setHeroOpen} />
    </>
  )
}
