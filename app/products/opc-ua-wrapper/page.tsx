"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  CheckCircle,
  Download,
  Play,
  Search,
  Filter,
  Shield,
  Zap,
  Settings,
  Database,
  Network,
  Clock,
  Users,
  Award,
  FileText,
  Video,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Star,
  Globe,
  Lock,
  Cpu,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    id: "migration",
    title: "Seamless Migration",
    description: "Migrate from OPC Classic to OPC UA without disrupting operations",
    icon: ArrowRight,
    category: "Migration",
    tags: ["OPC Classic", "OPC UA", "Zero Downtime", "Legacy Systems"],
  },
  {
    id: "security",
    title: "Enterprise Security",
    description: "Built-in security features with authentication and encryption",
    icon: Shield,
    category: "Security",
    tags: ["Authentication", "Encryption", "Certificates", "Secure Communication"],
  },
  {
    id: "performance",
    title: "High Performance",
    description: "Optimized for industrial environments with minimal latency",
    icon: Zap,
    category: "Performance",
    tags: ["Low Latency", "High Throughput", "Scalable", "Real-time"],
  },
  {
    id: "configuration",
    title: "Easy Configuration",
    description: "Intuitive configuration tools and drag-and-drop interface",
    icon: Settings,
    category: "Usability",
    tags: ["GUI", "Configuration", "User-friendly", "Drag & Drop"],
  },
  {
    id: "connectivity",
    title: "Universal Connectivity",
    description: "Connect to any OPC Classic server and expose as OPC UA",
    icon: Network,
    category: "Connectivity",
    tags: ["Multi-protocol", "Universal", "Interoperability", "Standards"],
  },
  {
    id: "monitoring",
    title: "Real-time Monitoring",
    description: "Monitor data flow and system health in real-time",
    icon: BarChart3,
    category: "Monitoring",
    tags: ["Real-time", "Diagnostics", "Health Monitoring", "Analytics"],
  },
]

const faqs = [
  {
    id: "what-is-wrapper",
    question: "What is OPC UA Wrapper?",
    answer:
      "OPC UA Wrapper is a software solution that acts as a bridge between OPC Classic servers and OPC UA clients. It allows you to expose existing OPC Classic data through modern OPC UA interfaces without modifying your existing infrastructure.",
    category: "General",
  },
  {
    id: "migration-time",
    question: "How long does migration take?",
    answer:
      "Migration time varies depending on the complexity of your system, but typically ranges from a few hours to a few days. Our wrapper enables gradual migration, allowing you to migrate systems incrementally without downtime.",
    category: "Migration",
  },
  {
    id: "security-features",
    question: "What security features are included?",
    answer:
      "The wrapper includes comprehensive security features such as user authentication, message encryption, certificate management, and secure communication channels compliant with OPC UA security standards.",
    category: "Security",
  },
  {
    id: "performance-impact",
    question: "Will there be performance impact?",
    answer:
      "The wrapper is optimized for minimal performance impact. In most cases, the latency increase is negligible (typically <10ms), and the system can handle thousands of data points with high throughput.",
    category: "Performance",
  },
  {
    id: "supported-systems",
    question: "Which OPC Classic servers are supported?",
    answer:
      "The wrapper supports all standard OPC Classic servers including OPC DA, OPC HDA, and OPC AE servers from any vendor. It's compatible with Windows-based OPC Classic implementations.",
    category: "Compatibility",
  },
  {
    id: "licensing",
    question: "How does licensing work?",
    answer:
      "We offer flexible licensing options including per-server, per-client, and enterprise licenses. Contact our sales team for a customized licensing solution that fits your needs.",
    category: "Licensing",
  },
]

const resources = [
  {
    id: "datasheet",
    title: "Product Datasheet",
    description: "Comprehensive technical specifications and features overview",
    type: "PDF",
    icon: FileText,
    downloadUrl: "/resources/opc-ua-wrapper-datasheet.pdf",
  },
  {
    id: "demo-video",
    title: "Product Demo Video",
    description: "See OPC UA Wrapper in action with real-world examples",
    type: "Video",
    icon: Video,
    downloadUrl: "/resources/opc-ua-wrapper-demo.mp4",
  },
  {
    id: "user-guide",
    title: "User Guide",
    description: "Step-by-step installation and configuration guide",
    type: "PDF",
    icon: BookOpen,
    downloadUrl: "/resources/opc-ua-wrapper-guide.pdf",
  },
  {
    id: "migration-checklist",
    title: "Migration Checklist",
    description: "Complete checklist for planning your OPC migration project",
    type: "PDF",
    icon: CheckCircle,
    downloadUrl: "/resources/migration-checklist.pdf",
  },
]

