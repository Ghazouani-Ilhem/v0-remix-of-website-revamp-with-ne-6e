"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    id: 1,
    title: "Enterprise IT-OT Integration",
    subtitle: "Seamless. Secure. Scalable.",
    description:
      "Transform your industrial operations with our flagship SIOTH® platform. Connect systems, exchange data, and optimize processes with enterprise-grade security trusted by Fortune 500 companies worldwide.",
    badge: "SIOTH® Platform",
    image: "/industrial-automation-server-room-with-blue-lighti.jpg",
    cta: "Explore Platform",
    ctaLink: "/sioth-platform",
  },
  {
    id: 2,
    title: "OPC UA Universal Server",
    subtitle: "Built in minutes using SIOTH®",
    description:
      "Deploy robust OPC UA servers instantly with our comprehensive connectivity suite. Ensure secure, reliable data exchange across your entire automation infrastructure with industry-standard compliance.",
    badge: "OPC Solutions",
    image: "/modern-industrial-iot-factory-with-connected-devic.jpg",
    cta: "View Solutions",
    ctaLink: "/opc-products",
  },
  {
    id: 3,
    title: "Remote Monitoring & SCADA",
    subtitle: "Complete operational visibility",
    description:
      "Monitor, control, and optimize your industrial processes from anywhere. Our comprehensive SCADA solutions provide real-time dashboards with military-grade security for critical operations.",
    badge: "Monitoring Solutions",
    image: "/industrial-data-analytics-dashboard-with-charts-an.jpg",
    cta: "See Solutions",
    ctaLink: "/remote-monitoring",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative overflow-hidden bg-background min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url('${currentSlideData.image}')` }}
      />
      <div className="absolute inset-0 robok-gradient-primary opacity-95" />

      <div className="absolute inset-0 opacity-30">
        <div className="robok-geometric robok-geometric-1" />
        <div className="robok-geometric robok-geometric-2" />
        <div className="robok-geometric robok-geometric-3" />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8 max-w-7xl z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center py-24">
          <div className={`lg:col-span-7 space-y-12 ${isVisible ? "animate-robok-fade-up" : "opacity-0"}`}>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 robok-glass rounded-full text-white text-sm font-medium border border-white/20 animate-robok-glow-pulse">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                {currentSlideData.badge}
              </div>

              <div className="space-y-6">
                <h1 className="robok-heading-bold text-4xl sm:text-5xl lg:text-7xl text-white text-balance">
                  {currentSlideData.title}
                </h1>
                <p className="robok-heading text-2xl sm:text-3xl lg:text-4xl text-white/90 text-balance">
                  {currentSlideData.subtitle}
                </p>
              </div>

              <p className="robok-text text-lg text-white/85 text-pretty max-w-2xl leading-relaxed">
                {currentSlideData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Button
                  size="lg"
                  asChild
                  className="robok-btn-primary px-10 py-4 text-white font-medium rounded-lg text-lg h-auto"
                >
                  <Link href={currentSlideData.ctaLink}>
                    {currentSlideData.cta}
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="robok-btn-secondary px-10 py-4 rounded-lg text-lg h-auto bg-transparent border-white/30 text-white hover:text-white"
                >
                  <Link href="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-5 relative ${isVisible ? "animate-robok-scale-in" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-12 h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleAutoPlay}
                  className="p-3 rounded-lg robok-glass hover:bg-white/20 transition-all duration-300"
                >
                  {isAutoPlaying ? <Pause className="h-4 w-4 text-white" /> : <Play className="h-4 w-4 text-white" />}
                </button>
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-lg robok-glass hover:bg-white/20 transition-all duration-300"
                >
                  <ChevronLeft className="h-4 w-4 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-lg robok-glass hover:bg-white/20 transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>

            <div className="robok-glass-card rounded-2xl p-8 border border-white/10">
              <p className="text-white/70 text-sm mb-6 text-center font-medium">Trusted by industry leaders</p>
              <div className="grid grid-cols-3 gap-4">
                {["Shell", "ExxonMobil", "Siemens", "GE", "Chevron", "Rio Tinto"].map((company, index) => (
                  <div
                    key={company}
                    className="robok-glass rounded-lg p-4 flex items-center justify-center h-14 border border-white/10 animate-robok-float"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <span className="text-white/90 text-xs font-medium">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div
            className="h-full robok-progress transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % 8000) / 8000) * 100}%`,
              animation: "progress 8s linear infinite",
            }}
          />
        </div>
      )}
    </section>
  )
}
