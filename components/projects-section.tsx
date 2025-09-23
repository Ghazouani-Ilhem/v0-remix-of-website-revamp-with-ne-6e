"use client"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const projects = [
  {
    id: 1,
    title: "Intelligent predictive maintenance system for industrial machinery",
    image: "/industrial-automation-server-room-with-blue-lighti.jpg",
    tags: ["Artificial", "Technology", "Machine"],
    description:
      "Comprehensive industrial automation solution enabling real-time data exchange across Shell's global upstream operations.",
  },
  {
    id: 2,
    title: "Automated predictive maintenance system for industrial assets",
    image: "/modern-industrial-iot-factory-with-connected-devic.jpg",
    tags: ["Remote Monitoring", "SCADA", "Petrochemicals"],
    description:
      "Advanced SCADA implementation providing 24/7 monitoring and control capabilities for critical refinery operations.",
  },
  {
    id: 3,
    title: "Advanced predictive maintenance for tech driven AI machinery",
    image: "/industrial-data-analytics-dashboard-with-charts-an.jpg",
    tags: ["Artificial", "Technology", "Machine"],
    description:
      "Seamless integration between IT and OT systems, enabling data-driven decision making and operational excellence.",
  },
]

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("projects-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section id="projects-section" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="robok-shape-1 top-20 right-10" />
        <div className="robok-shape-2 bottom-20 left-10" />
        <div className="robok-shape-3 top-1/2 left-1/4" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className={`fixed-content sticky top-24 ${isVisible ? "animate-robok-fade-up" : "opacity-0"}`}>
              <div className="site-heading mb-8">
                <h4 className="sub-title text-secondary font-semibold text-sm mb-4 tracking-wider uppercase animate-robok-shimmer">
                  Latest Projects
                </h4>
                <h2 className="robok-heading text-2xl md:text-3xl font-bold mb-6 leading-tight animate-robok-text-reveal">
                  Best projects for intelligent solutions
                </h2>
              </div>

              <div className="robok-gradient-card mb-8 animate-robok-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl font-bold robok-shimmer-text mb-2 animate-robok-pulse-glow">2,650+</div>
                <h4 className="text-sm text-foreground/80 leading-relaxed">
                  Finished creative projects successfully using AI support
                </h4>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="robok-btn-secondary w-12 h-12 rounded-full flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="robok-btn-primary w-12 h-12 rounded-full flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 animate-robok-pulse-glow ${
                        index === currentIndex
                          ? "bg-gradient-to-r from-primary to-secondary w-8"
                          : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="project-style-one-items">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`project-style-one-item mb-8 ${
                    index === currentIndex ? "animate-robok-scale-in" : "opacity-50 scale-95"
                  } transition-all duration-500`}
                >
                  <div className="robok-card p-0 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0 h-full">
                      <div className="relative overflow-hidden">
                        <div
                          className="h-80 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: `url('${project.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                        <div className="robok-shape-1 absolute top-4 right-4 w-16 h-16" />
                        <div className="robok-shape-2 absolute bottom-4 left-4 w-8 h-8" />
                      </div>

                      <div className="p-8 flex flex-col justify-between robok-gradient-card">
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-4 robok-heading leading-tight">
                            <Link href="/projects">{project.title}</Link>
                          </h3>
                          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{project.description}</p>
                        </div>

                        <div className="space-y-6">
                          <Link
                            href="/projects"
                            className="robok-btn-secondary inline-flex items-center text-sm font-semibold px-4 py-2 rounded-lg"
                          >
                            Explore More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium robok-card border border-primary/20 text-foreground hover:animate-robok-bounce-in"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
