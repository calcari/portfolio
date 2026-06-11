import type { LucideIcon } from "lucide-react"
import {
  FolderOpen,
  Home,
  Lightbulb,
  Milestone,
  UserRound,
} from "lucide-react"

import { competenceGroups, realisations } from "./content-meta"

export type NavItem = {
  title: string
  href: string
}

export type NavSection = {
  title: string
  href: string
  icon?: LucideIcon
  items?: NavItem[]
}

const competenceItems: NavItem[] = competenceGroups.flatMap((group) =>
  group.items.map((item) => ({
    title: item.title,
    href: `/competences/${item.slug}`,
  }))
)

const defaultRealisationItems: NavItem[] = realisations.map((item) => ({
  title: item.title,
  href: `/realisations/${item.slug}`,
}))

export function createNav(realisationItems: NavItem[] = defaultRealisationItems) {
  return [
    { title: "Accueil", href: "/", icon: Home },
    { title: "Ma présentation", href: "/presentation", icon: UserRound },
    { title: "Mon parcours", href: "/parcours", icon: Milestone },
    {
      title: "Réalisations",
      href: "/realisations",
      icon: FolderOpen,
      items: realisationItems,
    },
    {
      title: "Compétences",
      href: "/competences",
      icon: Lightbulb,
      items: competenceItems,
    },
  ] satisfies NavSection[]
}

export const nav = createNav()
