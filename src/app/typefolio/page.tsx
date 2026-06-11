import Divider from "../components/divider"
import AboutMe from "../components/home/about-me"
import Education from "../components/home/education"
import Experience from "../components/home/experience"
import FeaturedWork from "../components/home/featured-work"
import ProjectOverview from "../components/home/project-overview"
import LegacyHeroSection from "../components/legacy/hero-section"

export default function TypefolioPage() {
  return (
    <main>
      <LegacyHeroSection />
      <Divider />
      <AboutMe />
      <Divider />
      <FeaturedWork />
      <Divider />
      <Experience />
      <Divider />
      <Education />
      <Divider />
      <ProjectOverview />
      <Divider />
    </main>
  )
}
