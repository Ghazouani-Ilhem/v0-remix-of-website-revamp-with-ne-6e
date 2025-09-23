"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Considered imprudence of industrial connectivity experience",
    category: "Technology",
    date: "06 December, 2025",
    image: "/industrial-automation-server-room-with-blue-lighti.jpg",
    excerpt: "Exploring the latest trends in OPC UA implementation and industrial automation connectivity solutions.",
  },
  {
    id: 2,
    title: "Expression acceptance imprudence particular OPC UA implementation",
    category: "Industrial IoT",
    date: "14 August, 2025",
    image: "/modern-industrial-iot-factory-with-connected-devic.jpg",
    excerpt: "Best practices for implementing OPC UA in complex industrial environments and legacy system integration.",
  },
  {
    id: 3,
    title: "Considered imprudence of technical friendship in custom integration",
    category: "Integration",
    date: "12 October, 2025",
    image: "/industrial-data-analytics-dashboard-with-charts-an.jpg",
    excerpt: "How custom OPC UA solutions are transforming industrial data exchange and system interoperability.",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="sub-title text-secondary font-semibold text-base mb-4">Latest Blog</h4>
          <h2 className="title text-3xl md:text-4xl font-bold text-foreground mb-6 split-text-right split-text-in-right">
            News & Updates
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="blog-style-one group hover:shadow-xl transition-all duration-300 fade-up-anim overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <div
                        className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url('${post.image}')` }}
                      />
                      <div className="absolute inset-0 bg-primary/10" />
                    </div>

                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="blog-one-meta flex items-center gap-4 mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                            <Tag className="w-3 h-3 mr-1" />
                            {post.category}
                          </span>
                          <span className="inline-flex items-center text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {post.date}
                          </span>
                        </div>

                        <h2 className="blog-title text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          <Link href="/blog">{post.title}</Link>
                        </h2>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{post.excerpt}</p>
                      </div>

                      <Link
                        href="/blog"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300"
                      >
                        Explore More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
