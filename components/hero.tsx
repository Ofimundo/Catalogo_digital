"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToSolutions = () => {
    document.getElementById("soluciones")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C41E7A] via-[#9B2E8A] to-[#7B2D8E]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Soluciones de Automatización
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4">
          Ofimundo
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto text-pretty">
          Te apoyamos en la etapa en que se encuentren tus procesos: Levantamiento, Digitalización y Optimización de Procesos
        </p>
        
        <Button 
          onClick={scrollToSolutions}
          size="lg"
          className="bg-white text-[#C41E7A] hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full"
        >
          Conoce nuestras soluciones
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L1440 120L1440 60C1440 60 1320 0 720 0C120 0 0 60 0 60L0 120Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
