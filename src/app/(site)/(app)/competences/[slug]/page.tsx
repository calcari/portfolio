import { Article } from "@/app/components/home/app-mockup/article"
import { Placeholder } from "@/app/components/home/app-mockup/placeholder"
import { getCompetence, listCompetenceSlugs } from "@/lib/content"

export async function generateStaticParams() {
  const slugs = await listCompetenceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function CompetencePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const source = await getCompetence(slug)

  if (!source) {
    return (
      <Placeholder
        title="Compétence"
        description="Cette compétence sera bientôt disponible."
      />
    )
  }

  return <Article source={source} />
}
