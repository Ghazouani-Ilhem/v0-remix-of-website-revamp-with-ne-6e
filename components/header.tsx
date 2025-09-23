"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Zap, Download, MessageCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "elegant-glass border-b border-border/50 elegant-shadow-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="h-12 w-12 rounded-lg elegant-gradient-primary flex items-center justify-center elegant-shadow-sm group-hover:elegant-shadow-md transition-all duration-300 group-hover:scale-105">
                <span className="text-primary-foreground font-bold text-xl">IO</span>
              </div>
              <span className="elegant-heading-bold text-2xl elegant-gradient-text group-hover:scale-105 transition-transform duration-300">
                Integration Objects
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 font-medium px-6 py-3 rounded-lg hover:bg-primary/5">
                <span>IT-OT Integration</span>
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="elegant-glass border-border/50 elegant-shadow-lg">
                <DropdownMenuItem className="hover:bg-primary/5 transition-colors rounded-lg">
                  <Zap className="w-4 h-4 mr-3 text-primary" />
                  OPC UA Solutions
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/5 transition-colors rounded-lg">
                  <Zap className="w-4 h-4 mr-3 text-primary" />
                  Industrial Connectivity
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/5 transition-colors rounded-lg">
                  <Zap className="w-4 h-4 mr-3 text-primary" />
                  Data Integration
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/ai"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium px-6 py-3 rounded-lg hover:bg-primary/5"
            >
              AI Solutions
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-300 font-medium px-6 py-3 rounded-lg hover:bg-primary/10">
                <span>OPC Products</span>
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="robok-glass border-border/50 shadow-xl">
                <DropdownMenuItem className="hover:bg-secondary/10 transition-colors rounded-lg">
                  <Zap className="w-4 h-4 mr-2 text-secondary" />
                  OPC UA Server
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-secondary/10 transition-colors rounded-lg">
                  <Zap className="w-4 h-4 mr-2 text-secondary" />
                  OPC Client
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-secondary/10 transition-colors rounded-lg">
                  <Zap className="w-4 h-4 mr-2 text-secondary" />
                  SIOTH Platform
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/resources"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium px-6 py-3 rounded-lg hover:bg-primary/5"
            >
              Resources
            </Link>

            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium px-6 py-3 rounded-lg hover:bg-primary/5"
            >
              Contact
            </Link>

            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium px-6 py-3 rounded-lg hover:bg-primary/5"
            >
              About Us
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-primary/5"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-primary hover:text-primary/80 transition-all duration-300 font-semibold px-4 py-2 rounded-lg hover:bg-primary/5"
            >
              Register
            </Link>

            <Button
              variant="outline"
              asChild
              className="elegant-btn-secondary px-6 py-2 rounded-lg border-2 bg-transparent"
            >
              <Link href="/ask-question">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask Question
              </Link>
            </Button>

            <Button asChild className="elegant-btn-primary px-6 py-2 rounded-lg">
              <Link href="/download">
                <Download className="w-4 h-4 mr-2" />
                Download SIOTH
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 robok-glass animate-robok-slide-up">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/integration"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 rounded-xl hover:bg-primary/10"
              >
                IT-OT Integration
              </Link>
              <Link
                href="/ai"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 rounded-xl hover:bg-primary/10"
              >
                AI Solutions
              </Link>
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 rounded-xl hover:bg-primary/10"
              >
                OPC Products
              </Link>
              <Link
                href="/resources"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 rounded-xl hover:bg-primary/10"
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 rounded-xl hover:bg-primary/10"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors px-4 py-3 rounded-xl hover:bg-primary/10"
              >
                About Us
              </Link>

              <div className="flex flex-col space-y-3 pt-6 border-t border-border/50">
                <Link href="/login" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-primary hover:text-primary/80 transition-colors px-4 py-2 font-semibold"
                >
                  Register
                </Link>
                <Button variant="outline" asChild className="mx-4 robok-glass bg-transparent rounded-xl">
                  <Link href="/ask-question">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ask Us a Question
                  </Link>
                </Button>
                <Button asChild className="mx-4 robok-gradient-primary rounded-xl">
                  <Link href="/download">
                    <Download className="w-4 h-4 mr-2" />
                    Download SIOTH
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
