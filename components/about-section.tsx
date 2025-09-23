import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
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
    <section className="py-24 bg-muted/30 blurry-shape-top-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div
              className="about-style-one-info bg-muted/50 p-12 rounded-3xl fade-up-anim relative overflow-hidden"
              style={{ backgroundImage: "url('/modern-industrial-control-room-with-multiple-monit.jpg')" }}
            >
              <div className="absolute inset-0 bg-muted/90" />
              <div className="relative z-10">
                <h2 className="fixed-text text-6xl font-bold text-primary/10 absolute -top-4 -left-4 select-none">
                  SIOTH
                </h2>
                <h4 className="sub-title text-secondary font-semibold text-base mb-4">About Integration Objects</h4>
                <h2 className="title text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Leading IT-OT integration with SIOTH® platform and OPC solutions
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Integration Objects specializes in industrial automation and IT-OT integration solutions. Our SIOTH®
                  platform enables seamless connectivity between operational technology and information systems, while
                  our comprehensive OPC product suite ensures secure, reliable data exchange. Trusted by industry
                  leaders like Shell, ExxonMobil, Siemens, and Rio Tinto across 50+ countries.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="card-style-one-item fade-up-anim bg-gradient-to-br from-primary to-primary/80 text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
                <Zap className="w-full h-full" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">SIOTH® Platform Integration</h3>
                <p className="text-white/90 mb-6 leading-relaxed text-sm">
                  Our modular IoT platform transforms how industrial businesses connect legacy systems with modern
                  infrastructure, ensuring cybersecurity compliance and operational excellence.
                </p>
                <div className="text-end">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent text-sm"
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

            <div className="card-style-one-two fade-up-anim bg-secondary/10 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-foreground mb-4">Proven Track Record</h4>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div className="fun-fact">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-xs text-muted-foreground">Connected Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center fade-up-anim hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
