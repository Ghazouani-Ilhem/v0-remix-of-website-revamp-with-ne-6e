import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Video, Download, BookOpen } from "lucide-react"
import Link from "next/link"

export function ResourcesSection() {
  const resources = [
    {
      icon: FileText,
      title: "Technical Documentation",
      description: "Comprehensive guides for OPC UA implementation and SIOTH platform usage",
      items: ["API Reference", "Integration Guides", "Best Practices"],
      link: "/docs",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for getting started with our solutions",
      items: ["Quick Start Videos", "Advanced Tutorials", "Webinar Recordings"],
      link: "/videos",
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Access trial versions, SDKs, and development tools",
      items: ["SIOTH Trial", "OPC UA SDK", "Sample Projects"],
      link: "/downloads",
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Frequently asked questions and troubleshooting guides",
      items: ["FAQ", "Troubleshooting", "Community Forum"],
      link: "/knowledge-base",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Resources & Support</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to succeed with Integration Objects solutions - from documentation to video tutorials
            and community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">{resource.description}</p>
                <ul className="space-y-2 mb-6">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href={resource.link}>Explore {resource.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Need Personalized Support?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our technical experts are ready to help you implement the perfect OPC UA solution for your specific
                industrial automation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/ask-question">Ask a Question</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
