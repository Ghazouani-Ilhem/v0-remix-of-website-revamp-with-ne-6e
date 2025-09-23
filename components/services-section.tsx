"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Database, Network, Bot, BarChart3, Users } from "lucide-react"
import Link from "next/link"

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
  return (
    <section className="py-24 bg-background blurry-shape-half-right-bottom overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h4 className="sub-title text-secondary font-semibold text-sm mb-4">Services</h4>
          <h2 className="title text-2xl md:text-3xl font-bold text-foreground mb-6 split-text-right split-text-in-right">
            Industrial automation solutions for the digital transformation era
          </h2>
        </div>

        <div className="service-style-one-items fade-up-anim">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div
              className="service-one-tags relative bg-primary text-white p-10 rounded-3xl overflow-hidden bg-cover bg-center hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: "url('/industrial-automation-server-room-with-blue-lighti.jpg')" }}
            >
              <div className="absolute inset-0 bg-primary/90" />
              <div className="curve-text relative z-10 text-center">
                <div className="w-28 h-28 mx-auto mb-6 relative">
                  <svg className="w-full h-full animate-spin-slow" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <path id="textPath" d="M 56,56 a 42,42 0 1,1 0,1 z" fill="none"></path>
                    <text className="text-[10px] fill-white">
                      <textPath href="#textPath">IT-OT Integration • SIOTH Platform • OPC Solutions • </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Network className="w-10 h-10 text-secondary" />
                  </div>
                </div>
              </div>
            </div>

            {services.map((service, index) => (
              <Card
                key={index}
                className="service-style-one-single group hover:shadow-xl transition-all duration-300 fade-up-anim hover:scale-105"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="icon mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    <Link href="/services">{service.title}</Link>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-xs">{service.description}</p>
                </CardContent>
              </Card>
            ))}

            <div
              className="community-card text-white p-6 rounded-3xl bg-cover bg-center relative overflow-hidden hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: "url('/modern-industrial-iot-factory-with-connected-devic.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-secondary/70" />
              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-4">Industrial Automation Community</h4>
                <p className="text-white/90 mb-6 text-xs">
                  Join thousands of automation engineers and system integrators using Integration Objects solutions
                  worldwide
                </p>
                <div className="info">
                  <div className="multi-users flex -space-x-2 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30" />
                    ))}
                    <div className="w-8 h-8 bg-white/10 rounded-full border-2 border-white/30 flex items-center justify-center">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h5 className="text-sm font-semibold">500+ Global Clients</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
