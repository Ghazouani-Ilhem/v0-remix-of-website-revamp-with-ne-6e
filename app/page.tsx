import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { ProjectsSection } from "@/components/projects-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Header />
      <div id="smooth-content">
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <UseCasesSection />
          <ProjectsSection />
          <TeamSection />
          <TestimonialsSection />
          <FAQSection />
          <BlogSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
