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

const brandPartners = [
  { name: "Shell", logo: "S" },
  { name: "ExxonMobil", logo: "E" },
  { name: "Siemens", logo: "Si" },
  { name: "GE", logo: "GE" },
  { name: "Chevron", logo: "C" },
  { name: "Rio Tinto", logo: "RT" },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2A1B3D] via-[#1A1A2E] to-[#16213E] min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out opacity-20"
        style={{ backgroundImage: `url('${currentSlideData.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A1B3D]/98 via-[#1A1A2E]/95 to-[#16213E]/90" />

      <div className="absolute inset-0 opacity-30">
        <div className="robok-shape-1 top-10 left-10" />
        <div className="robok-shape-2 top-1/3 right-20" />
        <div className="robok-shape-3 bottom-20 left-1/4" />
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#FF6B35]/30 to-[#FF8C42]/30 blur-3xl animate-robok-pulse-glow"
          style={{
            left: `${20 + mousePosition.x * 0.1}%`,
            top: `${10 + mousePosition.y * 0.1}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#FF9A56]/40 to-[#FF6B35]/20 blur-2xl animate-robok-float-gentle"
          style={{
            right: `${15 + mousePosition.x * 0.05}%`,
            bottom: `${20 + mousePosition.y * 0.08}%`,
            transform: "translate(50%, 50%)",
            animationDelay: "2s",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center py-16 sm:py-20 lg:py-24">
          <div className={`lg:col-span-7 space-y-8 lg:space-y-12 ${isVisible ? "animate-robok-fade-up" : "opacity-0"}`}>
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 lg:px-6 lg:py-3 robok-card text-xs sm:text-sm font-medium shadow-lg">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-robok-pulse-glow shadow-lg shadow-[#FF6B35]/50" />
                <span className="robok-shimmer-text">{currentSlideData.badge}</span>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-balance leading-tight animate-robok-text-reveal">
                  <span className="robok-heading">{currentSlideData.title}</span>
                </h1>
                <p
                  className="text-lg sm:text-xl lg:text-xl text-[#FF8C42] text-balance font-light animate-robok-slide-right"
                  style={{ animationDelay: "0.2s" }}
                >
                  {currentSlideData.subtitle}
                </p>
              </div>

              <p
                className="text-sm sm:text-base text-white/85 text-pretty max-w-2xl leading-relaxed animate-robok-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                {currentSlideData.description}
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6 lg:pt-8 animate-robok-scale-in"
                style={{ animationDelay: "0.6s" }}
              >
                <Button
                  size="lg"
                  asChild
                  className="robok-btn-primary px-6 sm:px-8 lg:px-10 py-3 lg:py-4 text-sm sm:text-base h-auto"
                >
                  <Link href={currentSlideData.ctaLink}>
                    {currentSlideData.cta}
                    <ArrowRight className="ml-2 lg:ml-3 h-4 w-4 lg:h-5 lg:w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="robok-btn-secondary px-6 sm:px-8 lg:px-10 py-3 lg:py-4 text-sm sm:text-base h-auto bg-transparent"
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
                      index === currentSlide
                        ? "bg-[#FF6B35] shadow-lg shadow-[#FF6B35]/50 animate-robok-pulse-glow"
                        : "bg-white/30 hover:bg-[#FF8C42]/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleAutoPlay}
                  className="p-3 rounded-lg robok-card hover:animate-robok-bounce-in transition-all duration-300"
                >
                  {isAutoPlaying ? (
                    <Pause className="h-4 w-4 text-foreground" />
                  ) : (
                    <Play className="h-4 w-4 text-foreground" />
                  )}
                </button>
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-lg robok-card hover:animate-robok-bounce-in transition-all duration-300"
                >
                  <ChevronLeft className="h-4 w-4 text-foreground" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-lg robok-card hover:animate-robok-bounce-in transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4 text-foreground" />
                </button>
              </div>
            </div>

            <div className="robok-gradient-card shadow-xl animate-robok-float-gentle">
              <p className="text-white/70 text-sm mb-6 text-center font-medium">Trusted by industry leaders</p>
              <div className="grid grid-cols-3 gap-4">
                {brandPartners.map((brand, index) => (
                  <div
                    key={brand.name}
                    className="robok-card p-4 flex items-center justify-center h-14 hover:animate-robok-bounce-in group"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <span className="text-foreground/90 text-xs font-bold group-hover:text-[#FF6B35] transition-colors duration-300">
                      {brand.logo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(0.5deg); }
        }
      `}</style>
    </section>
  )
}
