"use client"

import { useState } from "react"
import { Header } from "@/components/header"
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
  BarChart3,
  Gauge,
  TrendingUp,
  Activity,
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
      {/* Header Component for Navigation */}
      <Header />

      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Enhanced gradient background with better color transitions */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        </div>

        {/* Improved animated background elements with better positioning */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/8 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/8 rounded-full blur-lg animate-bounce"></div>
          <div
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/8 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/6 rounded-full blur-md animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                {/* Enhanced badge with better styling */}
                <Badge
                  variant="secondary"
                  className="px-6 py-3 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-ping"></div>
                  Industry-Leading OPC Migration Solution
                </Badge>

                {/* Improved title with better gradient and spacing */}
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                    <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                      OPC UA
                    </span>
                    <br />
                    <span className="text-primary">Wrapper</span>
                  </h1>

                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>

                {/* Enhanced subtitle with better spacing */}
                <div className="space-y-6">
                  <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                    Bridge the gap between <span className="text-primary font-semibold">OPC Classic</span> and{" "}
                    <span className="text-secondary font-semibold">OPC UA</span> with our seamless migration solution.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    Enable modern connectivity while preserving your existing infrastructure investments with zero
                    downtime.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="elegant-btn-primary px-10 py-5 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all"
                >
                  <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  Download Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="elegant-btn-secondary px-10 py-5 text-lg font-semibold bg-transparent group border-2 hover:bg-primary/5"
                >
                  <Play className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/30">
                <div className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-500/20 transition-colors">
                      <Activity className="w-6 h-6 text-green-500 group-hover:animate-pulse" />
                    </div>
                    <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                      99.9%
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Uptime Guarantee</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-500/20 transition-colors">
                      <Gauge className="w-6 h-6 text-blue-500 group-hover:animate-spin" />
                    </div>
                    <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                      &lt;10ms
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Ultra-Low Latency</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-purple-500/20 transition-colors">
                      <TrendingUp className="w-6 h-6 text-purple-500 group-hover:animate-bounce" />
                    </div>
                    <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                      1000+
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Global Deployments</div>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="relative bg-gradient-to-br from-muted/20 to-muted/5 rounded-3xl p-10 border border-border/30 overflow-hidden shadow-2xl">
                {/* Improved animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-6 left-6 w-8 h-8 border-2 border-primary rounded-full animate-ping"></div>
                  <div
                    className="absolute top-16 right-10 w-6 h-6 border-2 border-secondary rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute bottom-12 left-16 w-10 h-10 border-2 border-accent rounded-full animate-bounce"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-6 w-4 h-4 border-2 border-primary rounded-full animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                </div>

                <img
                  src="/images/opc-ua-wrapper-architecture.png"
                  alt="OPC UA Wrapper Architecture"
                  className="w-full h-auto rounded-xl relative z-10 hover:scale-105 transition-transform duration-700 shadow-lg"
                />

                {/* Enhanced floating badges with better positioning */}
                <div className="absolute top-6 right-6 z-20">
                  <Badge className="bg-green-500/20 text-green-600 border-green-500/30 animate-pulse px-4 py-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
                    Live Architecture
                  </Badge>
                </div>

                <div className="absolute -bottom-6 -left-6 z-20">
                  <div
                    className="bg-background/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl animate-bounce"
                    style={{ animationDelay: "2s" }}
                  >
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold">Enterprise Security</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 z-20">
                  <div
                    className="bg-background/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl animate-bounce"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-semibold">High Performance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Why Choose OPC UA Wrapper?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The most trusted solution for OPC Classic to OPC UA migration, deployed in over 1000 industrial
                facilities worldwide with proven reliability and performance.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="elegant-card text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="pt-10 pb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Zero Downtime</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Migrate without interrupting your production systems or affecting operations
                </p>
              </CardContent>
            </Card>

            <Card className="elegant-card text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="pt-10 pb-8">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors group-hover:scale-110 transform duration-300">
                  <Users className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  24/7 technical support from certified OPC specialists and engineers
                </p>
              </CardContent>
            </Card>

            <Card className="elegant-card text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="pt-10 pb-8">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors group-hover:scale-110 transform duration-300">
                  <Award className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Industry Proven</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trusted by Fortune 500 companies across manufacturing and process industries
                </p>
              </CardContent>
            </Card>

            <Card className="elegant-card text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="pt-10 pb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                  <Globe className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Universal Compatibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Works seamlessly with any OPC Classic server from any vendor
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Powerful Features</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Comprehensive capabilities designed for enterprise-grade OPC migration and seamless integration.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/30">
              <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="rounded-full px-6 py-2 font-medium hover:scale-105 transition-transform"
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      {category}
                    </Button>
                  ))}
                </div>

                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search features and capabilities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 py-3 rounded-full border-2 focus:border-primary/50"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredFeatures.map((feature) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={feature.id}
                  className="elegant-card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs px-3 py-1">
                        {feature.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs px-3 py-1 hover:bg-primary/10 transition-colors"
                        >
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
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bidirectional bridge between OPC Classic and OPC UA technologies.
            </p>
          </div>

          <div className="space-y-12">
            <div className="relative">
              <div className="bg-gradient-to-br from-background to-muted/50 rounded-2xl p-8 border border-border/50">
                <div className="text-center mb-8">
                  <img
                    src="/images/opc-ua-wrapper-architecture.png"
                    alt="OPC UA Wrapper Architecture Diagram"
                    className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground mb-4">Communication Flow</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-1 text-primary">OPC UA to OPC Proxy</h4>
                          <p className="text-xs text-muted-foreground">
                            Enables OPC Classic clients to connect to OPC UA servers.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="w-3 h-3 text-secondary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-1 text-secondary">OPC to OPC UA Wrapper</h4>
                          <p className="text-xs text-muted-foreground">
                            Allows OPC UA clients to connect to OPC Classic servers.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Network className="w-3 h-3 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-1 text-accent">HTTP/UA TCP Protocol</h4>
                          <p className="text-xs text-muted-foreground">
                            Secure communication with authentication and encryption.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground mb-4">Key Benefits</h3>
                    <div className="grid gap-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Bidirectional Communication</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Gauge className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">Seamless Integration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-purple-500" />
                        <span className="text-sm">Enterprise Security</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Settings className="w-4 h-4 text-orange-500" />
                        <span className="text-sm">Easy Configuration</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/10 mt-4">
                      <h4 className="text-sm font-semibold text-primary mb-1">Migration Strategy</h4>
                      <p className="text-xs text-muted-foreground">
                        Deploy for gradual migration with flexible migration paths.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
