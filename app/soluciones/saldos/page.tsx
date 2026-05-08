import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Wallet, ArrowLeft, CheckCircle2, ArrowRight, Clock, Shield, Zap, BarChart3, Settings, LineChart, Sparkles } from "lucide-react"

export default function SaldosPage() {
  const processSteps = [
    {
      icon: BarChart3,
      title: "Análisis diario",
      description: "Consolidamos y organizamos automáticamente cada movimiento bancario por empresa y banco."
    },
    {
      icon: Settings,
      title: "Tú defines las reglas",
      description: "Elige qué bancos monitorear y cómo gestionar tus operaciones financieras."
    },
    {
      icon: LineChart,
      title: "Reportes en tiempo real",
      description: "Visualiza y controla tus finanzas con métricas actualizadas constantemente."
    }
  ]

  const allPlansInclude = [
    "Reporte estándar en formato Excel",
    "Saldos consolidados diarios",
    "Línea de sobregiro agrupado por empresa",
    "Gráfico de Jerarquía: Relación caja deuda",
    "Gráfico de barras: Estado línea sobregiro y total disponible",
    "Envío de correo electrónico con gráficas y reporte adjunto"
  ]

  const considerations = [
    "Valor mensual sin IVA, contrato mínimo 24 meses",
    "Toda customización está sujeta a evaluación previa",
    "Implementación en 1 semana para plan Estándar",
    "Las horas adicionales de soporte se cobran"
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9b2d8a]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7a3a9a]/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#9b2d8a] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#9b2d8a] to-[#7a3a9a] flex items-center justify-center flex-shrink-0">
                <Wallet className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9b2d8a]/20 text-[#9b2d8a] text-sm font-medium mb-3">
                  <Sparkles className="w-3 h-3" />
                  Solución de Automatización
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                  Reportes de Saldos y Líneas de Crédito
                </h1>
              </div>
            </div>
            
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Finanzas claras, <span className="bg-gradient-to-r from-[#9b2d8a] to-[#7a3a9a] bg-clip-text text-transparent">decisiones seguras</span>
            </p>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Visualiza y controla tus finanzas con métricas actualizadas en tiempo real.
            </p>

            <div className="mt-8">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#9b2d8a] to-[#7a3a9a] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#9b2d8a]/25 transition-all"
              >
                Solicitar prueba gratis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="relative bg-card/50 backdrop-blur-sm rounded-3xl border border-border p-8 hover:border-[#9b2d8a]/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9b2d8a] to-[#7a3a9a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Include */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border p-10">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Todos los planes incluyen
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {allPlansInclude.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#9b2d8a] flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9b2d8a] to-[#7a3a9a]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative p-10 md:p-16">
                <div className="grid md:grid-cols-3 gap-10 text-center text-white">
                  <div>
                    <Clock className="w-10 h-10 mx-auto mb-4 opacity-80" />
                    <p className="text-5xl font-bold mb-2">24/7</p>
                    <p className="text-white/80">Monitoreo continuo</p>
                  </div>
                  <div>
                    <Shield className="w-10 h-10 mx-auto mb-4 opacity-80" />
                    <p className="text-5xl font-bold mb-2">100%</p>
                    <p className="text-white/80">Datos seguros</p>
                  </div>
                  <div>
                    <Zap className="w-10 h-10 mx-auto mb-4 opacity-80" />
                    <p className="text-5xl font-bold mb-2">1 sem</p>
                    <p className="text-white/80">Implementación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Considerations */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Consideraciones</h2>
            <div className="bg-card/30 rounded-2xl border border-border p-6">
              <ul className="space-y-3">
                {considerations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-[#9b2d8a]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ¿Listo para tener control total de tus finanzas?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contáctanos para obtener más información y comenzar tu prueba gratuita de 3 meses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/precios"
              className="px-8 py-4 bg-gradient-to-r from-[#9b2d8a] to-[#7a3a9a] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#9b2d8a]/25 transition-all"
            >
              Ver precios
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-secondary transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ofimundo - Soluciones de Automatización. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
