"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    id: 1,
    question: "What is OPC UA and why is it important?",
    answer:
      "OPC UA (Open Platform Communications Unified Architecture) is a machine-to-machine communication protocol for industrial automation. It provides secure, reliable, and platform-independent data exchange between industrial equipment and systems, enabling seamless integration across different manufacturers and technologies.",
  },
  {
    id: 2,
    question: "How does SIOTH simplify OPC UA implementation?",
    answer:
      "SIOTH is our proprietary platform that dramatically reduces OPC UA server development time from months to minutes. It provides pre-built templates, drag-and-drop configuration, and automated code generation, making industrial connectivity accessible to engineers without deep OPC UA expertise.",
  },
  {
    id: 3,
    question: "What industries benefit from OPC UA integration?",
    answer:
      "OPC UA integration benefits manufacturing, oil & gas, pharmaceuticals, automotive, food & beverage, and any industry requiring reliable machine-to-machine communication. It's particularly valuable for Industry 4.0 initiatives and digital transformation projects.",
  },
]

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number>(1)

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? 0 : id)
  }

  return (
    <section
      className="py-24 bg-muted/30 blurry-shape-right-bottom relative overflow-hidden"
      style={{ backgroundImage: "url('/modern-industrial-control-room-with-multiple-monit.jpg')" }}
    >
      <div className="absolute inset-0 bg-muted/95" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="faq-style-one-info">
              <h4 className="sub-title text-secondary font-semibold text-base mb-4">Question & Answer</h4>
              <h2 className="title text-3xl md:text-4xl font-bold text-foreground mb-6 split-text-right split-text-in-right">
                OPC UA queries? Expert responses await
              </h2>
              <Button className="bg-primary hover:bg-primary/90 text-white fade-up-anim" asChild>
                <Link href="/faq">
                  All Questions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:offset-1">
            <div className="accordion-style-one-items fade-up-anim space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="accordion-style-one-item bg-background rounded-2xl overflow-hidden shadow-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    className="accordion-button w-full text-left p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                        openFaq === faq.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`accordion-collapse transition-all duration-300 ease-in-out ${
                      openFaq === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="accordion-body p-6 pt-0">
                      <p className="text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
