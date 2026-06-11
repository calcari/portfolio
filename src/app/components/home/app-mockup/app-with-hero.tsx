"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

import { AppShell } from "./app-shell"
import { HeroDrawer } from "./hero-drawer"

export function AppWithHero({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [heroOpen, setHeroOpen] = useState(pathname === "/")

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (pathname === "/") setHeroOpen(true)
  }, [pathname])

  return (
    <>
      <AppShell onOpenHero={() => setHeroOpen(true)}>{children}</AppShell>
      <HeroDrawer open={heroOpen} onOpenChange={setHeroOpen} />
    </>
  )
}
