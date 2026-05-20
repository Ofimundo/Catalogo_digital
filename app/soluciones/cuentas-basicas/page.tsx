// app/soluciones/cuentas-basicas/page.tsx
"use client"

import Link from "next/link"
import { ArrowLeft, Sparkles, Coins, Construction, Clock } from "lucide-react"

export default function CuentasBasicasPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar simplificada */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c41e7a] to-[#5a45a5] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent">
              Ofilab
            </span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-32 pb-20 min-h-[calc(100vh-200px)] flex items-center justify-center">
        <Link 
          href="/#soluciones"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#c41e7a] transition-colors absolute top-32 left-4 md:left-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver
        </Link>

        <div className="text-center max-w-2xl mx-auto">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#c41e7a]/20 to-[#5a45a5]/20 flex items-center justify-center mx-auto mb-6">
            <Construction className="w-12 h-12 text-[#c41e7a]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cuentas{" "}
            <span className="bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent">
              Básicas
            </span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-sm font-medium mb-6">
            <Clock className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-500">Próximamente</span>
          </div>
          <p className="text-xl text-muted-foreground mb-8">
            Estamos trabajando en esta solución para ofrecerte la mejor experiencia.
          </p>
          <div className="bg-card/50 rounded-2xl p-6 border border-border">
            <p className="text-muted-foreground">
              Esta funcionalidad estará disponible pronto. 
              Si deseas más información o quieres ser parte de los primeros en probarla, 
              contáctanos y te avisaremos cuando esté lista.
            </p>
          </div>
          <Link href="/contacto">
            <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] text-white font-semibold hover:shadow-lg transition hover:scale-105">
              Solicitar información
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ofilab - Soluciones de Automatización. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}