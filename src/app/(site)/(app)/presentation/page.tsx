import { Article } from "@/app/components/home/app-mockup/article"
import { Placeholder } from "@/app/components/home/app-mockup/placeholder"
import { getPresentation } from "@/lib/content"

export default async function PresentationPage() {
  const source = await getPresentation()

  if (!source) {
    return (
      <Placeholder
        title="Ma présentation"
        description="Cette section sera bientôt disponible."
      />
    )
  }

  return <Article source={source} />
}