export default function OPCUAWrapperPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFaqCategory, setSelectedFaqCategory] = useState("All")
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const categories = ["All", ...Array.from(new Set(features.map((f) => f.category)))]
  const faqCategories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))]

  const filteredFeatures = features.filter((feature) => {
    const matchesCategory = selectedCategory === "All" || feature.category === selectedCategory
    const matchesSearch =
      feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const filteredFaqs = faqs.filter((faq) => {
    return selectedFaqCategory === "All" || faq.category === selectedFaqCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  OPC Migration Solution
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  OPC UA <span className="text-primary">Wrapper</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Bridge the gap between OPC Classic and OPC UA with our seamless migration solution. Enable modern
                  connectivity while preserving your existing infrastructure investments.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="elegant-btn-primary px-8 py-4 text-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Free Trial
                </Button>
                <Button variant="outline" size="lg" className="elegant-btn-secondary px-8 py-4 text-lg bg-transparent">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">&lt;10ms</div>
                  <div className="text-sm text-muted-foreground">Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Deployments</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 border border-border/50">
                <img
                  src="/opc-ua-wrapper-architecture-diagram-showing-connec.jpg"
                  alt="OPC UA Wrapper Architecture"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Live Demo
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Why Choose OPC UA Wrapper?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The most trusted solution for OPC Classic to OPC UA migration, deployed in over 1000 industrial facilities
              worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="elegant-card text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Zero Downtime</h3>
                <p className="text-muted-foreground">Migrate without interrupting your production systems</p>
              </CardContent>
            </Card>

            <Card className="elegant-card text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-muted-foreground">24/7 technical support from OPC specialists</p>
              </CardContent>
            </Card>

            <Card className="elegant-card text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Industry Proven</h3>
                <p className="text-muted-foreground">Trusted by Fortune 500 companies globally</p>
              </CardContent>
            </Card>

            <Card className="elegant-card text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Universal</h3>
                <p className="text-muted-foreground">Works with any OPC Classic server</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section with Tags and Filters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive capabilities designed for enterprise-grade OPC migration and integration.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {category}
                  </Button>
                ))}
              </div>

              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feature) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={feature.id}
                  className="elegant-card group hover:elegant-shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Architecture Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding how OPC UA Wrapper seamlessly bridges OPC Classic and OPC UA technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Database className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">OPC Classic Integration</h3>
                    <p className="text-muted-foreground">
                      Connects to existing OPC DA, HDA, and AE servers without modification. Maintains full
                      compatibility with legacy systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Cpu className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Protocol Translation</h3>
                    <p className="text-muted-foreground">
                      Intelligent protocol translation engine converts OPC Classic data to OPC UA format with full
                      semantic preservation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lock className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure OPC UA Server</h3>
                    <p className="text-muted-foreground">
                      Exposes data through secure OPC UA interfaces with authentication, encryption, and certificate
                      management.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="elegant-btn-primary">
                <FileText className="w-4 h-4 mr-2" />
                Download Architecture Guide
              </Button>
            </div>

            <div className="relative">
              <img
                src="/detailed-opc-ua-wrapper-architecture-diagram-showi.jpg"
                alt="OPC UA Wrapper Detailed Architecture"
                className="w-full h-auto rounded-xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">See It In Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our comprehensive demo showing real-world OPC migration scenarios and best practices.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 border border-border/50">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src="/opc-ua-wrapper-demo-video-thumbnail-with-play-butt.jpg"
                  alt="Demo Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-1">Complete Migration Walkthrough</h3>
                    <p className="text-white/80 text-sm">15 minutes • Step-by-step guide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="elegant-card text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Configuration</h3>
                  <p className="text-sm text-muted-foreground">Easy setup process</p>
                </CardContent>
              </Card>

              <Card className="elegant-card text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Connection</h3>
                  <p className="text-sm text-muted-foreground">Live data mapping</p>
                </CardContent>
              </Card>

              <Card className="elegant-card text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Validation</h3>
                  <p className="text-sm text-muted-foreground">Testing & verification</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Resources & Downloads</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to get started with OPC UA Wrapper implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => {
              const IconComponent = resource.icon
              return (
                <Card
                  key={resource.id}
                  className="elegant-card group hover:elegant-shadow-lg transition-all duration-300"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="outline" className="mb-4">
                      {resource.type}
                    </Badge>
                    <Button asChild className="w-full elegant-btn-secondary">
                      <Link href={resource.downloadUrl}>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="elegant-btn-primary">
              <BookOpen className="w-5 h-5 mr-2" />
              View All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section with Sidebar Filter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about OPC UA Wrapper implementation and migration.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filter */}
            <div className="lg:col-span-1">
              <Card className="elegant-card sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Filter by Category</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {faqCategories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedFaqCategory === category ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedFaqCategory(category)}
                      className="w-full justify-start"
                    >
                      {category}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3 space-y-4">
              {filteredFaqs.map((faq) => (
                <Card key={faq.id} className="elegant-card">
                  <CardHeader
                    className="cursor-pointer hover:bg-muted/30 transition-colors"
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="text-xs">
                          {faq.category}
                        </Badge>
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                      </div>
                      {openFaq === faq.id ? (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardHeader>
                  {openFaq === faq.id && (
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions? Our experts are here to help.</p>
            <Button size="lg" className="elegant-btn-primary">
              Contact Technical Support
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Start Your OPC Migration?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of companies who have successfully migrated to OPC UA with our proven wrapper solution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="elegant-btn-primary px-8 py-4 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="elegant-btn-secondary px-8 py-4 text-lg bg-transparent">
                Schedule Consultation
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 border-t border-border/50">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm text-muted-foreground">4.9/5 Customer Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-muted-foreground">30-Day Money Back</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">24/7 Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
