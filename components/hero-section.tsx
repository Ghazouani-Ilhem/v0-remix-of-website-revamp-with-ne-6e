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
    <section className="relative overflow-hidden bg-[#1a1a2e] min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url('${currentSlideData.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/95 via-[#FF6B35]/20 to-[#00CED1]/30" />

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#FF6B35]/30 to-[#00CED1]/30 blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.1}%`,
            top: `${10 + mousePosition.y * 0.1}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#00CED1]/40 to-[#FF6B35]/20 blur-2xl animate-pulse"
          style={{
            right: `${15 + mousePosition.x * 0.05}%`,
            bottom: `${20 + mousePosition.y * 0.08}%`,
            transform: "translate(50%, 50%)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-32 h-32 bg-[#FF6B35]/30 rotate-45 animate-spin"
          style={{
            left: `${70 + mousePosition.x * 0.03}%`,
            top: `${30 + mousePosition.y * 0.05}%`,
            animationDuration: "20s",
          }}
        />
        <div
          className="absolute w-24 h-24 border-2 border-[#00CED1]/40 rounded-full animate-ping"
          style={{
            right: `${25 + mousePosition.x * 0.02}%`,
            top: `${60 + mousePosition.y * 0.04}%`,
            animationDuration: "3s",
          }}
        />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8 max-w-7xl z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center py-24">
          <div className={`lg:col-span-7 space-y-12 ${isVisible ? "animate-robok-fade-up" : "opacity-0"}`}>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-[#FF6B35]/30 shadow-lg shadow-[#FF6B35]/20">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse shadow-lg shadow-[#FF6B35]/50" />
                {currentSlideData.badge}
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white text-balance leading-tight">
                  <span className="bg-gradient-to-r from-white via-[#00CED1] to-white bg-clip-text text-transparent animate-pulse">
                    {currentSlideData.title}
                  </span>
                </h1>
                <p className="text-2xl sm:text-3xl lg:text-4xl text-[#00CED1] text-balance font-light">
                  {currentSlideData.subtitle}
                </p>
              </div>

              <p className="text-lg text-white/85 text-pretty max-w-2xl leading-relaxed">
                {currentSlideData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/80 hover:from-[#FF6B35]/90 hover:to-[#FF6B35] px-10 py-4 text-white font-medium rounded-lg text-lg h-auto shadow-lg shadow-[#FF6B35]/30 hover:shadow-xl hover:shadow-[#FF6B35]/40 transition-all duration-300 hover:scale-105"
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
                  className="px-10 py-4 rounded-lg text-lg h-auto bg-transparent border-[#00CED1]/50 text-[#00CED1] hover:bg-[#00CED1]/10 hover:border-[#00CED1] hover:text-[#00CED1] transition-all duration-300 hover:scale-105"
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
                        ? "bg-[#FF6B35] shadow-lg shadow-[#FF6B35]/50"
                        : "bg-white/30 hover:bg-[#00CED1]/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleAutoPlay}
                  className="p-3 rounded-lg bg-white/10 backdrop-blur-md hover:bg-[#FF6B35]/20 transition-all duration-300 border border-white/20"
                >
                  {isAutoPlaying ? <Pause className="h-4 w-4 text-white" /> : <Play className="h-4 w-4 text-white" />}
                </button>
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-lg bg-white/10 backdrop-blur-md hover:bg-[#00CED1]/20 transition-all duration-300 border border-white/20"
                >
                  <ChevronLeft className="h-4 w-4 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-lg bg-white/10 backdrop-blur-md hover:bg-[#00CED1]/20 transition-all duration-300 border border-white/20"
                >
                  <ChevronRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
              <p className="text-white/70 text-sm mb-6 text-center font-medium">Trusted by industry leaders</p>
              <div className="grid grid-cols-3 gap-4">
                {brandPartners.map((brand, index) => (
                  <div
                    key={brand.name}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center h-14 border border-white/10 hover:border-[#FF6B35]/30 hover:bg-[#FF6B35]/10 transition-all duration-300 group"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animation: "float 6s ease-in-out infinite",
                    }}
                  >
                    <span className="text-white/90 text-xs font-bold group-hover:text-[#FF6B35] transition-colors duration-300">
                      {brand.logo}
                    </span>
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
            className="h-full bg-gradient-to-r from-[#FF6B35] to-[#00CED1] transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % 8000) / 8000) * 100}%`,
              animation: "progress 8s linear infinite",
            }}
          />
        </div>
      )}

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
