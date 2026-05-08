import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Check, ArrowLeft, FileCheck, Wallet, FileText, Sparkles, X } from "lucide-react"

const pricingData = {
  facturas: {
    title: "Aprobación y Rechazo de Facturas",
    icon: FileCheck,
    gradient: "from-[#c41e7a] to-[#9b2d8a]",
    plans: [
      {
        name: "Estándar",
        price: "10",
        unit: "UF",
        period: "Mensuales sin IVA",
        highlights: [
          { label: "Cantidad de Facturas", value: "<= 500" },
          { label: "Cantidad de RUT", value: "1" }
        ],
        features: [
          { text: "Desarrollo de integración customizada", included: false },
          { text: "Regla Negocio Estándar", included: true },
          { text: "Customización regla de negocio", included: false },
          { text: "Reporte Estándar", included: true },
          { text: "Customización Reporte", included: false },
          { text: "Desarrollo gráficas customizadas", included: false },
          { text: "Desarrollo notificaciones customizadas", included: false },
          { text: "Integración al ERP del Cliente", included: false },
          { text: "Horas mensuales soporte: 1", included: true }
        ]
      },
      {
        name: "Premium",
        price: "16",
        unit: "UF",
        period: "Mensuales sin IVA",
        popular: true,
        highlights: [
          { label: "Cantidad de Facturas", value: "> 501 <= 1000" },
          { label: "Cantidad de RUT", value: "> 1 <= 10" }
        ],
        features: [
          { text: "Desarrollo de integración customizada", included: false },
          { text: "Regla Negocio Estándar", included: true },
          { text: "Customización regla de negocio", included: true },
          { text: "Reporte Estándar", included: true },
          { text: "Customización Reporte", included: true },
          { text: "Desarrollo gráficas customizadas", included: false },
          { text: "Desarrollo notificaciones customizadas", included: false },
          { text: "Integración al ERP del Cliente", included: true },
          { text: "Horas mensuales soporte: 2", included: true }
        ]
      },
      {
        name: "Plus",
        price: "25",
        unit: "UF",
        period: "Mensuales sin IVA",
        highlights: [
          { label: "Cantidad de Facturas", value: "> 1000" },
          { label: "Cantidad de RUT", value: "> 10" }
        ],
        features: [
          { text: "Desarrollo de integración customizada", included: true },
          { text: "Regla Negocio Estándar", included: true },
          { text: "Customización regla de negocio", included: true },
          { text: "Reporte Estándar", included: true },
          { text: "Customización Reporte", included: true },
          { text: "Desarrollo gráficas customizadas", included: true },
          { text: "Desarrollo notificaciones customizadas", included: true },
          { text: "Integración al ERP del Cliente", included: true },
          { text: "Horas mensuales soporte: 3", included: true }
        ]
      }
    ]
  },
  saldos: {
    title: "Saldos Bancarios",
    icon: Wallet,
    gradient: "from-[#9b2d8a] to-[#7a3a9a]",
    plans: [
      {
        name: "Estándar",
        price: "8",
        unit: "UF",
        period: "Mensuales sin IVA",
        highlights: [
          { label: "Cantidad de RUT", value: "1" },
          { label: "Cantidad de Bancos", value: "<= 5" }
        ],
        features: [
          { text: "Reporte Estándar", included: true },
          { text: "Customización Reporte", included: false },
          { text: "Gráficas Estándar", included: true },
          { text: "Customización Gráficas", included: false },
          { text: "Notificación Estándar", included: true },
          { text: "Customización Notificación", included: false },
          { text: "Horas mensuales soporte: 1", included: true }
        ]
      },
      {
        name: "Premium",
        price: "13",
        unit: "UF",
        period: "Mensuales sin IVA",
        popular: true,
        highlights: [
          { label: "Cantidad de RUT", value: "hasta 10" },
          { label: "Cantidad de Bancos", value: "> 5" }
        ],
        features: [
          { text: "Reporte Estándar", included: true },
          { text: "Customización Reporte", included: true },
          { text: "Gráficas Estándar", included: true },
          { text: "Customización Gráficas", included: true },
          { text: "Notificación Estándar", included: true },
          { text: "Customización Notificación", included: true },
          { text: "Horas mensuales soporte: 2", included: true }
        ]
      }
    ]
  },
  finiquitos: {
    title: "Finiquitos DT",
    icon: FileText,
    gradient: "from-[#7a3a9a] to-[#5a45a5]",
    plans: [
      {
        name: "Estándar",
        price: "10",
        unit: "UF",
        period: "Mensuales sin IVA",
        highlights: [
          { label: "Cantidad de RUT", value: "1" },
          { label: "Cantidad de Finiquitos", value: "<= 100" }
        ],
        features: [
          { text: "Elaboración set documentos Finiquitos", included: true },
          { text: "Envío Automático a la DT", included: true },
          { text: "Integración al ERP del Cliente", included: false },
          { text: "Integración con gestor documental", included: false },
          { text: "Reporte Estándar", included: true },
          { text: "Customización Reporte", included: false },
          { text: "Gráficas Estándar", included: true },
          { text: "Customización Gráficas", included: false },
          { text: "Notificación Estándar", included: true },
          { text: "Customización Notificación", included: false },
          { text: "Horas mensuales soporte: 1", included: true }
        ]
      },
      {
        name: "Premium",
        price: "16",
        unit: "UF",
        period: "Mensuales sin IVA",
        popular: true,
        highlights: [
          { label: "Cantidad de RUT", value: "Hasta 10" },
          { label: "Cantidad de Finiquitos", value: "> 100" }
        ],
        features: [
          { text: "Elaboración set documentos Finiquitos", included: true },
          { text: "Envío Automático a la DT", included: true },
          { text: "Integración al ERP del Cliente", included: true },
          { text: "Integración con gestor documental", included: true },
          { text: "Reporte Estándar", included: true },
          { text: "Customización Reporte", included: true },
          { text: "Gráficas Estándar", included: true },
          { text: "Customización Gráficas", included: true },
          { text: "Notificación Estándar", included: true },
          { text: "Customización Notificación", included: true },
          { text: "Horas mensuales soporte: 2", included: true }
        ]
      }
    ]
  }
}

