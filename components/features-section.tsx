import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Zap, Shield, Globe, BarChart3, Cog, Database, Wifi, Lock } from "lucide-react"

const features = [
  {
    icon: Server,
    title: "SIOTH® Platform",
    description:
      "Scalable and modular IoT platform for IT-OT integration, data exchange and transformation with enterprise reliability.",
  },
  {
    icon: Zap,
    title: "OPC UA Universal Server",
    description:
      "Build OPC UA servers in minutes using SIOTH®. Rapid deployment with full OPC UA compliance and certification.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Compliant",
    description:
      "Built-in security features meeting the latest cybersecurity standards with encryption, authentication, and access control.",
  },
  {
    icon: Globe,
    title: "Universal Connectivity",
    description:
      "Connect to 150+ industrial protocols including Modbus, DNP3, IEC 61850, and legacy systems with seamless integration.",
  },
  {
    icon: BarChart3,
    title: "Remote Monitoring & SCADA",
    description:
      "Single-window operations management with real-time dashboards, SCADA systems, and comprehensive analytics.",
  },
  {
    icon: Cog,
    title: "No-Code Configuration",
    description:
      "Intuitive drag-and-drop configuration tools that require no programming expertise to set up complex integrations.",
  },
  {
    icon: Database,
    title: "Data Historian & Cloud",
    description:
      "Comprehensive data management with historian capabilities, cloud synchronization, and edge computing support.",
  },
  {
    icon: Wifi,
    title: "Industrial IoT Ready",
    description:
      "Native IoT connectivity with support for MQTT, REST APIs, Azure IoT, AWS IoT, and major cloud platforms.",
  },
  {
    icon: Lock,
    title: "Military-Grade Security",
    description:
      "C4ISR-based solutions with military-grade security for defense applications and critical infrastructure protection.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 relative overflow-x-hidden robok-blurry-shape-half-right-bottom">
      <div className="absolute inset-0 robok-dot-pattern opacity-10" />
      <div className="robok-geometric-shape robok-geometric-shape-1" />
      <div className="robok-geometric-shape robok-geometric-shape-2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center rounded-full border px-5 py-2 text-sm robok-glass backdrop-blur-sm mb-4">
            <Zap className="w-4 h-4 text-secondary mr-2" />
            <span className="text-primary font-semibold text-xs">Platform Features</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-balance robok-text-shadow">
            SIOTH®-optimized solutions for <span className="robok-gradient-text">industrial transformation</span>
          </h2>
          <p className="text-sm text-muted-foreground text-pretty max-w-3xl mx-auto">
            Our comprehensive SIOTH® platform and OPC product suite provide all the tools needed to connect, integrate,
            and optimize your industrial operations with enterprise-grade reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm robok-card-enhanced hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-3">
                <div
                  className="w-12 h-12 rounded-xl robok-gradient-primary flex items-center justify-center mb-3 shadow-lg animate-robok-up-down"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-sm font-bold robok-text-shadow">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
