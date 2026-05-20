// app/soluciones/aceptacion-rechazo-facturas/page.tsx
"use client"

import Link from "next/link"
import { ArrowLeft, Sparkles, CheckCircle2, XCircle, Database, Building2, Brain, BarChart3, Bell, Headphones, Zap, Shield, Clock } from "lucide-react"

export default function AceptacionRechazoPage() {
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

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Botón volver */}
        <Link 
          href="/#soluciones"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#c41e7a] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e7a]/10 border border-[#c41e7a]/30 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#c41e7a]" />
            <span className="text-[#c41e7a]">Automatización Inteligente</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aceptación y Rechazo de{" "}
            <span className="bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent">
              Facturas
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Control total de tus documentos con validación automática y flujos de aprobación inteligentes
          </p>
          <div className="bg-gradient-to-r from-[#c41e7a]/10 to-[#9b2d8a]/10 rounded-2xl p-6 border border-border">
            <p className="text-muted-foreground text-center">
              <span className="font-semibold text-foreground">Todos los planes incluyen:</span> Conexión con SII. Uso de API disponibilizada por el cliente. Alerta de finalización de proceso y alertas por funcionamiento anormal. Reglas de validación básicas para realizar una aprobación o rechazo del documento. Reporte diario y mensual.
            </p>
            </div>
        </div>
        

        {/* Planes */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Plan Estándar */}
            <div className="rounded-2xl bg-card/50 border border-border overflow-hidden hover:border-[#c41e7a]/40 transition-all hover:shadow-xl">
              <div className="bg-gradient-to-r from-[#c41e7a] to-[#c41e7a]/80 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">Estándar</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">10 UF</span>
                </div>
                <p className="text-white/80 text-sm mt-1">Mensualidades sin IVA</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="pb-3 border-b border-border">
                  <p className="text-muted-foreground text-sm">Cantidad de Facturas:</p>
                  <p className="font-bold text-foreground text-lg">≤ 500</p>
                </div>
                <div className="pb-3 border-b border-border">
                  <p className="text-muted-foreground text-sm">Cantidad de RUT:</p>
                  <p className="font-bold text-foreground text-lg">1</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Integración al ERP del Cliente</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Desarrollo de integración customizada</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Regla Negocio Estándar</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Customización regla de negocio</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Reporte Estándar</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Customización Reporte</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Desarrollo gráficas customizadas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Desarrollo notificaciones customizadas</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border">
                  <span className="text-muted-foreground text-sm">Horas mensuales soporte incluidas:</span>
                  <span className="font-bold text-[#c41e7a] text-lg">1</span>
                </div>
                <Link href="/contacto">
                  <button className="w-full mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] text-white font-semibold hover:shadow-lg transition hover:scale-105">
                    Solicitar
                  </button>
                </Link>
              </div>
            </div>

            {/* Plan Premium */}
            <div className="rounded-2xl bg-card/50 border-2 border-[#c41e7a]/50 overflow-hidden hover:shadow-xl transform scale-105 relative">
              <div className="absolute top-0 right-0 bg-[#c41e7a] text-white text-xs px-3 py-1 rounded-bl-lg">Recomendado</div>
              <div className="bg-gradient-to-r from-[#9b2d8a] to-[#c41e7a] p-6 text-center">
                <h3 className="text-2xl font-bold text-white">Premium</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">16 UF</span>
                </div>
                <p className="text-white/80 text-sm mt-1">Mensualidades sin IVA</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="pb-3 border-b border-border">
                  <p className="text-muted-foreground text-sm">Cantidad de Facturas:</p>
                  <p className="font-bold text-foreground text-lg">&gt; 501 ≤ 1000</p>
                </div>
                <div className="pb-3 border-b border-border">
                  <p className="text-muted-foreground text-sm">Cantidad de RUT:</p>
                  <p className="font-bold text-foreground text-lg">&gt; 1 ≤ 10</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Integración al ERP del Cliente</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Desarrollo de integración customizada</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Regla de negocio estándar</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Customización regla de negocio</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Reporte Estándar</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Customización Reporte</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Desarrollo gráficas customizadas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Desarrollo notificaciones customizadas</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border">
                  <span className="text-muted-foreground text-sm">Horas mensuales soporte incluidas:</span>
                  <span className="font-bold text-[#c41e7a] text-lg">2</span>
                </div>
                <Link href="/contacto">
                  <button className="w-full mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] text-white font-semibold hover:shadow-lg transition hover:scale-105">
                    Solicitar
                  </button>
                </Link>
              </div>
            </div>

            {/* Plan Plus */}
            <div className="rounded-2xl bg-card/50 border border-border overflow-hidden hover:border-[#c41e7a]/40 transition-all hover:shadow-xl">
              <div className="bg-gradient-to-r from-[#5a45a5] to-[#7a3a9a] p-6 text-center">
                <h3 className="text-2xl font-bold text-white">Plus</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">25 UF</span>
                </div>
                <p className="text-white/80 text-sm mt-1">Mensualidades sin IVA</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="pb-3 border-b border-border">
                  <p className="text-muted-foreground text-sm">Cantidad de Facturas:</p>
                  <p className="font-bold text-foreground text-lg">&gt; 1000</p>
                </div>
                <div className="pb-3 border-b border-border">
                  <p className="text-muted-foreground text-sm">Cantidad de RUT:</p>
                  <p className="font-bold text-foreground text-lg">&gt; 10</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Integración al ERP del Cliente</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Desarrollo de integración customizada</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Regla de negocio estándar</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Customización regla de negocio</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Reporte Estándar</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Customización Reporte</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Desarrollo gráficas customizadas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Desarrollo notificaciones customizadas</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border">
                  <span className="text-muted-foreground text-sm">Horas mensuales soporte incluidas:</span>
                  <span className="font-bold text-[#c41e7a] text-lg">3</span>
                </div>
                <Link href="/contacto">
                  <button className="w-full mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] text-white font-semibold hover:shadow-lg transition hover:scale-105">
                    Solicitar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Consideraciones */}
      <div className="max-w-5xl mx-auto mt-12">
        <div className="bg-muted/30 rounded-2xl p-6 border border-border">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c41e7a]"></span>
            Consideraciones importantes
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-[#c41e7a]">•</span>
              <span>Valor mensual sin IVA</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c41e7a]">•</span>
              <span>El contrato mínimo es a 24 meses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c41e7a]">•</span>
              <span>TODA Customización está sujeta a evaluación previa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c41e7a]">•</span>
              <span>Implementación en 3 semanas para plan ESTÁNDAR</span>
            </li>
          </ul>
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