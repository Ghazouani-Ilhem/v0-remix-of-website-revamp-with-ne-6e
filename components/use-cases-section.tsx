"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Factory, Zap, Shield, BarChart3 } from "lucide-react"
import { useEffect, useRef } from "react"

const useCases = [
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    description:
      "Streamline production lines with real-time OPC UA connectivity, reducing downtime by 40% and increasing overall equipment effectiveness.",
    benefits: ["Real-time monitoring", "Predictive maintenance", "Quality control"],
    image: "/industrial-manufacturing-plant.jpg",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description:
      "Optimize power generation and distribution with intelligent SCADA systems and automated grid management solutions.",
    benefits: ["Grid optimization", "Load balancing", "Fault detection"],
    image: "/energy-power-plant.jpg",
  },
  {
    icon: Shield,
    title: "Oil & Gas Operations",
    description:
      "Ensure safe and efficient upstream operations with comprehensive monitoring and control systems for critical infrastructure.",
    benefits: ["Safety compliance", "Remote monitoring", "Asset optimization"],
    image: "/oil-gas-refinery.jpg",
  },
  {
    icon: BarChart3,
    title: "Process Industries",
    description:
      "Enhance chemical and pharmaceutical processes with precise control systems and regulatory compliance automation.",
    benefits: ["Process optimization", "Compliance tracking", "Batch management"],
    image: "/chemical-process-plant.jpg",
  },
]

export function UseCasesSection() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true
      slider.classList.add("active")
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown = false
      slider.classList.remove("active")
    }

    const handleMouseUp = () => {
      isDown = false
      slider.classList.remove("active")
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 2
      slider.scrollLeft = scrollLeft - walk
    }

    // Auto-scroll animation
    const autoScroll = () => {
      if (slider && !isDown) {
        slider.scrollLeft += 1
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0
        }
      }
    }

    const interval = setInterval(autoScroll, 50)

    slider.addEventListener("mousedown", handleMouseDown)
    slider.addEventListener("mouseleave", handleMouseLeave)
    slider.addEventListener("mouseup", handleMouseUp)
    slider.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearInterval(interval)
      slider.removeEventListener("mousedown", handleMouseDown)
      slider.removeEventListener("mouseleave", handleMouseLeave)
      slider.removeEventListener("mouseup", handleMouseUp)
      slider.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="sub-title text-secondary font-semibold text-base mb-4">Industry Applications</h4>
          <h2 className="title text-3xl md:text-4xl font-bold text-foreground mb-6">
            Transforming Industries with <span className="text-primary">Smart Automation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how our SIOTH® platform revolutionizes industrial operations across diverse sectors
          </p>
        </div>

        <div
          ref={sliderRef}
          className="use-cases-slider flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitScrollbar: { display: "none" },
          }}
        >
          {useCases.concat(useCases).map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Card
                key={index}
                className="use-case-card flex-shrink-0 w-80 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80 border-primary/20"
              >
                <CardContent className="p-0 h-full">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div
                      className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('${useCase.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{useCase.description}</p>

                    <div className="space-y-3 mb-6">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <button className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .use-cases-slider::-webkit-scrollbar {
          display: none;
        }
        .use-case-card {
          animation: slideIn 0.6s ease-out forwards;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
