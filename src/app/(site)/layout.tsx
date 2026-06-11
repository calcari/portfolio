import Footer from "../components/layout/footer"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      {/* <Footer /> */}
    </>
  )
}
