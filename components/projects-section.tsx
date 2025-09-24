"use client"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

const projects = [
  {
    id: 1,
    title: "Intelligent Predictive Maintenance",
    subtitle: "Industrial IoT Solutions",
    image: "/industrial-automation-server-room-with-blue-lighti.jpg",
    tags: ["Artificial Intelligence", "Predictive Analytics", "IoT"],
    description:
      "Revolutionary AI-powered system that predicts equipment failures before they occur, reducing downtime by 85% and maintenance costs by 60% across global industrial operations.",
    metrics: "85% Downtime Reduction",
    year: "2024",
  },
  {
    id: 2,
    title: "Real-Time SCADA Integration",
    subtitle: "Process Automation",
    image: "/modern-industrial-iot-factory-with-connected-devic.jpg",
    tags: ["SCADA", "Real-time Monitoring", "Process Control"],
    description:
      "Advanced supervisory control system providing seamless data acquisition and control capabilities for critical infrastructure, enabling 24/7 monitoring of complex industrial processes.",
    metrics: "99.9% Uptime Achieved",
    year: "2024",
  },
  {
    id: 3,
    title: "Data-Driven Operations Platform",
    subtitle: "Digital Transformation",
    image: "/industrial-data-analytics-dashboard-with-charts-an.jpg",
    tags: ["Data Analytics", "Digital Twin", "Optimization"],
    description:
      "Comprehensive digital transformation platform that bridges IT and OT systems, enabling data-driven decision making and operational excellence through advanced analytics and visualization.",
    metrics: "40% Efficiency Gain",
    year: "2023",
  },
]

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        e.preventDefault()

        if (e.deltaY > 0 && currentIndex < projects.length - 1) {
          setCurrentIndex((prev) => prev + 1)
        } else if (e.deltaY < 0 && currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1)
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && currentIndex < projects.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      } else if (e.key === "ArrowUp" && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1)
      }
    }

    window.addEventListener("wheel", handleScroll, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("wheel", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentIndex])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    const progress = ((currentIndex + 1) / projects.length) * 100
    setScrollProgress(progress)
  }, [currentIndex])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  return (
    <section
      ref={sectionRef}
      id="projects-section"
      className="robok-dark-section min-h-screen relative overflow-hidden"
    >
      <div className="robok-progress-bar">
        <div className="robok-progress-fill animate-robok-progress-fill" style={{ height: `${scrollProgress}%` }} />
      </div>

      <div className="robok-vertical-nav">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`robok-nav-dot ${index === currentIndex ? "active" : ""}`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="robok-shape-enhanced-1 top-20 right-10 animate-robok-parallax-float" />
        <div className="robok-shape-enhanced-2 bottom-20 left-10 animate-robok-morphing-border" />
        <div className="robok-shape-enhanced-3 top-1/2 left-1/4 animate-robok-glow-expand" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-screen">
        <div className="grid lg:grid-cols-12 gap-12 h-full items-center">
          <div className="lg:col-span-5">
            <div className={`sticky top-24 ${isVisible ? "animate-robok-vertical-fade-up" : "opacity-0"}`}>
              <div className="mb-8">
                <h4 className="robok-vertical-subtitle animate-robok-shimmer">Latest Projects</h4>
                <h2 className="robok-vertical-title animate-robok-text-reveal">
                  Innovation Through
                  <br />
                  Intelligent Solutions
                </h2>
              </div>

              <div className="robok-vertical-card mb-8 animate-robok-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-5xl font-bold mb-2 animate-robok-pulse-glow">
                  <span className="io-gradient-text">2,650+</span>
                </div>
                <h4 className="text-sm text-white/70 leading-relaxed">
                  Industrial systems optimized with AI-powered solutions
                </h4>
              </div>

              <div className="flex items-center gap-6">
                <button
                  onClick={prevSlide}
                  className="robok-btn-secondary w-14 h-14 rounded-full flex items-center justify-center group"
                  aria-label="Previous project"
                >
                  <ChevronUp className="w-6 h-6 group-hover:animate-robok-bounce-in" />
                </button>
                <button
                  onClick={nextSlide}
                  className="robok-btn-primary w-14 h-14 rounded-full flex items-center justify-center group"
                  aria-label="Next project"
                >
                  <ChevronDown className="w-6 h-6 group-hover:animate-robok-bounce-in" />
                </button>

                <div className="flex flex-col gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-1 rounded-full transition-all duration-500 animate-robok-pulse-glow ${
                        index === currentIndex
                          ? "bg-gradient-to-r from-primary to-secondary w-12"
                          : "bg-white/20 w-6 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-full flex items-center">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`robok-project-item absolute inset-0 ${
                    index === currentIndex ? "active animate-robok-vertical-slide-in" : "inactive"
                  }`}
                >
                  <div className="robok-vertical-card w-full">
                    <div className="grid md:grid-cols-2 gap-8 h-full items-center">
                      <div className="relative overflow-hidden rounded-2xl">
                        <div
                          className="h-96 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                          style={{ backgroundImage: `url('${project.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        <div className="absolute top-6 right-6">
                          <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-primary/30">
                            {project.year}
                          </span>
                        </div>

                        <div className="absolute bottom-6 left-6">
                          <div className="text-2xl font-bold text-white mb-1">{project.metrics}</div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-primary font-semibold text-sm mb-2 tracking-wider uppercase">
                            {project.subtitle}
                          </h4>
                          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                          <p className="text-white/80 text-base leading-relaxed">{project.description}</p>
                        </div>

                        <div className="space-y-6">
                          <Link
                            href="/projects"
                            className="robok-btn-primary inline-flex items-center text-sm font-semibold px-6 py-3 rounded-xl group"
                          >
                            Explore Project
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 transition-colors"
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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-sm animate-robok-float-gentle">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
