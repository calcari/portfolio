import type { Metadata } from "next"
import Footer from "../components/layout/footer"
import LegacyHeader from "../components/legacy/header"

export const metadata: Metadata = {
  title: "Typefolio — version classique",
  description: "Ancienne home Typefolio conservée pour comparaison.",
}

export default function TypefolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <LegacyHeader />
      {children}
      <Footer />
    </>
  )
}
