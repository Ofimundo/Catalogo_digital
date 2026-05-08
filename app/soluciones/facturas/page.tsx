import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { FileCheck, ArrowLeft, CheckCircle2, ArrowRight, Clock, Shield, Zap, FileX, Sparkles, AlertTriangle, Settings, Target } from "lucide-react"

export default function FacturasPage() {
  const processSteps = [
    {
      icon: AlertTriangle,
      title: "Identificar",
      description: "Alertamos sobre facturas riesgosas y las rechazamos automáticamente antes del día 8 de su recepción."
    },
    {
      icon: Settings,
      title: "Automatizar",
      description: "Automatizamos un reporte diario de tus facturas recibidas y lo conectamos con tus órdenes de compra."
    },
    {
      icon: Target,
      title: "Implementar",
      description: "Desarrollamos reglas de negocio que identifican facturas en regla y las riesgosas. Aceptando las que cumplen con las reglas definidas."
    }
  ]

  const allPlansInclude = [
    "Conexión con SII",
    "Uso de API disponibilizada por el cliente",
    "Alerta de finalización de proceso y alertas por funcionamiento anormal",
    "Reglas de validación básicas para realizar una aprobación o rechazo",
    "Reporte diario y mensual"
  ]

  const considerations = [
    "Valor mensual sin IVA, contrato mínimo 24 meses",
    "No incluye notificaciones (para plan Estándar)",
    "No incluye gráficas (para plan Estándar)",
    "Toda customización está sujeta a evaluación previa",
    "Implementación en 3 semanas para plan Estándar"
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c41e7a]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9b2d8a]/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#c41e7a] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#c41e7a] to-[#9b2d8a] flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c41e7a]/20 text-[#c41e7a] text-sm font-medium mb-3">
                  <Sparkles className="w-3 h-3" />
                  Solución de Automatización
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                  Aceptación y Rechazo de Facturas
                </h1>
              </div>
            </div>
            
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Disminuye <span className="bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] bg-clip-text text-transparent">99%</span> el tiempo en gestión de facturas recibidas
            </p>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Ten control total y evita aprobaciones automáticas incorrectas.
            </p>

            <div className="mt-8">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#c41e7a]/25 transition-all"
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
                className="relative bg-card/50 backdrop-blur-sm rounded-3xl border border-border p-8 hover:border-[#c41e7a]/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c41e7a] to-[#9b2d8a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Aceptación */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border p-8 hover:border-green-500/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileCheck className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Aceptación de Facturas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proceso automatizado que permite aceptar facturas de proveedores directamente en el portal del SII, registrando cada transacción para su seguimiento.
              </p>
            </div>
            
            {/* Rechazo */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border p-8 hover:border-red-500/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileX className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Rechazo de Facturas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatización del proceso de rechazo de facturas riesgosas antes del día 8 de su recepción, cumpliendo con los plazos del SII.
              </p>
            </div>
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
                    <CheckCircle2 className="w-5 h-5 text-[#c41e7a] flex-shrink-0 mt-0.5" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative p-10 md:p-16">
                <div className="grid md:grid-cols-3 gap-10 text-center text-white">
                  <div>
                    <Clock className="w-10 h-10 mx-auto mb-4 opacity-80" />
                    <p className="text-5xl font-bold mb-2">99%</p>
                    <p className="text-white/80">Reducción de tiempo</p>
                  </div>
                  <div>
                    <Shield className="w-10 h-10 mx-auto mb-4 opacity-80" />
                    <p className="text-5xl font-bold mb-2">0</p>
                    <p className="text-white/80">Errores manuales</p>
                  </div>
                  <div>
                    <Zap className="w-10 h-10 mx-auto mb-4 opacity-80" />
                    <p className="text-5xl font-bold mb-2">24/7</p>
                    <p className="text-white/80">Disponibilidad</p>
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
                    <span className="text-[#c41e7a]">•</span>
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
            ¿Listo para automatizar tus facturas?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contáctanos para obtener más información y comenzar tu prueba gratuita de 3 meses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/precios"
              className="px-8 py-4 bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#c41e7a]/25 transition-all"
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
