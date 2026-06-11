"use client"

import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social"

import { AppNav } from "./app-nav"

export function AppSidebar({
  className,
  onNavigate,
}: {
  className?: string
  onNavigate?: () => void
}) {
  return (
    <Sidebar collapsible="none" className={cn("h-full", className)}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="h-auto py-2">
              <Link href="/" onClick={onNavigate}>
                <Avatar className="size-15">
                  <AvatarImage
                    src="/images/hero-sec/user-img.png"
                    alt="Franck Calcari"
                  />
                  <AvatarFallback>FC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5 leading-tight">
                  <span className="font-medium">Franck Calcari</span>
                  <span className="text-xs text-muted-foreground">
                    Expert en ingénierie logicielle
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Metz, France
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator className="mx-0" />
      <SidebarContent>
        <AppNav onNavigate={onNavigate} />
      </SidebarContent>
      <SidebarSeparator className="mx-0" />
      <SidebarFooter>
        <Button className="w-full" asChild>
          <a href="/contact">Me contacter</a>
        </Button>
        <div className="flex justify-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/calcari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon size={16} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/franckcalcari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} />
            </a>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
