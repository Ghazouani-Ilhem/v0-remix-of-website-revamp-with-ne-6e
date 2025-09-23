"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Twitter, Plus } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "OPC UA Architect",
    image: "/professional-woman-engineer.png",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Industrial IoT Specialist",
    image: "/professional-engineer.png",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Automation Engineer",
    image: "/professional-woman-engineer.png",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "David Kim",
    role: "Data Integration Expert",
    image: "/professional-engineer.png",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="sub-title text-secondary font-semibold text-base mb-4">Expert Team</h4>
          <h2 className="title text-3xl md:text-4xl font-bold text-foreground mb-6 split-text-right split-text-in-right">
            Meet our talent for <br /> intelligent solutions
          </h2>
        </div>

        <div className="team-style-one-items">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="team-style-one-item group hover:shadow-xl transition-all duration-300 fade-up-anim overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div
                      className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url('${member.image}')` }}
                    />

                    <div className="social-overlay absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Link
                          href={member.social.linkedin}
                          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </Link>
                        <Link
                          href={member.social.github}
                          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </Link>
                        <Link
                          href={member.social.twitter}
                          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Twitter className="w-5 h-5 text-white" />
                        </Link>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                          <Plus className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="info p-6 text-center">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      <Link href="/team">{member.name}</Link>
                    </h4>
                    <span className="text-muted-foreground text-sm">{member.role}</span>
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
