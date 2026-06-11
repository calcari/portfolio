import { HeroContent } from "./hero-content"

const HeroSection = () => {
  return (
    <section className="flex min-h-screen flex-col items-center px-4 py-12 pb-20 pt-28 sm:px-6 sm:py-16 sm:pb-24 sm:pt-32">
      <HeroContent />
    </section>
  )
}

export default HeroSection
