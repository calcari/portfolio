"use client"

import { Fragment } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { House } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { nav } from "./nav-config"
import {
  competenceGroups,
  parcoursTimeline,
  realisations,
} from "./content-meta"

type Crumb = { label: string; href?: string; root?: boolean }

const realisationTitle = new Map(realisations.map((r) => [r.slug, r.title]))
const competenceTitle = new Map(
  competenceGroups.flatMap((g) => g.items).map((i) => [i.slug, i.title])
)
const experienceTitle = (() => {
  const map = new Map<string, string>()
  for (const item of parcoursTimeline) {
    if (!map.has(item.slug)) map.set(item.slug, item.title)
  }
  return map
})()

function navTitleByHref(href: string): string | undefined {
  return nav.find((section) => section.href === href)?.title
}

function leafTitle(segment: string, slug: string): string | undefined {
  if (segment === "realisations") return realisationTitle.get(slug)
  if (segment === "competences") return competenceTitle.get(slug)
  if (segment === "parcours") return experienceTitle.get(slug)
  return undefined
}

function prettify(slug: string): string {
  const text = slug.replace(/-/g, " ")
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function useTrail(): Crumb[] {
  const pathname = usePathname()
  const parts = pathname.split("/").filter(Boolean)
  const crumbs: Crumb[] = [{ label: "Accueil", href: "/", root: true }]

  if (parts.length >= 1) {
    const hubHref = `/${parts[0]}`
    const hubLabel = navTitleByHref(hubHref) ?? prettify(parts[0])

    if (parts.length === 1) {
      crumbs.push({ label: hubLabel })
    } else {
      crumbs.push({ label: hubLabel, href: hubHref })
      crumbs.push({ label: leafTitle(parts[0], parts[1]) ?? prettify(parts[1]) })
    }
  }

  return crumbs
}

function CrumbContent({ crumb }: { crumb: Crumb }) {
  if (crumb.root) {
    return (
      <>
        <House className="size-3.5 shrink-0" />
        <span className="sr-only">{crumb.label}</span>
      </>
    )
  }
  return <span className="truncate">{crumb.label}</span>
}

export function AppBreadcrumb() {
  const trail = useTrail()

  return (
    <Breadcrumb>
      <BreadcrumbList className="flex-nowrap">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1
          return (
            <Fragment key={index}>
              <BreadcrumbItem className="min-w-0">
                {isLast || !crumb.href ? (
                  <BreadcrumbPage className="inline-flex min-w-0 items-center gap-1.5">
                    <CrumbContent crumb={crumb} />
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    asChild
                    className="inline-flex min-w-0 items-center gap-1.5"
                  >
                    <Link href={crumb.href}>
                      <CrumbContent crumb={crumb} />
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
