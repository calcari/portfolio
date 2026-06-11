"use client"

import { useEffect, useState } from "react"
import { Drawer as VaulDrawer } from "vaul"

import HeroSection from "../hero-section"

export function HeroDrawer({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!open) {
      setProgress(0)
      return
    }
    // Reset instantly, then animate to 100% over 5 s
    setProgress(0)
    const animT = setTimeout(() => setProgress(100), 50)
    const closeT = setTimeout(() => onOpenChange(false), 5000)
    return () => {
      clearTimeout(animT)
      clearTimeout(closeT)
    }
  }, [open, onOpenChange])

  return (
    <VaulDrawer.Root open={open} onOpenChange={onOpenChange} direction="top">
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className="fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs" />
        <VaulDrawer.Content
          className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-background focus:outline-none"
          onWheel={(e) => { if (e.deltaY > 0) onOpenChange(false) }}
        >
          <VaulDrawer.Title className="sr-only">Présentation</VaulDrawer.Title>

          <div className="min-h-0 flex-1 overflow-hidden">
            <HeroSection />
          </div>

          {/* Progress + label centered above the drag handle */}
          <div className="flex shrink-0 flex-col items-center gap-2.5" style={{ marginBottom: "50px" }} aria-hidden>
            <p className="text-sm text-muted-foreground">Démarrage&nbsp;…</p>
            <div className="h-1 w-64 rounded-full bg-border">
              <div
                className="h-full rounded-full bg-primary"
                style={{
                  width: `${progress}%`,
                  transition: progress > 0 ? "width 4.95s linear" : "none",
                }}
              />
            </div>
          </div>

          {/* drag handle at the bottom – drag up to close */}
          <div className="mx-auto mb-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted" aria-hidden />
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  )
}
