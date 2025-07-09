import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AcademicSection } from "@/components/academic-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <HeroSection />
      <AboutSection />
      <AcademicSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
