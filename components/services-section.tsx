"use client"
import { Cpu, Database, Network, Bot, BarChart3, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const services = [
  {
    icon: Cpu,
    title: "SIOTH® IT-OT Platform",
    description:
      "Scalable and modular IoT platform for seamless IT-OT integration, data exchange and transformation with enterprise-grade security.",
  },
  {
    icon: Database,
    title: "OPC Products Suite",
    description:
      "Comprehensive OPC UA servers, clients, and gateways ensuring secure and reliable industrial data exchange with full compliance.",
  },
  {
    icon: Network,
    title: "Remote Monitoring & SCADA",
    description:
      "Single-window operations management with real-time dashboards, SCADA systems, and comprehensive monitoring solutions.",
  },
  {
    icon: Bot,
    title: "Military Surveillance (C4ISR)",
    description:
      "Command, Control, Communications, Computers, Intelligence, Surveillance & Reconnaissance solutions for defense applications.",
  },
  {
    icon: BarChart3,
    title: "Industrial Analytics",
    description:
      "Advanced data analytics and visualization tools for operational intelligence, predictive maintenance, and process optimization.",
  },
]

export function ServicesSection() {
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

    const section = document.getElementById("services-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services-section" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="robok-shape-1 top-20 right-10" />
        <div className="robok-shape-2 bottom-20 left-10" />
        <div className="robok-shape-3 top-1/2 right-1/4" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-robok-fade-up" : "opacity-0"}`}>
          <h4 className="sub-title text-secondary font-semibold text-sm mb-4 animate-robok-shimmer">Services</h4>
          <h2
            className="robok-heading text-2xl md:text-3xl font-bold mb-6 animate-robok-text-reveal"
            style={{ animationDelay: "0.2s" }}
          >
            AI-optimized industrial automation solutions for innovative futures
          </h2>
        </div>

        <div className="service-style-one-items">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div
              className={`robok-gradient-card relative text-white overflow-hidden bg-cover bg-center group ${isVisible ? "animate-robok-scale-in" : "opacity-0"}`}
              style={{
                backgroundImage: "url('/industrial-automation-server-room-with-blue-lighti.jpg')",
                animationDelay: "0.1s",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/80" />
              <div className="curve-text relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <svg className="w-full h-full animate-io-spin-slow" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <path id="textPath" d="M 64,64 a 48,48 0 1,1 0,1 z" fill="none"></path>
                    <text className="text-[10px] fill-white animate-robok-shimmer">
                      <textPath href="#textPath">Automation & predictive maintenance • SIOTH Platform • </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="robok-service-card bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl">
                      <Network className="w-8 h-8 text-white animate-robok-pulse-glow" />
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2 robok-shimmer-text">IT-OT Integration Excellence</h4>
                <p className="text-white/90 text-sm">Seamless connectivity solutions</p>
              </div>
            </div>

            {services.map((service, index) => (
              <div
                key={index}
                className={`robok-service-card group ${isVisible ? "animate-robok-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="icon-wrapper mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  <Link href="/services">{service.title}</Link>
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}

            <div
              className={`robok-gradient-card text-white relative overflow-hidden bg-cover bg-center ${isVisible ? "animate-robok-rotate-in" : "opacity-0"}`}
              style={{
                backgroundImage: "url('/modern-industrial-iot-factory-with-connected-devic.jpg')",
                animationDelay: "0.7s",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-primary/70" />
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 robok-shimmer-text">AI Community</h4>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">
                  Dive into the automation scene and unleash your industrial potential!
                </p>
                <div className="info">
                  <div className="multi-users flex -space-x-2 mb-4 animate-robok-float-gentle">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-white/20 rounded-full border-2 border-white/30 backdrop-blur-sm animate-robok-bounce-in"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                    <div className="w-10 h-10 bg-white/10 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm">
                      <Users className="w-4 h-4 text-white animate-robok-pulse-glow" />
                    </div>
                  </div>
                  <h5 className="text-lg font-semibold robok-heading">Over 500+ Global Clients</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
