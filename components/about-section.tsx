"use client"
import { Users, Award, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("about-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Global Clients",
      description: "Including Fortune 500 companies",
    },
    {
      icon: Award,
      number: "20+",
      label: "Years Experience",
      description: "Leading IT-OT integration solutions",
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries",
      description: "Worldwide deployment presence",
    },
    {
      icon: Zap,
      number: "99.9%",
      label: "Uptime",
      description: "Enterprise-grade reliability",
    },
  ]

  return (
    <section id="about-section" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="robok-shape-1 top-10 left-20" />
        <div className="robok-shape-2 bottom-10 right-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div
              className={`robok-card relative overflow-hidden bg-cover bg-center ${isVisible ? "animate-robok-fade-up" : "opacity-0"}`}
              style={{ backgroundImage: "url('/modern-industrial-control-room-with-multiple-monit.jpg')" }}
            >
              <div className="absolute inset-0 bg-muted/95 backdrop-blur-sm" />
              <div className="relative z-10">
                <h2 className="fixed-text text-8xl font-bold text-primary/5 absolute -top-8 -left-8 select-none animate-robok-float-gentle">
                  Robok
                </h2>
                <h4 className="sub-title text-secondary font-semibold text-base mb-4 animate-robok-shimmer">
                  About Integration Objects
                </h4>
                <h2 className="robok-heading text-2xl md:text-3xl font-bold mb-6 animate-robok-text-reveal">
                  Unlock limitless possibilities with our intelligent solutions
                </h2>
                <p
                  className="text-muted-foreground text-sm leading-relaxed mb-8 animate-robok-slide-right"
                  style={{ animationDelay: "0.3s" }}
                >
                  This focus on leveraging advanced technology—like AI, automation, and data-driven insights—to help
                  businesses or individuals overcome challenges and achieve unprecedented growth. AI algorithms analyze
                  your business needs and automatically tailor responses based on user behavior to help businesses and
                  individuals overcome challenges and achieve Real fond attachment.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div
              className={`robok-gradient-card text-white relative overflow-hidden ${isVisible ? "animate-robok-scale-in" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute top-4 right-4 w-20 h-20 opacity-20 animate-robok-float-gentle">
                <Zap className="w-full h-full" />
              </div>
              <div className="relative z-10">
                <div className="icon-wrapper mb-6 bg-white/20 backdrop-blur-sm border border-white/30">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 robok-shimmer-text">API integration to your business</h3>
                <p className="text-white/90 mb-6 leading-relaxed text-sm">
                  Application programming interface integration has become essential for modern machines businesses.
                </p>
                <div className="text-end">
                  <Button
                    variant="outline"
                    className="robok-btn-secondary border-white/30 text-white hover:bg-white/10 bg-transparent text-sm"
                    asChild
                  >
                    <Link href="/about">
                      Explore More
                      <Award className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div
              className={`robok-card bg-secondary/10 ${isVisible ? "animate-robok-bounce-in" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <h4 className="text-lg font-bold text-foreground mb-4 robok-heading">Seamless Integration</h4>
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center animate-robok-pulse-glow">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <div className="fun-fact text-right">
                  <div className="text-3xl font-bold text-primary robok-shimmer-text animate-robok-bounce-in">28K</div>
                  <div className="text-xs text-muted-foreground">Connected Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`robok-service-card text-center ${isVisible ? "animate-robok-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 5) * 0.1}s` }}
            >
              <div className="icon-wrapper mx-auto">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2 robok-shimmer-text">{stat.number}</div>
              <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
