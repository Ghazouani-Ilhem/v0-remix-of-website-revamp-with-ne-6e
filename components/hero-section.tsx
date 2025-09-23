"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    id: 1,
    title: "SIOTH® - Smart IoT Highway",
    subtitle: "Seamless, Secure & Scalable IT-OT Integration",
    description:
      "Transform your industrial operations with our flagship platform. Connect systems, exchange data, and optimize processes with enterprise-grade security trusted by Fortune 500 companies worldwide.",
    badge: "Platform",
    badgeText: "SIOTH® 2024",
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
    badge: "OPC Products",
    badgeText: "Industry Standard",
    image: "/modern-industrial-iot-factory-with-connected-devic.jpg",
    cta: "View OPC Solutions",
    ctaLink: "/opc-products",
  },
  {
    id: 3,
    title: "Remote Monitoring & SCADA",
    subtitle: "Complete operational visibility",
    description:
      "Monitor, control, and optimize your industrial processes from anywhere. Our comprehensive SCADA solutions provide real-time dashboards with military-grade security for critical operations.",
    badge: "Monitoring",
    badgeText: "Real-time Control",
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
    }, 7000)

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
    <section className="relative overflow-hidden bg-primary text-white min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url('${currentSlideData.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-robok-up-down" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-robok-right-left"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/25 rounded-full blur-2xl animate-robok-zoom-up-down"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8 max-w-7xl z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center py-20">
          <div className={`lg:col-span-7 space-y-8 ${isVisible ? "animate-robok-slide-up" : "opacity-0"}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full text-secondary text-sm font-medium">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                {currentSlideData.badgeText}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
                {currentSlideData.title}
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-white/90 mt-2">
                  {currentSlideData.subtitle}
                </span>
              </h1>

              <p className="text-base text-white/85 text-pretty max-w-2xl leading-relaxed">
                {currentSlideData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  asChild
                  className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Link href={currentSlideData.ctaLink}>
                    {currentSlideData.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="px-8 py-3 border-white/30 text-white hover:bg-white/10 rounded-xl transition-all duration-300 bg-transparent"
                >
                  <Link href="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-5 relative ${isVisible ? "animate-robok-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            {/* Slider Navigation */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-secondary scale-125" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleAutoPlay}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="robok-glass rounded-2xl p-6">
              <p className="text-white/70 text-sm mb-4 text-center">Trusted by industry leaders</p>
              <div className="grid grid-cols-3 gap-4">
                {["Shell", "ExxonMobil", "Siemens", "GE", "Chevron", "Rio Tinto"].map((company, index) => (
                  <div
                    key={company}
                    className="bg-white/10 rounded-lg p-3 flex items-center justify-center h-12 backdrop-blur-sm border border-white/10 animate-robok-up-down"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <span className="text-white/80 text-xs font-medium">{company}</span>
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
            className="h-full bg-secondary transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % 7000) / 7000) * 100}%`,
              animation: "progress 7s linear infinite",
            }}
          />
        </div>
      )}
    </section>
  )
}
