import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { parcoursTimeline, type TimelineItem } from "./content-meta"

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <Link href={`/parcours/${item.slug}`} className="group block h-full w-[200px]">
      <Card className="h-full gap-0 overflow-hidden py-0 shadow-none transition-colors group-hover:ring-foreground/25">
        <div className="bg-muted">
          <Image
            src={item.logo}
            alt=""
            width={747}
            height={307}
            className="h-auto w-full"
          />
        </div>
        <CardContent className="flex flex-col gap-1.5 p-3">
          {item.groups ? (
            <>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">
                  {item.structure}
                </span>
                <Badge variant="secondary">
                  {item.kind === "formation" ? "Formation" : "XP Pro"}
                </Badge>
              </div>
              <div className="flex flex-col gap-2">
                {item.groups.map((group, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {group.start} – {group.end}
                    </span>
                    <span className="text-sm font-medium leading-tight">
                      {group.title}
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground tabular-nums">
                  {item.start} – {item.end}
                </span>
                <Badge variant="secondary">
                  {item.kind === "formation" ? "Formation" : "XP Pro"}
                </Badge>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium leading-tight">
                  {item.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {item.structure}
                </span>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}

export function ParcoursTimeline() {
  const items = parcoursTimeline
  const maxEnd = Math.max(...items.map((i) => i.end))
  const minStart = Math.min(...items.map((i) => i.start))
  const years = Array.from({ length: maxEnd - minStart + 1 }, (_, i) => maxEnd - i)

  // Résolution semestrielle : 2 pistes de grille par année. Les périodes
  // désignent le milieu d'année (offset 6 mois) → mid(year) = year + 0.5.
  // Les nodes restent sur les années calendaires (year + 0), donc les cards
  // sont décalées d'un demi-pas par rapport aux nodes.
  const topRef = maxEnd + 0.5
  const line = (frac: number) => Math.round((topRef - frac) * 2) + 1
  const nTracks = line(minStart)
  const colOf = (item: TimelineItem) => (item.side === "left" ? 1 : 3)

  const stacked = [...items].sort((a, b) => b.end - a.end || b.start - a.start)

  return (
    <div className="@container/timeline flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-medium text-primary">Mon parcours</h1>
      </div>

      {/* Mobile : timeline verticale simple */}
      <ol className="relative flex flex-col gap-3 pl-6 @2xl/timeline:hidden">
        <span
          className="absolute top-1 bottom-1 left-1.5 w-px bg-border"
          aria-hidden
        />
        {stacked.map((item, i) => (
          <li key={`${item.slug}-${i}`} className="relative">
            <span
              className="absolute top-4 -left-[1.35rem] size-2.5 rounded-full bg-border ring-4 ring-card"
              aria-hidden
            />
            <TimelineCard item={item} />
          </li>
        ))}
      </ol>

      {/* Desktop : axe central + nodes par année, formation à gauche / pro à droite */}
      <div
        className="hidden @2xl/timeline:grid"
        style={
          {
            gridTemplateColumns: "minmax(0,1fr) auto minmax(0,1fr)",
            gridTemplateRows: `repeat(${nTracks}, var(--half))`,
            "--half": "4.25rem",
          } as React.CSSProperties
        }
      >
        {/* Axe vertical */}
        <div
          className="relative flex justify-center"
          style={{ gridColumn: 2, gridRow: "1 / -1" }}
          aria-hidden
        >
          <span className="h-full w-px bg-border" />
        </div>

        {/* Nodes par année */}
        {years.map((year) => (
          <div
            key={year}
            className="relative flex items-start justify-center"
            style={{ gridColumn: 2, gridRow: line(year) }}
          >
            <span className="-mt-2 flex flex-col items-center gap-1 bg-card px-1.5 py-1">
              <span className="size-2 rounded-full bg-muted-foreground/40 ring-4 ring-card" />
              <span className="text-xs text-muted-foreground tabular-nums">
                {year}
              </span>
            </span>
          </div>
        ))}

        {/* Cards positionnées sur leur période */}
        {items.map((item, i) => (
          <div
            key={`${item.slug}-${i}`}
            className={cn(
              "flex py-1.5",
              item.side === "left" ? "justify-end pr-3" : "justify-start pl-3"
            )}
            style={{
              gridColumn: colOf(item),
              gridRow: `${line((item.layoutEnd ?? item.end) + 0.5)} / ${line(
                (item.layoutStart ?? item.start) + 0.5
              )}`,
            }}
          >
            <TimelineCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
