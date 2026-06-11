import { Milestone, UserRound } from "lucide-react"

import { HeroContent } from "@/app/components/home/hero-section/hero-content"
import { CardGrid } from "@/app/components/home/app-mockup/card-grid"
import { CompetencesGrid } from "@/app/components/home/app-mockup/competences-hub"
import { ContentCard } from "@/app/components/home/app-mockup/content-card"
import { realisations, type CardMeta } from "@/app/components/home/app-mockup/content-meta"

const navCards: (CardMeta & { href: string })[] = [
  {
    slug: "presentation",
    href: "/presentation",
    title: "Ma présentation",
    subtitle: "Qui je suis et mon approche du métier.",
    icon: UserRound,
  },
  {
    slug: "parcours",
    href: "/parcours",
    title: "Mon parcours",
    subtitle: "Mes études et expériences, en parallèle.",
    icon: Milestone,
  },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-medium text-primary">{children}</h2>
}

export default function HomePage() {
  return (
    <div>
      <section className="flex flex-col items-center px-4 py-12 sm:px-6 sm:py-16">
        <HeroContent />
      </section>

      <div className="flex flex-col gap-12 px-6 pb-12">
        <section className="flex flex-col gap-4">
          <SectionTitle>Me découvrir</SectionTitle>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {navCards.map((card) => (
              <ContentCard
                key={card.slug}
                item={card}
                href={card.href}
                variant="icon"
              />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <SectionTitle>Mes réalisations</SectionTitle>
          <CardGrid
            items={realisations}
            basePath="/realisations"
            variant="image"
            className="p-0"
          />
        </section>

        <section className="flex flex-col gap-4">
          <SectionTitle>Mes compétences</SectionTitle>
          <CompetencesGrid />
        </section>
      </div>
    </div>
  )
}
