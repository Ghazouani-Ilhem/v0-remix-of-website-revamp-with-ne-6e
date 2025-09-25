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
    <section id="services-section" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="robok-shape-enhanced-1 top-20 right-10 opacity-60" />
        <div className="robok-shape-enhanced-2 bottom-20 left-10 opacity-40" />
        <div className="robok-shape-enhanced-3 top-1/2 right-1/4 opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#352561]/2 via-transparent to-[#4a3575]/2 animate-robok-data-stream" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className={`text-center mb-20 ${isVisible ? "animate-robok-section-reveal" : "opacity-0"}`}>
          <h4 className="sub-title text-[#352561] font-semibold text-sm mb-6 animate-robok-shimmer">Services</h4>
          <h2
            className="robok-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8 animate-robok-text-reveal"
            style={{ animationDelay: "0.2s" }}
          >
            AI-optimized industrial automation solutions for innovative futures
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto animate-robok-stagger-up"
            style={{ animationDelay: "0.4s" }}
          >
            Transforming industrial operations with cutting-edge technology and seamless integration
          </p>
        </div>

        <div className="service-style-one-items">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            <div
              className={`robok-gradient-card relative text-white overflow-hidden bg-cover bg-center group ${isVisible ? "animate-robok-scale-in" : "opacity-0"}`}
              style={{
                backgroundImage: "url('/industrial-automation-server-room-with-blue-lighti.jpg')",
                animationDelay: "0.1s",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#352561]/95 to-[#4a3575]/85" />
              <div className="curve-text relative z-10 text-center">
                <div className="w-36 h-36 mx-auto mb-8 relative">
                  <svg className="w-full h-full animate-io-spin-slow" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <path id="textPath" d="M 72,72 a 56,56 0 1,1 0,1 z" fill="none"></path>
                    <text className="text-[11px] fill-white animate-robok-shimmer">
                      <textPath href="#textPath">Automation & predictive maintenance • SIOTH Platform • </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="robok-service-card bg-white/15 backdrop-blur-sm border border-white/25 p-5 rounded-3xl animate-robok-glow-expand">
                      <Network className="w-10 h-10 text-white animate-robok-pulse-glow" />
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 robok-shimmer-text">IT-OT Integration Excellence</h4>
                <p className="text-white/90 text-sm leading-relaxed">Seamless connectivity solutions for the future</p>
              </div>
            </div>

            {services.map((service, index) => (
              <div
                key={index}
                className={`robok-card-enhanced group ${isVisible ? "animate-robok-stagger-up" : "opacity-0"}`}
                style={{ animationDelay: `${(index + 2) * 0.15}s` }}
              >
                <div className="icon-wrapper mx-auto mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#352561] to-[#4a3575] rounded-2xl flex items-center justify-center group-hover:animate-robok-magnetic-hover transition-all duration-300">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-5 group-hover:text-[#352561] transition-colors duration-300">
                  <Link href="/services">{service.title}</Link>
                </h4>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}

            <div
              className={`robok-gradient-card text-white relative overflow-hidden bg-cover bg-center ${isVisible ? "animate-robok-rotate-in" : "opacity-0"}`}
              style={{
                backgroundImage: "url('/modern-industrial-iot-factory-with-connected-devic.jpg')",
                animationDelay: "0.8s",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a3575]/90 to-[#352561]/80" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-6 robok-shimmer-text">AI Community</h4>
                <p className="text-white/90 mb-8 leading-relaxed">
                  Dive into the automation scene and unleash your industrial potential with our global network!
                </p>
                <div className="info">
                  <div className="multi-users flex -space-x-3 mb-6 animate-robok-float-gentle">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 bg-white/25 rounded-full border-3 border-white/40 backdrop-blur-sm animate-robok-bounce-in"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                    <div className="w-12 h-12 bg-white/15 rounded-full border-3 border-white/40 flex items-center justify-center backdrop-blur-sm">
                      <Users className="w-5 h-5 text-white animate-robok-pulse-glow" />
                    </div>
                  </div>
                  <h5 className="text-xl font-semibold robok-heading">Over 500+ Global Clients</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
