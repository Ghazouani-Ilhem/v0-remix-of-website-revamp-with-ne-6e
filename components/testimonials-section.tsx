"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    content:
      "Integration Objects' SIOTH platform transformed our manufacturing operations. We reduced integration time from months to weeks and improved our overall equipment effectiveness by 25%.",
    author: "Sarah Chen",
    role: "Manufacturing Director",
    company: "TechManufacturing Corp",
    avatar: "/professional-woman-diverse.png",
    rating: 5,
  },
  {
    content:
      "The OPC UA server capabilities are outstanding. We've successfully connected legacy systems to modern cloud platforms with zero downtime. The support team is incredibly knowledgeable.",
    author: "Michael Rodriguez",
    role: "IT Manager",
    company: "Industrial Solutions Inc",
    avatar: "/professional-man.png",
    rating: 5,
  },
  {
    content:
      "SIOTH's visual configuration tools made it possible for our operations team to set up complex integrations without requiring extensive programming knowledge. Game changer for us.",
    author: "Emma Thompson",
    role: "Operations Manager",
    company: "AutoParts Manufacturing",
    avatar: "/professional-woman-manager.png",
    rating: 5,
  },
  {
    content:
      "The real-time data visualization and analytics capabilities have given us unprecedented insights into our production processes. ROI was achieved within 6 months.",
    author: "David Park",
    role: "Plant Manager",
    company: "Advanced Manufacturing Co",
    avatar: "/professional-asian-man.png",
    rating: 5,
  },
  {
    content:
      "Seamless integration with our existing SCADA systems. The cybersecurity features give us peace of mind when connecting to cloud platforms.",
    author: "Lisa Anderson",
    role: "Chief Technology Officer",
    company: "Industrial Automation Ltd",
    avatar: "/professional-woman-cto.png",
    rating: 5,
  },
  {
    content:
      "Outstanding support and training. The team helped us achieve full deployment across three facilities in record time with minimal disruption.",
    author: "James Wilson",
    role: "Operations Director",
    company: "Global Manufacturing Inc",
    avatar: "/professional-man-director.jpg",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll(".testimonial-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-24 sm:py-32 bg-[#1a1a2e] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#FF6B35]/20 to-[#00CED1]/20 blur-3xl top-20 left-20 animate-pulse" />
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#00CED1]/30 to-[#FF6B35]/10 blur-2xl bottom-20 right-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute w-32 h-32 bg-[#FF6B35]/20 rotate-45 animate-spin top-1/2 left-1/4"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute w-24 h-24 border-2 border-[#00CED1]/30 rounded-full animate-ping bottom-1/3 right-1/3"
          style={{ animationDuration: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6B35]/10 backdrop-blur-md text-[#FF6B35] font-medium text-sm border border-[#FF6B35]/20 shadow-lg shadow-[#FF6B35]/10">
            <Star className="w-4 h-4" />
            Trusted Worldwide
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-white via-[#00CED1] to-white bg-clip-text text-transparent">
              Industry Leaders Choose Us
            </span>
          </h2>
          <p className="text-xl text-white/70 text-pretty max-w-4xl mx-auto leading-relaxed">
            See how companies across industries are transforming their operations with our cutting-edge industrial
            integration solutions and achieving remarkable results.
          </p>
        </div>

        <div className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-12 h-12 text-[#FF6B35] opacity-50" />
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[#FF6B35] fill-current" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-white text-xl leading-relaxed mb-8 font-light">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16 ring-2 ring-[#00CED1]/30 ring-offset-2 ring-offset-[#1a1a2e]">
                      <AvatarImage
                        src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].author}
                      />
                      <AvatarFallback className="bg-[#FF6B35]/20 text-[#FF6B35] font-semibold text-lg">
                        {testimonials[currentTestimonial].author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-white text-lg">{testimonials[currentTestimonial].author}</div>
                      <div className="text-sm text-white/70">{testimonials[currentTestimonial].role}</div>
                      <div className="text-xs text-[#00CED1] font-semibold mt-1">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? "bg-[#FF6B35] shadow-lg shadow-[#FF6B35]/50"
                            : "bg-white/30 hover:bg-[#00CED1]/50"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevTestimonial}
                      className="p-3 rounded-lg bg-white/10 backdrop-blur-md hover:bg-[#00CED1]/20 transition-all duration-300 border border-white/20"
                    >
                      <ChevronLeft className="h-4 w-4 text-white" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-3 rounded-lg bg-white/10 backdrop-blur-md hover:bg-[#FF6B35]/20 transition-all duration-300 border border-white/20"
                    >
                      <ChevronRight className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-[#FF6B35]/20 to-[#00CED1]/20 rounded-2xl backdrop-blur-md border border-white/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-[#FF6B35]/30 rounded-full flex items-center justify-center mx-auto animate-pulse">
                      <Quote className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-white/70 text-sm font-medium">What People Say</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`testimonial-card group border-0 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-[#FF6B35]/20 transition-all duration-500 border border-white/10 ${
                visibleCards.includes(index) ? "animate-robok-slide-up" : "opacity-0"
              }`}
              data-index={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 space-y-6 relative">
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#FF6B35]/20 backdrop-blur-md rounded-full flex items-center justify-center border border-[#FF6B35]/30">
                  <Quote className="w-5 h-5 text-[#FF6B35]" />
                </div>

                <div className="flex space-x-1 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-[#FF6B35] fill-current"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                <blockquote className="text-white/90 leading-relaxed text-center text-lg font-light">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex flex-col items-center space-y-3 pt-6 border-t border-white/20">
                  <Avatar className="w-16 h-16 ring-2 ring-[#00CED1]/30 ring-offset-2 ring-offset-[#1a1a2e]">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback className="bg-[#FF6B35]/20 text-[#FF6B35] font-semibold text-lg">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <div className="font-bold text-white text-lg">{testimonial.author}</div>
                    <div className="text-sm text-white/70 font-medium">{testimonial.role}</div>
                    <div className="text-xs text-[#00CED1] font-semibold mt-1">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-[#FF6B35]/10 to-[#00CED1]/10 backdrop-blur-md border border-white/10 shadow-xl">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Operations?</h3>
              <p className="text-white/70">
                Join these industry leaders and experience the power of seamless integration.
              </p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/80 text-white rounded-xl font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B35]/30 transition-all duration-300 whitespace-nowrap">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
