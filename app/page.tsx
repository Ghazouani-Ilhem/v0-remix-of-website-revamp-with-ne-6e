import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Header />
      <div id="smooth-content">
        <main className="relative overflow-hidden">
          <HeroSection />

          {/* Robok-style section separator */}
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A1B3D] via-background to-background" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#352561] via-[#FF6B35] to-transparent animate-robok-pulse-glow" />
            <div className="robok-shape-1 top-8 left-1/4 opacity-30" />
            <div className="robok-shape-2 top-12 right-1/3 opacity-20" />
          </div>

          <AboutSection />

          {/* Enhanced section separator */}
          <div className="relative h-24 overflow-hidden bg-gradient-to-r from-transparent via-[#352561]/5 to-transparent">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-px bg-gradient-to-r from-transparent via-[#352561] to-transparent animate-robok-shimmer" />
            </div>
            <div className="robok-shape-3 top-8 right-1/4 opacity-40" />
          </div>

          <ServicesSection />

          {/* Dynamic section separator */}
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-[#352561]/3 to-background" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent animate-robok-pulse-glow" />
            <div className="robok-shape-2 top-4 left-1/3 opacity-25" />
          </div>

          <UseCasesSection />
          <ProjectsSection />
          <TestimonialsSection />
          <FAQSection />
          <BlogSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
