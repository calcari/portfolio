"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// next-themes injects an inline <script> to avoid theme flicker. React 19 warns
// when that tag is re-rendered on the client — use application/json there only.
const scriptProps =
  typeof window === "undefined"
    ? undefined
    : ({ type: "application/json" } as const)

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider scriptProps={scriptProps} {...props}>
      {children}
    </NextThemesProvider>
  )
}
