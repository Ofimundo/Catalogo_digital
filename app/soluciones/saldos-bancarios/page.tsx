// app/soluciones/saldos-bancarios/page.tsx
"use client"

import Link from "next/link"
import { ArrowLeft, Sparkles, CheckCircle2, XCircle, Landmark, Building2, TrendingUp, Bell, Headphones, Zap, Database, BarChart3, Mail, FileText } from "lucide-react"

export default function SaldosBancariosPage() {
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
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#9b2d8a] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9b2d8a]/10 border border-[#9b2d8a]/30 text-sm font-medium mb-6">
            <Landmark className="w-4 h-4 text-[#9b2d8a]" />
            <span className="text-[#9b2d8a]">Monitoreo Financiero</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#9b2d8a] to-[#c41e7a] bg-clip-text text-transparent">
              Saldos Bancarios
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Control total de tus cuentas con consulta automática de saldos y alertas en tiempo real
          </p>
        </div>

        {/* Descripción de todos los planes */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-[#9b2d8a]/10 to-[#c41e7a]/10 rounded-2xl p-6 border border-border">
            <p className="text-muted-foreground text-center">
              <span className="font-semibold text-foreground">Todos los planes incluyen:</span> Repositorio estándar en formato Excel, incluye los saldos consolidados diarios y la línea de cobranza agrupada por empresa. Gráfico de jerarquía: Relación caja de datos, gráfico de barras: Estado línea cobrando y total disponible. Envío de correo electrónico, con gráficos en el body del correo y el reporte EXCEL adjunto.
            </p>
          </div>
        </div>

        {/* Planes */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Plan Estándar */}
            <div className="rounded-2xl bg-card/50 border border-border overflow-hidden hover:border-[#9b2d8a]/40 transition-all hover:shadow-xl">
              <div className="bg-gradient-to-r from-[#9b2d8a] to-[#9b2d8a]/80 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">Estándar</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">8 UF</span>
                </div>
                <p className="text-white/80 text-sm mt-1">Mensuales sin IVA</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="pb-3 border-b border-border">
                  <p className="text-muted-foreground text-sm">Cantidad de RUT:</p>
                  <p className="font-bold text-foreground text-lg">1</p>
                </div>
                <div className="pb-3 border-b border-border">
                  <p className="text-muted-foreground text-sm">Cantidad de Bancos:</p>
                  <p className="font-bold text-foreground text-lg">≤ 5</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">Reporte Estándar</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Customización Reporte</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">Gráficas Estándar</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Customización Gráficas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">Notificación Estándar</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Customización Notificación</span>
                  </div>
                </div>
                <Link href="/contacto">
                  <button className="w-full mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#9b2d8a] to-[#c41e7a] text-white font-semibold hover:shadow-lg transition hover:scale-105">
                    Solicitar
                  </button>
                </Link>
              </div>
            </div>

            {/* Plan Premium */}
            <div className="rounded-2xl bg-card/50 border-2 border-[#9b2d8a]/50 overflow-hidden hover:shadow-xl transform scale-105 relative">
              <div className="absolute top-0 right-0 bg-[#9b2d8a] text-white text-xs px-3 py-1 rounded-bl-lg">Recomendado</div>
              <div className="bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] p-6 text-center">
                <h3 className="text-2xl font-bold text-white">Premium</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">13 UF</span>
                </div>
                <p className="text-white/80 text-sm mt-1">Mensuales sin IVA</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="pb-3 border-b border-border">
                  <p className="text-muted-foreground text-sm">Cantidad de RUT:</p>
                  <p className="font-bold text-foreground text-lg">Hasta 10</p>
                </div>
                <div className="pb-3 border-b border-border">
                  <p className="text-muted-foreground text-sm">Cantidad de Bancos:</p>
                  <p className="font-bold text-foreground text-lg">&gt; 5</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">Reporte Estándar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">Customización Reporte</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">Gráficas Estándar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">Customización Gráficas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">Notificación Estándar</span>
                  </div>
                </div>
                <Link href="/contacto">
                  <button className="w-full mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#9b2d8a] to-[#c41e7a] text-white font-semibold hover:shadow-lg transition hover:scale-105">
                    Solicitar
                  </button>
                </Link>
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