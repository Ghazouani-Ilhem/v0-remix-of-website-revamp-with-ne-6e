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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/10 to-teal-500/10 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: "10%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-teal-500/15 to-orange-500/15 rounded-full blur-2xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            top: "60%",
            right: "10%",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="fixed-content sticky top-24 fade-up-anim">
              <div className="site-heading mb-8">
                <h4 className="sub-title text-orange-400 font-semibold text-sm mb-4 tracking-wider uppercase">
                  Latest Projects
                </h4>
                <h2 className="title text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  Proven solutions for{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                    Fortune 500
                  </span>{" "}
                  companies
                </h2>
              </div>

              <div className="project-fun-fact mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent mb-2 js-counter">
                  500+
                </div>
                <h4 className="text-sm text-slate-300 leading-relaxed">
                  Global clients including Shell, ExxonMobil, Siemens, and Rio Tinto trust our SIOTH® platform
                </h4>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-gradient-to-r from-orange-400 to-teal-400 w-8"
                          : "bg-white/30 w-2 hover:bg-white/50"
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
                  className={`project-slide flex-shrink-0 w-full group transition-all duration-500 overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 ${
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
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-teal-500/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-orange-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-teal-400/30 to-orange-400/30 rounded-full blur-lg animate-float" />

                        <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                          <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, "0")}</span>
                        </div>
                      </div>

                      <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
                        <div>
                          <h3 className="text-lg font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                            <Link href="/projects">{project.title}</Link>
                          </h3>
                          <p className="text-slate-300 mb-6 text-xs leading-relaxed">{project.description}</p>
                        </div>

                        <div className="space-y-6">
                          <Link
                            href="/projects"
                            className="inline-flex items-center text-orange-400 hover:text-white font-semibold text-xs group-hover:translate-x-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-teal-500 hover:bg-clip-text hover:text-transparent"
                          >
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-medium bg-white/10 backdrop-blur-sm text-slate-300 border border-white/20 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-teal-500/20 hover:border-orange-400/50 hover:text-white transition-all duration-300"
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
        
        .fade-up-anim {
          animation: fadeUpAnim 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite reverse;
        }
        
        .js-counter {
          animation: counterGlow 2s ease-in-out infinite alternate;
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
        
        @keyframes fadeUpAnim {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes counterGlow {
          0% {
            filter: drop-shadow(0 0 5px rgba(251, 146, 60, 0.3));
          }
          100% {
            filter: drop-shadow(0 0 15px rgba(251, 146, 60, 0.6));
          }
        }
      `}</style>
    </section>
  )
}
