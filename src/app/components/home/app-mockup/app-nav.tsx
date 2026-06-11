"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { nav } from "./nav-config"

export function AppNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  return (
    <SidebarGroup>
      <SidebarMenu>
        {nav.map((section) => {
          const Icon = section.icon
          return (
            <SidebarMenuItem key={section.href}>
              <SidebarMenuButton asChild isActive={isActive(section.href)}>
                <Link href={section.href} onClick={onNavigate}>
                  {Icon && <Icon />}
                  <span>{section.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
