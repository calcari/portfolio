import { Article } from "@/app/components/home/app-mockup/article"
import { Placeholder } from "@/app/components/home/app-mockup/placeholder"
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

  if (!source) {
    return (
      <Placeholder
        title="Expérience"
        description="Cet article sera bientôt disponible."
      />
    )
  }

  return <Article source={source} />
}
