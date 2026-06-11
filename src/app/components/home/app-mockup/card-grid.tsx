import { cn } from "@/lib/utils"
import { ContentCard } from "./content-card"
import type { CardMeta } from "./content-meta"

export function CardGrid({
  items,
  basePath,
  variant,
  className,
}: {
  items: CardMeta[]
  basePath: string
  variant: "image" | "icon"
  className?: string
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item) => (
        <ContentCard
          key={item.slug}
          item={item}
          href={`${basePath}/${item.slug}`}
          variant={variant}
        />
      ))}
    </div>
  )
}
