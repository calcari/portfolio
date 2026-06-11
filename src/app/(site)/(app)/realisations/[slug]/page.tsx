import { Article } from "@/app/components/home/app-mockup/article"
import { Placeholder } from "@/app/components/home/app-mockup/placeholder"
import { getRealisation, listRealisationSlugs } from "@/lib/content"

export async function generateStaticParams() {
  const slugs = await listRealisationSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function RealisationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const source = await getRealisation(slug)

  if (!source) {
    return (
      <Placeholder
        title="Réalisation"
        description="Cet article sera bientôt disponible."
      />
    )
  }

  return <Article source={source} />
}
