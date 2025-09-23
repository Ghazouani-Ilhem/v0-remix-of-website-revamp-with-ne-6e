"use client"

import { CheckCircle, Settings, Zap } from "lucide-react"

const processSteps = [
  {
    number: "01",
    title: "Requirements Analysis",
    description:
      "We analyze your industrial infrastructure and define integration requirements. Our experts assess your current systems, protocols, and data sources to develop a comprehensive SIOTH® implementation strategy.",
    icon: CheckCircle,
  },
  {
    number: "02",
    title: "SIOTH® Platform Deployment",
    description:
      "Deploy the SIOTH® platform with custom OPC UA servers and industrial gateways. We configure seamless connectivity between your IT and OT systems with full cybersecurity compliance.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Monitoring & Optimization",
    description:
      "Continuous monitoring with real-time dashboards and SCADA systems. Our 24/7 support ensures maximum uptime, performance optimization, and ongoing system enhancements.",
    icon: Zap,
  },
]

export function ProcessSection() {
  return (
    <section
      className="py-24 bg-primary text-white bg-cover relative overflow-hidden"
      style={{ backgroundImage: "url('/industrial-data-analytics-dashboard-with-charts-an.jpg')" }}
    >
      <div className="absolute inset-0 bg-primary/90" />

      <div className="absolute top-10 right-10 opacity-30">
        <div className="w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h4 className="sub-title text-secondary font-semibold text-base mb-4">Implementation Process</h4>
          <h2 className="title text-3xl md:text-4xl font-bold mb-6 split-text-right split-text-in-right">
            Seamless IT-OT integration through proven methodology
          </h2>
        </div>

        <div className="process-style-one-items">
          <div className="grid lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="process-style-one-item fade-up-anim text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                    <step.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-4xl font-bold text-secondary/50 mb-4">{step.number}</h2>
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-white/90 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
