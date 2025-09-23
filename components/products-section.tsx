import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Star } from "lucide-react"
import Link from "next/link"

const products = [
  {
    name: "SIOTH Platform",
    description: "Complete industrial integration platform with drag-and-drop configuration.",
    features: ["Visual Configuration", "Multi-Protocol Support", "Cloud Integration", "Real-time Monitoring"],
    badge: "Most Popular",
    cta: "Download Free Trial",
    href: "/download/sioth",
  },
  {
    name: "OPC Expert",
    description: "Professional OPC client and server toolkit for developers and system integrators.",
    features: ["OPC UA & Classic", "SDK Available", "Custom Development", "Technical Support"],
    badge: "Developer Favorite",
    cta: "Learn More",
    href: "/products/opc-expert",
  },
  {
    name: "IoT Gateway",
    description: "Bridge industrial systems to cloud platforms with secure, reliable connectivity.",
    features: ["Edge Computing", "Protocol Translation", "Cloud Connectors", "Edge Analytics"],
    badge: "New",
    cta: "Get Started",
    href: "/products/iot-gateway",
  },
]

export function ProductsSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Powerful products for every industrial need</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            From rapid prototyping to enterprise deployment, our product suite covers every aspect of industrial
            connectivity and integration.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              {product.badge && (
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-primary fill-current" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full">
                  <Link href={product.href}>
                    {product.cta}
                    {product.cta.includes("Download") ? (
                      <Download className="ml-2 h-4 w-4" />
                    ) : (
                      <ArrowRight className="ml-2 h-4 w-4" />
                    )}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
