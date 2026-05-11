"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToSection = (sectionId: string) => {
    // Si estamos en la página principal
    if (pathname === "/") {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      }
    } else {
      // Si estamos en otra página, redirigir a la home con el hash
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/50" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleScrollToSection('servicios')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c41e7a] to-[#5a45a5] flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-foreground leading-tight tracking-tight">Ofilab</span>
              <span className="text-xs text-muted-foreground/80 uppercase tracking-wider font-medium">Automatizaciones</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <button 
              onClick={() => handleScrollToSection('servicios')}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-[#c41e7a] transition-colors rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
              Servicios
            </button>
            <button 
              onClick={() => handleScrollToSection('resultados')}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#c41e7a] transition-colors rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
              Resultados
            </button>
            <button 
              onClick={() => handleScrollToSection('proceso')}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#c41e7a] transition-colors rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
              Metodología
            </button>
            <button 
              onClick={() => handleScrollToSection('soluciones')}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#c41e7a] transition-colors rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
              Soluciones
            </button>
            <button 
              onClick={() => handleScrollToSection('mesa-ayuda')}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#c41e7a] transition-colors rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
              Mesa de Ayuda
            </button>
            <button 
              onClick={() => handleScrollToSection('customer-success')}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#c41e7a] transition-colors rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
              Customer Success
            </button>
            <button 
              onClick={() => handleScrollToSection('contacto')}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-[#c41e7a] transition-colors rounded-lg hover:bg-secondary/50 cursor-pointer"
            >
              Contacto
            </button>
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
              <button 
                onClick={() => handleScrollToSection('servicios')}
                className="px-4 py-3 text-foreground font-medium hover:bg-secondary/50 rounded-lg transition-colors text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => handleScrollToSection('resultados')}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors text-left"
              >
                Resultados
              </button>
              <button 
                onClick={() => handleScrollToSection('proceso')}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors text-left"
              >
                Metodología
              </button>
              <button 
                onClick={() => handleScrollToSection('soluciones')}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors text-left"
              >
                Soluciones
              </button>
              <button 
                onClick={() => handleScrollToSection('mesa-ayuda')}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors text-left"
              >
                Mesa de Ayuda
              </button>
              <button 
                onClick={() => handleScrollToSection('customer-success')}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors text-left"
              >
                Customer Success
              </button>
              <button 
                onClick={() => handleScrollToSection('contacto')}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors text-left"
              >
                Contacto
              </button>
            
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}