export default function PreciosPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#c41e7a]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#5a45a5]/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#c41e7a] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c41e7a]/20 text-[#c41e7a] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Prueba gratuita por 3 meses
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Planes y Precios
            </h1>
            <p className="text-xl text-muted-foreground">
              Elige el plan que mejor se adapte a las necesidades de tu empresa. Todos los precios están en UF mensuales sin IVA.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Sections */}
      {Object.entries(pricingData).map(([key, solution]) => (
        <section key={key} className="py-20 px-4 border-t border-border">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}>
                <solution.icon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">{solution.title}</h2>
            </div>
            
            <div className={`grid gap-8 max-w-6xl mx-auto ${solution.plans.length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3'}`}>
              {solution.plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative bg-card/50 backdrop-blur-sm rounded-3xl border ${plan.popular ? 'border-[#c41e7a]/50 shadow-xl shadow-[#c41e7a]/10' : 'border-border'} p-8 flex flex-col`}
                >
                  {plan.popular && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r ${solution.gradient} text-white text-sm font-semibold rounded-full`}>
                      Más popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-6xl font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-2xl font-bold text-muted-foreground">{plan.unit}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.period}</p>
                  </div>
                  
                  {/* Highlights */}
                  <div className="bg-secondary/30 rounded-2xl p-4 mb-6">
                    {plan.highlights.map((highlight, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="text-sm text-muted-foreground">{highlight.label}</span>
                        <span className="text-sm font-semibold text-foreground">{highlight.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <ul className="space-y-3 flex-grow mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground/50'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contacto"
                    className={`block text-center py-4 px-6 rounded-full font-semibold transition-all ${
                      plan.popular 
                        ? `bg-gradient-to-r ${solution.gradient} text-white hover:shadow-lg hover:shadow-[#c41e7a]/25` 
                        : 'bg-secondary text-foreground hover:bg-secondary/80'
                    }`}
                  >
                    Solicitar prueba gratis
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#c41e7a] via-[#9b2d8a] to-[#5a45a5]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative px-8 py-16 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  Accede a nuestra prueba gratuita por 3 meses
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                  Experimenta de primera mano cómo simplificar y optimizar tu gestión. Disfruta de todas las funcionalidades sin compromisos.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#c41e7a] font-bold rounded-full hover:bg-white/90 transition-colors"
                >
                  Solicitar prueba gratis
                </Link>
              </div>
            </div>
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
