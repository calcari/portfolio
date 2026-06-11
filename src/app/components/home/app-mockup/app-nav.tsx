"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import { createNav, type NavItem, type NavSection } from "./nav-config"

function isSectionActive(href: string, pathname: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`)
}

function NavCollapsible({
  section,
  pathname,
  onNavigate,
}: {
  section: NavSection & { items: NonNullable<NavSection["items"]> }
  pathname: string
  onNavigate?: () => void
}) {
  const active = isSectionActive(section.href, pathname)
  const [open, setOpen] = React.useState(false)
  const isOpen = open || active
  const Icon = section.icon

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setOpen}
      asChild
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={active}>
          <Link href={section.href} onClick={onNavigate}>
            {Icon && <Icon />}
            <span>{section.title}</span>
          </Link>
        </SidebarMenuButton>
        <CollapsibleTrigger asChild>
          <SidebarMenuAction className="transition-transform group-data-[state=open]/collapsible:rotate-90">
            <ChevronRight />
            <span className="sr-only">Afficher les articles</span>
          </SidebarMenuAction>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {section.items.map((item) => (
              <SidebarMenuSubItem key={item.href}>
                <SidebarMenuSubButton
                  asChild
                  isActive={pathname === item.href}
                >
                  <Link href={item.href} onClick={onNavigate}>
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

export function AppNav({
  onNavigate,
  realisationNavItems,
}: {
  onNavigate?: () => void
  realisationNavItems: NavItem[]
}) {
  const pathname = usePathname()
  const nav = createNav(realisationNavItems)

  return (
    <SidebarGroup>
      <SidebarMenu>
        {nav.map((section) => {
          const Icon = section.icon

          if (!section.items?.length) {
            return (
              <SidebarMenuItem key={section.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isSectionActive(section.href, pathname)}
                >
                  <Link href={section.href} onClick={onNavigate}>
                    {Icon && <Icon />}
                    <span>{section.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }

          return (
            <NavCollapsible
              key={section.href}
              section={{ ...section, items: section.items }}
              pathname={pathname}
              onNavigate={onNavigate}
            />
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
