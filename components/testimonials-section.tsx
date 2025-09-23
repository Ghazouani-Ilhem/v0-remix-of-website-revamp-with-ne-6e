"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
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

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden robok-blurry-shape">
      <div className="robok-geometric-shape robok-geometric-shape-1" />
      <div className="robok-geometric-shape robok-geometric-shape-2" />
      <div className="robok-geometric-shape robok-geometric-shape-3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm animate-robok-pulse">
            <Star className="w-4 h-4" />
            Trusted Worldwide
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance robok-text-gradient leading-tight">
            Industry Leaders Choose Us
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed">
            See how companies across industries are transforming their operations with our cutting-edge industrial
            integration solutions and achieving remarkable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`testimonial-card robok-card-enhanced group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                visibleCards.includes(index) ? "animate-robok-slide-up" : "opacity-0"
              }`}
              data-index={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 space-y-6 relative">
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-robok-float">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                <div className="flex space-x-1 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-secondary fill-current animate-robok-glow"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                <blockquote className="text-muted-foreground leading-relaxed text-center text-lg font-medium robok-text-shadow">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex flex-col items-center space-y-3 pt-6 border-t border-border/50">
                  <Avatar className="w-16 h-16 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <div className="font-bold text-foreground text-lg robok-text-gradient-alt">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                    <div className="text-xs text-primary font-semibold mt-1">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Transform Your Operations?</h3>
              <p className="text-muted-foreground">
                Join these industry leaders and experience the power of seamless integration.
              </p>
            </div>
            <button className="robok-btn-style-one px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
