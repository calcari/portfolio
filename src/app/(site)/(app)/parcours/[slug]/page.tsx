import { Article } from "@/app/components/home/app-mockup/article"
import { Placeholder } from "@/app/components/home/app-mockup/placeholder"
import { parcoursTimeline } from "@/app/components/home/app-mockup/content-meta"
import { getExperience, listExperienceSlugs } from "@/lib/content"

export async function generateStaticParams() {
  const slugs = await listExperienceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const source = await getExperience(slug)

  // Collect logos for all timeline entries pointing to this slug (deduplicated, in order)
  const logos = parcoursTimeline
    .filter((item) => item.slug === slug)
    .map((item) => item.logo)
    .filter((logo, i, arr) => arr.indexOf(logo) === i)

  if (!source) {
    return (
      <Placeholder
        title="Expérience"
        description="Cet article sera bientôt disponible."
      />
    )
  }

  return <Article source={source} logos={logos} />
}
