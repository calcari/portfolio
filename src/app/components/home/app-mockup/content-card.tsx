import Image from "next/image"
import Link from "next/link"
import { ImageIcon } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { CardMeta } from "./content-meta"

export function ContentCard({
  item,
  href,
  variant,
}: {
  item: CardMeta
  href: string
  variant: "image" | "icon"
}) {
  const Icon = item.icon

  return (
    <Link href={href} className="block transition-colors">
      <Card className="h-full gap-0 py-0 transition-colors hover:ring-foreground/25">
        {variant === "image" ? (
          <div className="relative aspect-video w-full bg-muted">
            {item.image ? (
              <Image src={item.image} alt="" fill className="object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center">
                <ImageIcon className="size-6 text-muted-foreground/40" />
              </div>
            )}
          </div>
        ) : null}
        <CardHeader className="py-5">
          {variant === "icon" && Icon ? (
            <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-muted">
              <Icon className="size-5 text-muted-foreground" />
            </div>
          ) : null}
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.subtitle}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
