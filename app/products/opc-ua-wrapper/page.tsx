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
  Cpu,
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
        {/* Enhanced dark gradient background with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)]"></div>
        </div>

        {/* Floating geometric elements inspired by Suseio */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-lg animate-bounce"></div>
          <div
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Hexagonal floating elements */}
          <div
            className="absolute top-32 right-1/3 w-16 h-16 bg-primary/5 transform rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/3 w-12 h-12 bg-secondary/5 transform rotate-12 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Circuit-like lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/15 to-transparent"></div>
        </div>

        {/* Vertical text element inspired by Suseio */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 hidden lg:block">
          <div className="flex items-center space-x-4 text-primary/60 text-sm font-medium tracking-widest">
            <div className="w-8 h-px bg-primary/40"></div>
            <span>INDUSTRIAL AUTOMATION</span>
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-ping"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                {/* Enhanced badge with futuristic styling */}
                <div className="flex items-center space-x-4">
                  <Badge className="px-6 py-3 text-sm font-medium bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm hover:bg-primary/25 transition-all">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-ping"></div>
                    <Cpu className="w-4 h-4 mr-2" />
                    INDUSTRIAL OPC TECHNOLOGY
                  </Badge>
                </div>

                {/* Futuristic title with enhanced typography */}
                <div className="space-y-6">
                  <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
                    <span className="bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
                      OPC UA
                    </span>
                    <br />
                    <span className="text-primary glow-text">Wrapper</span>
                  </h1>

                  <div className="flex items-center space-x-4">
                    <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Enhanced subtitle with better visual hierarchy */}
                <div className="space-y-6">
                  <p className="text-2xl lg:text-3xl text-slate-300 leading-relaxed max-w-2xl font-light">
                    Bridge the gap between <span className="text-primary font-semibold glow-text">OPC Classic</span> and{" "}
                    <span className="text-secondary font-semibold glow-text">OPC UA</span> with our seamless migration
                    solution.
                  </p>

                  <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                    Enable modern connectivity while preserving your existing infrastructure investments with zero
                    downtime.
                  </p>
                </div>
              </div>

              {/* Enhanced CTA buttons with futuristic styling */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="px-12 py-6 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Download className="w-6 h-6 mr-3 group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10">Download Free Trial</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-12 py-6 text-lg font-bold bg-transparent border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 group backdrop-blur-sm"
                >
                  <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Watch Demo
                </Button>
              </div>

              {/* Enhanced stats with futuristic design */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-primary/20">
                <div className="text-center group cursor-pointer">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-green-500/20">
                      <Activity className="w-8 h-8 text-green-400 group-hover:animate-pulse" />
                    </div>
                    <div className="text-4xl font-black text-white group-hover:scale-110 transition-transform glow-text">
                      99.9%
                    </div>
                    <div className="text-sm text-slate-400 font-medium mt-2">Uptime Guarantee</div>
                  </div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-blue-500/20">
                      <Gauge className="w-8 h-8 text-blue-400 group-hover:animate-spin" />
                    </div>
                    <div className="text-4xl font-black text-white group-hover:scale-110 transition-transform glow-text">
                      &lt;10ms
                    </div>
                    <div className="text-sm text-slate-400 font-medium mt-2">Ultra-Low Latency</div>
                  </div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-purple-500/20">
                      <TrendingUp className="w-8 h-8 text-purple-400 group-hover:animate-bounce" />
                    </div>
                    <div className="text-4xl font-black text-white group-hover:scale-110 transition-transform glow-text">
                      1000+
                    </div>
                    <div className="text-sm text-slate-400 font-medium mt-2">Global Deployments</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced right side with 3D-style architecture display */}
            <div className="relative lg:pl-8">
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/30 rounded-3xl p-10 border border-primary/20 overflow-hidden shadow-2xl backdrop-blur-sm">
                {/* Enhanced animated background pattern */}
                <div className="absolute inset-0 opacity-10">
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

                  {/* Circuit pattern */}
                  <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
                </div>

                <img
                  src="/images/opc-ua-wrapper-architecture.png"
                  alt="OPC UA Wrapper Architecture"
                  className="w-full h-auto rounded-xl relative z-10 hover:scale-105 transition-transform duration-700 shadow-lg"
                />

                {/* Enhanced floating badges with 3D effect */}
                <div className="absolute top-6 right-6 z-20">
                  <Badge className="bg-gradient-to-r from-green-500/30 to-green-600/20 text-green-300 border border-green-500/40 animate-pulse px-4 py-2 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
                    Live Architecture
                  </Badge>
                </div>

                <div className="absolute -bottom-6 -left-6 z-20">
                  <div
                    className="bg-slate-800/95 backdrop-blur-sm border border-primary/30 rounded-xl p-4 shadow-2xl animate-bounce"
                    style={{ animationDelay: "2s" }}
                  >
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-white">Enterprise Security</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 z-20">
                  <div
                    className="bg-slate-800/95 backdrop-blur-sm border border-secondary/30 rounded-xl p-4 shadow-2xl animate-bounce"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-semibold text-white">High Performance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-black text-white">Why Choose OPC UA Wrapper?</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto"></div>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                The most trusted solution for OPC Classic to OPC UA migration, deployed in over 1000 industrial
                facilities worldwide with proven reliability and performance.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-primary/20 text-center group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
              <CardContent className="pt-10 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform border border-primary/20">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Zero Downtime</h3>
                <p className="text-slate-400 leading-relaxed">
                  Migrate without interrupting your production systems or affecting operations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-secondary/20 text-center group hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
              <CardContent className="pt-10 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform border border-secondary/20">
                  <Users className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Expert Support</h3>
                <p className="text-slate-400 leading-relaxed">
                  24/7 technical support from certified OPC specialists and engineers
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-accent/20 text-center group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
              <CardContent className="pt-10 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform border border-accent/20">
                  <Award className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Industry Proven</h3>
                <p className="text-slate-400 leading-relaxed">
                  Trusted by Fortune 500 companies across manufacturing and process industries
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-primary/20 text-center group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
              <CardContent className="pt-10 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform border border-primary/20">
                  <Globe className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Universal Compatibility</h3>
                <p className="text-slate-400 leading-relaxed">
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Architecture Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Bidirectional bridge between OPC Classic and OPC UA technologies.
            </p>
          </div>

          <div className="space-y-12">
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 rounded-3xl p-8 border border-primary/20 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <img
                    src="/images/opc-ua-wrapper-architecture.png"
                    alt="OPC UA Wrapper Architecture Diagram"
                    className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <Network className="w-5 h-5 mr-2 text-primary" />
                      Communication Flow
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/30">
                          <ArrowRight className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-1 text-primary">OPC UA to OPC Proxy</h4>
                          <p className="text-xs text-slate-400">
                            Enables OPC Classic clients to connect to OPC UA servers.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-secondary/30">
                          <ArrowRight className="w-3 h-3 text-secondary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-1 text-secondary">OPC to OPC UA Wrapper</h4>
                          <p className="text-xs text-slate-400">
                            Allows OPC UA clients to connect to OPC Classic servers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                      Key Benefits
                    </h3>
                    <div className="grid gap-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-slate-300">Bidirectional Communication</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Gauge className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-slate-300">Seamless Integration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-slate-300">Enterprise Security</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Settings className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-slate-300">Easy Configuration</span>
                      </div>
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
