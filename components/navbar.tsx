"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/50" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c41e7a] to-[#5a45a5] flex items-center justify-center transition-transform group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-tight">Ofilab</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Automatizaciones</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-[#c41e7a] transition-colors rounded-lg hover:bg-secondary/50"
            >
              Inicio
            </Link>
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#c41e7a] transition-colors rounded-lg hover:bg-secondary/50 flex items-center gap-1">
                Soluciones
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-xl p-2 min-w-[200px]">
                  <Link 
                    href="/soluciones/facturas" 
                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-foreground">Facturas</span>
                    <span className="block text-xs mt-0.5">Aceptación y rechazo</span>
                  </Link>
                  <Link 
                    href="/soluciones/saldos" 
                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-foreground">Saldos</span>
                    <span className="block text-xs mt-0.5">Reportes bancarios</span>
                  </Link>
                  <Link 
                    href="/soluciones/finiquitos" 
                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-foreground">Finiquitos</span>
                    <span className="block text-xs mt-0.5">Emisión automática</span>
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              href="/precios" 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#c41e7a] transition-colors rounded-lg hover:bg-secondary/50"
            >
              Precios
            </Link>
            <Link 
              href="/contacto" 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#c41e7a] transition-colors rounded-lg hover:bg-secondary/50"
            >
              Contacto
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/contacto" 
              className="group px-6 py-2.5 bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#c41e7a]/25 transition-all duration-300 flex items-center gap-2"
            >
              Prueba gratis
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              <Link 
                href="/" 
                className="px-4 py-3 text-foreground font-medium hover:bg-secondary/50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Soluciones</span>
              </div>
              <Link 
                href="/soluciones/facturas" 
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors ml-4"
                onClick={() => setIsOpen(false)}
              >
                Facturas
              </Link>
              <Link 
                href="/soluciones/saldos" 
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors ml-4"
                onClick={() => setIsOpen(false)}
              >
                Saldos
              </Link>
              <Link 
                href="/soluciones/finiquitos" 
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors ml-4"
                onClick={() => setIsOpen(false)}
              >
                Finiquitos
              </Link>
              <Link 
                href="/precios" 
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Precios
              </Link>
              <Link 
                href="/contacto" 
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <div className="pt-4 px-4">
                <Link 
                  href="/contacto" 
                  className="flex justify-center px-6 py-3 bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] text-white font-semibold rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  Prueba gratis
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
