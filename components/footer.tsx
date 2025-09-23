import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IO</span>
              </div>
              <span className="font-bold text-xl">Integration Objects</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Leading provider of industrial IoT and OPC solutions, connecting the industrial world with cutting-edge
              technology.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/integrationobjects">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/integrationobj">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/company/integration-objects">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/sioth" className="text-muted-foreground hover:text-primary transition-colors">
                  SIOTH Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/products/opc-expert"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  OPC Expert
                </Link>
              </li>
              <li>
                <Link
                  href="/products/iot-gateway"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  IoT Gateway
                </Link>
              </li>
              <li>
                <Link
                  href="/products/opc-server"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  OPC UA Server
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/manufacturing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/solutions/energy" className="text-muted-foreground hover:text-primary transition-colors">
                  Energy & Utilities
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/automotive"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Automotive
                </Link>
              </li>
              <li>
                <Link href="/solutions/pharma" className="text-muted-foreground hover:text-primary transition-colors">
                  Pharmaceuticals
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest updates on industrial IoT trends and our product releases.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t grid md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium">Email</div>
              <div className="text-muted-foreground text-sm">contact@integrationobjects.com</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium">Phone</div>
              <div className="text-muted-foreground text-sm">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium">Address</div>
              <div className="text-muted-foreground text-sm">123 Industrial Blvd, Tech City</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">© 2024 Integration Objects. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
