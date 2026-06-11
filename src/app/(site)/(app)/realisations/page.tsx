import { CardGrid } from "@/app/components/home/app-mockup/card-grid"
import { realisations } from "@/app/components/home/app-mockup/content-meta"

export default function RealisationsPage() {
  return (
    <CardGrid items={realisations} basePath="/realisations" variant="image" />
  )
}
