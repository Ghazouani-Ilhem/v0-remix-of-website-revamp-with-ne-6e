"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileSubmenu = (menuId: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menuId ? null : menuId)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 elegant-glass border-b border-border/50 elegant-shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center elegant-shadow-sm group-hover:elegant-shadow-md transition-all duration-300 group-hover:scale-105 border border-white/20">
                <img
                  src="https://integrationobjects.com/images/2023/04/logo.webp"
                  alt="Integration Objects Logo"
                  className="h-8 w-8 lg:h-10 lg:w-10 object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-1 justify-center max-w-4xl">
              {/* IT-OT Integration */}
              <div className="nav-item group relative">
                <button className="nav-button px-6 py-3 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-lg hover:bg-primary/5 uppercase tracking-wide text-sm">
                  IT-OT Integration
                </button>
                <div className="mega-menu absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-background border border-border/50 rounded-2xl elegant-shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 min-w-[800px] z-50">
                  <div className="p-8">
                    <div className="grid grid-cols-4 gap-8">
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          Core Platforms
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/products/sioth"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">SIOTH</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Smart IoT Highway - Plateforme d'intégration intelligente
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/sioth-scada"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">SIOTH SCADA</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Intégration SCADA avancée avec monitoring temps réel
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/mqtt-broker"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">MQTT Universal Broker</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Broker MQTT universel pour l'IoT industriel
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          OPC UA Solutions
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/products/opc-ua-server"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">OPC UA Universal Server</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Serveur multi-protocole haute performance
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/opc-ua-wrapper"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">OPC UA Wrapper</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Pont intelligent Classic vers UA
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <div className="featured-section bg-gradient-to-br from-muted/30 to-muted/10 border border-border rounded-xl p-5 relative overflow-hidden">
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                          <h4 className="font-semibold text-foreground mb-2">Migration Assessment</h4>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            Évaluez gratuitement votre infrastructure actuelle et découvrez votre potentiel d'économies
                          </p>
                          <Button asChild className="w-full elegant-btn-secondary">
                            <Link href="/assessment">Commencer l'Évaluation</Link>
                          </Button>
                        </div>
                      </div>
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          Quick Links
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/solutions/integration"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Guide d'Intégration
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/case-studies"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Histoires de Succès
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/webinars"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Webinaires Gratuits
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/whitepapers"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Livre Blanc
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* OPC Products */}
              <div className="nav-item group relative">
                <button className="nav-button px-6 py-3 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-lg hover:bg-primary/5 uppercase tracking-wide text-sm">
                  OPC Products
                </button>
                <div className="mega-menu absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-background border border-border/50 rounded-2xl elegant-shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 min-w-[800px] z-50">
                  <div className="p-8">
                    <div className="grid grid-cols-4 gap-8">
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          OPC UA
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/products/opc-ua-server-toolkit"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">OPC UA Server Toolkit</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Construisez des serveurs OPC UA personnalisés
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/opc-ua-client-toolkit"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">OPC UA Client Toolkit</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Créez des clients OPC UA robustes
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/opc-ua-wrapper"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">OPC UA Wrapper</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Migration transparente Classic vers UA
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          OPC Classic
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/products/opc-da-server"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">OPC DA Server</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Serveur Data Access haute performance
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/opc-hda-server"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">OPC HDA Server</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Accès aux données historiques
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/opc-ae-server"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">OPC AE Server</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Gestion des alarmes et événements
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <div className="featured-section bg-gradient-to-br from-secondary/10 to-secondary/5 border border-border rounded-xl p-5 relative overflow-hidden">
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-accent"></div>
                          <h4 className="font-semibold text-foreground mb-2">Produit Vedette</h4>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            OPC UA Wrapper - La solution de migration la plus populaire
                          </p>
                          <Button asChild className="w-full elegant-btn-secondary">
                            <Link href="/products/opc-ua-wrapper">En Savoir Plus</Link>
                          </Button>
                        </div>
                      </div>
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          Ressources
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/resources/opc-guide"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Guide OPC
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/comparison"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Comparaison des Protocoles
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/migration"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Guide de Migration
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/standards"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Standards Industriels
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="nav-item group relative">
                <button className="nav-button px-6 py-3 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-lg hover:bg-primary/5 uppercase tracking-wide text-sm">
                  Solutions
                </button>
                <div className="mega-menu absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-background border border-border/50 rounded-2xl elegant-shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 min-w-[800px] z-50">
                  <div className="p-8">
                    <div className="grid grid-cols-4 gap-8">
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          Par Industrie
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/solutions/oil-gas"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Oil & Gas</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Solutions upstream & downstream
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/chemical"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Chemical</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Intégration de l'industrie des procédés
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/manufacturing"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Manufacturing</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Solutions usine intelligente
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/energy"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Energy</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Génération & distribution d'énergie
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          Par Cas d'Usage
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/solutions/migration"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Migration</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Migration OPC Classic vers UA
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/integration"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Integration</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Intégration des systèmes IT-OT
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/monitoring"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Monitoring</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Solutions de monitoring temps réel
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/solutions/compliance"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Compliance</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Outils de conformité réglementaire
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <div className="featured-section bg-gradient-to-br from-accent/10 to-accent/5 border border-border rounded-xl p-5 relative overflow-hidden">
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-primary"></div>
                          <h4 className="font-semibold text-foreground mb-2">Solution Vedette</h4>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            Migration OPC UA - Solution complète de migration
                          </p>
                          <Button asChild className="w-full elegant-btn-secondary">
                            <Link href="/solutions/migration">Commencer</Link>
                          </Button>
                        </div>
                      </div>
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          Histoires de Succès
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/case-studies/totalenergies"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              TotalEnergies
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/case-studies/exxonmobil"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              ExxonMobil
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/case-studies/aramco"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Saudi Aramco
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/case-studies/solvay"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Solvay
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="nav-item group relative">
                <button className="nav-button px-6 py-3 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-lg hover:bg-primary/5 uppercase tracking-wide text-sm">
                  Resources
                </button>
                <div className="mega-menu absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-background border border-border/50 rounded-2xl elegant-shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 min-w-[800px] z-50">
                  <div className="p-8">
                    <div className="grid grid-cols-4 gap-8">
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          Apprentissage
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/resources/documentation"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Documentation</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Documentation technique complète
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/tutorials"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Tutoriels Vidéo</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Guides étape par étape
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/webinars"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Webinaires</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Sessions d'experts en direct
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/training"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Formation</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Formation professionnelle
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          Contenu
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/resources/case-studies"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Études de Cas</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">Exemples concrets</div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/whitepapers"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Livre Blanc</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Insights de l'industrie
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/blog"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Blog</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">Dernières actualités</div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/success-stories"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Histoires de Succès</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">Réussites clients</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <div className="featured-section bg-gradient-to-br from-primary/10 to-primary/5 border border-border rounded-xl p-5 relative overflow-hidden">
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                          <h4 className="font-semibold text-foreground mb-2">Ressource Vedette</h4>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            Guide de Migration OPC UA - Guide complet de migration
                          </p>
                          <Button asChild className="w-full elegant-btn-secondary">
                            <Link href="/resources/migration-guide">Télécharger Maintenant</Link>
                          </Button>
                        </div>
                      </div>
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          Accès Rapide
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/resources/faq"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              FAQ
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/glossary"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Glossaire
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/standards"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Standards
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resources/checklist"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Checklist Migration
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="nav-item group relative">
                <button className="nav-button px-6 py-3 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-lg hover:bg-primary/5 uppercase tracking-wide text-sm">
                  Support
                </button>
                <div className="mega-menu absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-background border border-border/50 rounded-2xl elegant-shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 min-w-[800px] z-50">
                  <div className="p-8">
                    <div className="grid grid-cols-4 gap-8">
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          Obtenir de l'Aide
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/support/portal"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Portail Support</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Support technique 24/7
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/support/contact"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Contacter un Expert</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">Parlez à nos experts</div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/support/knowledge-base"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Base de Connaissances</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Recherchez des solutions
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/support/community"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Communauté</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Communauté utilisateurs
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          Services
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/support/professional-services"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Services Professionnels</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">
                                Implémentation experte
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/support/consulting"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Conseil</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">Guidance stratégique</div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/support/implementation"
                              className="block p-3 rounded-lg hover:bg-primary/5 hover:translate-x-1 transition-all duration-200"
                            >
                              <div className="font-semibold text-primary mb-1">Implémentation</div>
                              <div className="text-sm text-muted-foreground leading-relaxed">Livraison de projet</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <div className="featured-section bg-gradient-to-br from-secondary/10 to-secondary/5 border border-border rounded-xl p-5 relative overflow-hidden">
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-accent"></div>
                          <h4 className="font-semibold text-foreground mb-2">Service Vedette</h4>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            Support 24/7 - Support technique disponible 24h/24 et 7j/7
                          </p>
                          <Button asChild className="w-full elegant-btn-secondary">
                            <Link href="/support/portal">Obtenir du Support</Link>
                          </Button>
                        </div>
                      </div>
                      <div className="mega-menu-section">
                        <h3 className="font-bold text-primary text-lg mb-4 pb-2 border-b-2 border-border uppercase tracking-wide">
                          Contact
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="tel:+17135550123"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              +1 (713) 555-0123
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="mailto:support@integrationobjects.com"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              support@integrationobjects.com
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/support/emergency"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Support d'Urgence
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/support/chat"
                              className="block p-2 rounded-lg hover:bg-primary/5 text-sm transition-colors"
                            >
                              Chat en Direct
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* CTA and Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
              <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
                <Link
                  href="/login"
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium px-3 xl:px-4 py-2 rounded-lg hover:bg-primary/5 text-sm"
                >
                  Login
                </Link>
                <Button
                  variant="outline"
                  asChild
                  className="elegant-btn-secondary px-4 xl:px-6 py-2 rounded-lg border-2 bg-transparent text-sm"
                >
                  <Link href="/ask-question">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    <span className="hidden xl:inline">Ask Question</span>
                    <span className="xl:hidden">Ask</span>
                  </Link>
                </Button>
                <Button asChild className="elegant-btn-primary px-4 xl:px-6 py-2 rounded-lg text-sm">
                  <Link href="/download">
                    <Download className="w-4 h-4 mr-2" />
                    <span className="hidden xl:inline">Download SIOTH</span>
                    <span className="xl:hidden">Download</span>
                  </Link>
                </Button>
              </div>

              <button
                className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background border-l border-border elegant-shadow-xl overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-border">
              <h2 className="text-xl font-bold text-primary">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* IT-OT Integration */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("it-ot")}
                  className="w-full flex justify-between items-center p-4 bg-muted/30 rounded-xl font-semibold text-foreground hover:bg-muted/50 transition-colors"
                >
                  IT-OT Integration
                  <svg
                    className={`w-5 h-5 transition-transform ${activeMobileSubmenu === "it-ot" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeMobileSubmenu === "it-ot" && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link
                      href="/products/sioth"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      SIOTH
                    </Link>
                    <Link
                      href="/products/sioth-scada"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      SIOTH SCADA
                    </Link>
                    <Link
                      href="/products/mqtt-broker"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      MQTT Universal Broker
                    </Link>
                    <Link
                      href="/products/opc-ua-server"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      OPC UA Universal Server
                    </Link>
                    <Link
                      href="/products/opc-ua-wrapper"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      OPC UA Wrapper
                    </Link>
                  </div>
                )}
              </div>

              {/* OPC Products */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("opc")}
                  className="w-full flex justify-between items-center p-4 bg-muted/30 rounded-xl font-semibold text-foreground hover:bg-muted/50 transition-colors"
                >
                  OPC Products
                  <svg
                    className={`w-5 h-5 transition-transform ${activeMobileSubmenu === "opc" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeMobileSubmenu === "opc" && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link
                      href="/products/opc-ua-server-toolkit"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      OPC UA Server Toolkit
                    </Link>
                    <Link
                      href="/products/opc-ua-client-toolkit"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      OPC UA Client Toolkit
                    </Link>
                    <Link
                      href="/products/opc-ua-wrapper"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      OPC UA Wrapper
                    </Link>
                    <Link
                      href="/products/opc-da-server"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      OPC DA Server
                    </Link>
                    <Link
                      href="/products/opc-hda-server"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      OPC HDA Server
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("solutions")}
                  className="w-full flex justify-between items-center p-4 bg-muted/30 rounded-xl font-semibold text-foreground hover:bg-muted/50 transition-colors"
                >
                  Solutions
                  <svg
                    className={`w-5 h-5 transition-transform ${activeMobileSubmenu === "solutions" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeMobileSubmenu === "solutions" && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link
                      href="/solutions/oil-gas"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Oil & Gas
                    </Link>
                    <Link
                      href="/solutions/chemical"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Chemical
                    </Link>
                    <Link
                      href="/solutions/manufacturing"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Manufacturing
                    </Link>
                    <Link
                      href="/solutions/energy"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Energy
                    </Link>
                    <Link
                      href="/solutions/migration"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Migration
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("resources")}
                  className="w-full flex justify-between items-center p-4 bg-muted/30 rounded-xl font-semibold text-foreground hover:bg-muted/50 transition-colors"
                >
                  Resources
                  <svg
                    className={`w-5 h-5 transition-transform ${activeMobileSubmenu === "resources" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeMobileSubmenu === "resources" && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link
                      href="/resources/documentation"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Documentation
                    </Link>
                    <Link
                      href="/resources/tutorials"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Video Tutorials
                    </Link>
                    <Link
                      href="/resources/webinars"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Webinars
                    </Link>
                    <Link
                      href="/resources/case-studies"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/resources/blog"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Blog
                    </Link>
                  </div>
                )}
              </div>

              {/* Support */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("support")}
                  className="w-full flex justify-between items-center p-4 bg-muted/30 rounded-xl font-semibold text-foreground hover:bg-muted/50 transition-colors"
                >
                  Support
                  <svg
                    className={`w-5 h-5 transition-transform ${activeMobileSubmenu === "support" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeMobileSubmenu === "support" && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link
                      href="/support/portal"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Support Portal
                    </Link>
                    <Link
                      href="/support/contact"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Contact Expert
                    </Link>
                    <Link
                      href="/support/knowledge-base"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Knowledge Base
                    </Link>
                    <Link
                      href="/support/community"
                      className="block p-3 rounded-lg hover:bg-muted/30 text-muted-foreground transition-colors"
                    >
                      Community
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-border space-y-3">
                <Link
                  href="/login"
                  className="block text-center p-3 text-foreground hover:text-primary transition-colors"
                >
                  Login
                </Link>
                <Button variant="outline" asChild className="w-full elegant-btn-secondary bg-transparent">
                  <Link href="/ask-question">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ask Us a Question
                  </Link>
                </Button>
                <Button asChild className="w-full elegant-btn-primary">
                  <Link href="/download">
                    <Download className="w-4 h-4 mr-2" />
                    Download SIOTH
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
