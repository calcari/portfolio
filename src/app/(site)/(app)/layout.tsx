import { AppWithHero } from "@/app/components/home/app-mockup/app-with-hero"
import { realisations } from "@/app/components/home/app-mockup/content-meta"

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const realisationNavItems = realisations.map((item) => ({
    title: item.title,
    href: `/realisations/${item.slug}`,
  }))

  return (
    <AppWithHero realisationNavItems={realisationNavItems}>
      {children}
    </AppWithHero>
  )
}
