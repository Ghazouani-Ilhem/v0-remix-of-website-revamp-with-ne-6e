import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 sm:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

          <div className="relative text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
                Ready to transform your industrial operations?
              </h2>
              <p className="text-xl text-primary-foreground/90 text-pretty max-w-3xl mx-auto">
                Join thousands of companies worldwide who trust Integration Objects for their industrial connectivity
                and automation needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <Link href="/get-started">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/download">
                  <Download className="mr-2 h-5 w-5" />
                  Download SIOTH
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/80 text-sm mb-4">Trusted by industry leaders</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-primary-foreground font-bold">SIEMENS</div>
                <div className="text-primary-foreground font-bold">SCHNEIDER</div>
                <div className="text-primary-foreground font-bold">ABB</div>
                <div className="text-primary-foreground font-bold">ROCKWELL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
