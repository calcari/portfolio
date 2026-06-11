import { AppWithHero } from "@/app/components/home/app-mockup/app-with-hero"

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AppWithHero>{children}</AppWithHero>
}
