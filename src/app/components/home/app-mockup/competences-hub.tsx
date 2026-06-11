import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { competenceGroups } from "./content-meta"

export function CompetencesGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {competenceGroups.map((group) => (
          <Card key={group.title} className="gap-0 py-0 shadow-none">
            <CardHeader className="border-b py-4">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {group.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.slug}
                    href={`/competences/${item.slug}`}
                    className="group flex flex-col gap-2 border-b px-4 py-3 last:border-0 hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {Icon && (
                        <Icon className="size-4 shrink-0 text-muted-foreground" />
                      )}
                      <span className="flex-1 text-sm font-medium leading-tight">
                        {item.title}
                      </span>
                      <ChevronRight className="size-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-60" />
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <Progress
                        value={(item.level / 5) * 100}
                        className="h-1.5 flex-1"
                        aria-label={`Niveau ${item.level} sur 5`}
                      />
                      <span className="w-6 shrink-0 text-right text-xs tabular-nums text-muted-foreground">
                        {item.level}/5
                      </span>
                    </div>
                  </Link>
                )
              })}
            </CardContent>
          </Card>
        ))}
    </div>
  )
}

export function CompetencesHub() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-medium text-primary">Compétences</h1>
        <p className="text-sm text-muted-foreground">
          Compétences classées par domaine et comparées selon le niveau de maîtrise actuel.
        </p>
      </div>

      <CompetencesGrid />
    </div>
  )
}
