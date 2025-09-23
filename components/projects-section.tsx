"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Tag } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Shell Global OPC UA Integration for Upstream Operations",
    image: "/industrial-automation-server-room-with-blue-lighti.jpg",
    tags: ["SIOTH Platform", "OPC UA", "Oil & Gas"],
  },
  {
    id: 2,
    title: "ExxonMobil Refinery SCADA System with Real-time Monitoring",
    image: "/modern-industrial-iot-factory-with-connected-devic.jpg",
    tags: ["Remote Monitoring", "SCADA", "Petrochemicals"],
  },
  {
    id: 3,
    title: "Siemens Manufacturing Plant IT-OT Integration Solution",
    image: "/industrial-data-analytics-dashboard-with-charts-an.jpg",
    tags: ["IT-OT Integration", "Manufacturing", "Analytics"],
  },
]

export function ProjectsSection() {
  return (
    <section className="py-24 bg-muted/30 blurry-shape-half-right-bottom">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="fixed-content sticky top-24">
              <div className="site-heading mb-8">
                <h4 className="sub-title text-secondary font-semibold text-base mb-4">Success Stories</h4>
                <h2 className="title text-3xl md:text-4xl font-bold text-foreground mb-6 split-text-right split-text-in-right">
                  Proven solutions for Fortune 500 companies
                </h2>
              </div>
              <div className="project-fun-fact">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <h4 className="text-base text-muted-foreground">
                  Global clients including Shell, ExxonMobil, Siemens, and Rio Tinto trust our SIOTH® platform
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="project-style-one-items space-y-8">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="project-style-one-item group hover:shadow-xl transition-all duration-300 fade-up-anim overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative overflow-hidden">
                        <div
                          className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url('${project.image}')` }}
                        />
                        <div className="absolute inset-0 bg-primary/20" />
                        <div className="absolute top-4 right-4 w-12 h-12 bg-secondary/30 rounded-full blur-xl" />
                      </div>

                      <div className="p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                            <Link href="/projects">{project.title}</Link>
                          </h3>
                        </div>

                        <div className="space-y-6">
                          <Link
                            href="/projects"
                            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300"
                          >
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
