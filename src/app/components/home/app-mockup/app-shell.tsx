"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { SidebarProvider } from "@/components/ui/sidebar"

import { AppBreadcrumb } from "./app-breadcrumb"
import { AppSidebar } from "./app-sidebar"
import { ModeToggle } from "./mode-toggle"
import type { NavItem } from "./nav-config"
import { cn } from '@/lib/utils'

export function AppShell({
  children,
  onOpenHero,
  realisationNavItems,
}: {
  children: React.ReactNode
  onOpenHero?: () => void
  realisationNavItems: NavItem[]
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [fullScreen, setFullScreen] = useState(false)

  return (
    <div className={cn("fixed top-6 right-5 bottom-6 left-5 lg:inset-8 z-50 flex flex-col overflow-hidden rounded-xl border bg-card shadow-xl", fullScreen && "inset-0! rounded-none!")}>
      <SidebarProvider
        style={{ "--sidebar-width": "19.5rem" } as React.CSSProperties}
        className="relative flex flex-col flex-1 min-h-0"
      >
        <div className="flex h-11 shrink-0 items-center gap-3 border-b px-4">
          <div className="flex gap-2">
            <button
              onClick={onOpenHero}
              aria-label="Voir la présentation"
              className="block size-3 rounded-full bg-[#ff5f57] opacity-80 hover:opacity-100 cursor-pointer"
            />
            <button
              onClick={() => setFullScreen(prev => !prev)}
              aria-label="Quitter le mode plein écran"
              className="block size-3 rounded-full bg-[#febc2e] opacity-80 hover:opacity-100 cursor-pointer"
            />
            <button
              onClick={() => setFullScreen(prev => !prev)}
              aria-label="Plein écran"
              className="block size-3 rounded-full bg-[#28c840] opacity-80 hover:opacity-100 cursor-pointer"
            />
          </div>
          <div className="min-w-0 flex-1">
            <AppBreadcrumb realisationNavItems={realisationNavItems} />
          </div>
          <ModeToggle />
        </div>

        <div className="flex min-h-0 flex-1">
          <AppSidebar
            className="hidden border-r md:flex"
            realisationNavItems={realisationNavItems}
          />
          <main className="min-w-0 flex-1 overflow-y-auto">
            {children}
          </main>
        </div>

        {!mobileOpen && (
          <Button
            variant="default"
            size="icon"
            className="absolute bottom-4 right-4 z-20 size-12 rounded-full shadow-md md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir la navigation"
          >
            <Menu />
          </Button>
        )}

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent side="left" className="w-72 p-0">
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>Navigation de l&apos;application</SheetDescription>
            </SheetHeader>
            <AppSidebar
              className="w-full border-0"
              realisationNavItems={realisationNavItems}
              onNavigate={() => setMobileOpen(false)}
            />
          </SheetContent>
        </Sheet>
      </SidebarProvider>
    </div>
  )
}
