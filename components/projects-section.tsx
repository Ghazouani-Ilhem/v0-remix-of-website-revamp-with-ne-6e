"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Tag, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "Shell Global OPC UA Integration for Upstream Operations",
    image: "/industrial-automation-server-room-with-blue-lighti.jpg",
    tags: ["SIOTH Platform", "OPC UA", "Oil & Gas"],
    description:
      "Comprehensive industrial automation solution enabling real-time data exchange across Shell's global upstream operations.",
  },
  {
    id: 2,
    title: "ExxonMobil Refinery SCADA System with Real-time Monitoring",
    image: "/modern-industrial-iot-factory-with-connected-devic.jpg",
    tags: ["Remote Monitoring", "SCADA", "Petrochemicals"],
    description:
      "Advanced SCADA implementation providing 24/7 monitoring and control capabilities for critical refinery operations.",
  },
  {
    id: 3,
    title: "Siemens Manufacturing Plant IT-OT Integration Solution",
    image: "/industrial-data-analytics-dashboard-with-charts-an.jpg",
    tags: ["IT-OT Integration", "Manufacturing", "Analytics"],
    description:
      "Seamless integration between IT and OT systems, enabling data-driven decision making and operational excellence.",
  },
  {
    id: 4,
    title: "Rio Tinto Mining Operations Digital Twin Platform",
    image: "/mining-operations-digital-control.jpg",
    tags: ["Digital Twin", "Mining", "IoT"],
    description:
      "Revolutionary digital twin implementation for optimizing mining operations and predictive maintenance.",
  },
  {
    id: 5,
    title: "Chevron Pipeline Monitoring & Control System",
    image: "/pipeline-monitoring-system.jpg",
    tags: ["Pipeline", "Monitoring", "Safety"],
    description: "Comprehensive pipeline monitoring solution ensuring safe and efficient hydrocarbon transportation.",
  },
]

export function ProjectsSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const slideWidth = slider.children[0]?.clientWidth || 0
    const gap = 32 // 2rem gap
    slider.scrollTo({
      left: currentIndex * (slideWidth + gap),
      behavior: "smooth",
    })
  }, [currentIndex])

  return (
    <section className="py-24 bg-muted/30 blurry-shape-half-right-bottom overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="fixed-content sticky top-24">
              <div className="site-heading mb-8">
                <h4 className="sub-title text-secondary font-semibold text-base mb-4">Latest Projects</h4>
                <h2 className="title text-3xl md:text-4xl font-bold text-foreground mb-6 split-text-right split-text-in-right">
                  Proven solutions for <span className="text-primary">Fortune 500</span> companies
                </h2>
              </div>
              <div className="project-fun-fact mb-8">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <h4 className="text-base text-muted-foreground">
                  Global clients including Shell, ExxonMobil, Siemens, and Rio Tinto trust our SIOTH® platform
                </h4>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div
              ref={sliderRef}
              className="project-slider flex gap-8 overflow-x-hidden"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`project-slide flex-shrink-0 w-full group hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    index === currentIndex ? "scale-100 opacity-100" : "scale-95 opacity-70"
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0 h-full">
                      <div className="relative overflow-hidden">
                        <div
                          className="h-80 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: `url('${project.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                        <div className="absolute top-4 right-4 w-16 h-16 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
                      </div>

                      <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-card to-card/80">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                            <Link href="/projects">{project.title}</Link>
                          </h3>
                          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{project.description}</p>
                        </div>

                        <div className="space-y-6">
                          <Link
                            href="/projects"
                            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300"
                          >
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-slide {
          animation: slideInProject 0.8s ease-out forwards;
        }
        @keyframes slideInProject {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
