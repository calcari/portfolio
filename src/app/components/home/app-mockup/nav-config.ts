import type { LucideIcon } from "lucide-react"
import {
  FolderOpen,
  Home,
  Lightbulb,
  Milestone,
  UserRound,
} from "lucide-react"

export type NavSection = {
  title: string
  href: string
  icon?: LucideIcon
}

export const nav: NavSection[] = [
  { title: "Accueil", href: "/", icon: Home },
  { title: "Ma présentation", href: "/presentation", icon: UserRound },
  { title: "Mon parcours", href: "/parcours", icon: Milestone },
  { title: "Réalisations", href: "/realisations", icon: FolderOpen },
  { title: "Compétences", href: "/competences", icon: Lightbulb },
]
