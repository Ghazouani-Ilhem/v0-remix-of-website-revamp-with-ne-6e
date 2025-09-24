"use client"
import { ArrowRight, ExternalLink } from "lucide-react"
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
    category: "AI & Analytics",
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
    category: "Process Control",
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
    category: "Digital Transformation",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      ref={sectionRef}
      id="projects-section"
      className="relative py-32 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 ${isVisible ? "animate-io-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary tracking-wide uppercase">Featured Projects</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Innovation Through
            <br />
            <span className="io-gradient-text">Intelligent Solutions</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming industrial operations with cutting-edge technology solutions that deliver measurable results
            and sustainable growth.
          </p>

          <div className="mt-12 inline-block">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    <span className="io-gradient-text">2,650+</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Industrial Systems Optimized</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    <span className="io-gradient-text">99.9%</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Average System Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group ${isVisible ? "animate-io-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div
                      className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-sm font-semibold text-foreground border border-border/50">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-primary/30">
                        {project.year}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6">
                      <div className="text-3xl font-bold text-white mb-1">{project.metrics}</div>
                      <div className="text-white/80 text-sm font-medium">{project.subtitle}</div>
                    </div>
                  </div>

                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-1 h-8 bg-primary rounded-full" />
                        <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                          {project.subtitle}
                        </span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/projects"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 group/btn"
                      >
                        Explore Project
                        <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                      <button className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-xl font-semibold text-foreground hover:bg-muted/50 transition-all duration-300 group/btn">
                        View Case Study
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-4 py-2 bg-muted/50 border border-border/50 rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-20 ${isVisible ? "animate-io-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 border border-border/50">
            <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Discover how our innovative solutions can optimize your industrial processes and drive sustainable growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
