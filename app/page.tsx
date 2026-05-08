"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { FileCheck, Wallet, FileText,Grid3x3 , ArrowRight, Sparkles, Timer, CheckCircle2, Zap, Link2, Bot, Code, TrendingUp, AlertCircle, Target, BarChart3, Users, ChevronDown, PlayCircle, Cpu, Building2, MonitorSmartphone } from "lucide-react"
import './globals.css'  // Adjust path as needed
// Navbar simplificada
function SimpleNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c41e7a] to-[#5a45a5] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent">Ofilab</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('servicios')} className="text-foreground/70 hover:text-[#c41e7a] transition-colors cursor-pointer">Servicios</button>
            <button onClick={() => scrollToSection('soluciones')} className="text-foreground/70 hover:text-[#c41e7a] transition-colors cursor-pointer">Soluciones</button>
            <button onClick={() => scrollToSection('contacto')} className="text-foreground/70 hover:text-[#c41e7a] transition-colors cursor-pointer">Contacto</button>
            <Link href="/contacto" className="px-5 py-2 rounded-full bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] text-white font-semibold hover:shadow-lg transition-all">
              Solicitar demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// NUEVAS SOLUCIONES: Automatizaciones, EPS, Salas Híbridas
const solutions = [
  {
    id: "automatizaciones",
    title: "Automatizaciones",
    headline: "Optimiza tus procesos con tecnología de última generación",
    subtitle: "Procesos inteligentes y eficientes",
    description: "Automatiza tareas repetitivas y libera el potencial de tu equipo.",
    icon: Cpu,
    stats: "99%",
    statsLabel: "Reducción de tiempo",
    features: [
      "Automatización de tareas manuales repetitivas",
      "Flujos de trabajo inteligentes sin intervención humana",
      "Integración con tus sistemas existentes",
      "Reportes automáticos y alertas en tiempo real"
    ],
    gradient: "from-[#c41e7a] to-[#e83e8c]",
    color: "#c41e7a"
  },
  {
    id: "eps",
    title: "EPS",
    headline: "Gestión empresarial eficiente y transparente",
    subtitle: "Enterprise Process Solutions",
    description: "Optimiza la gestión de tu empresa con soluciones integrales.",
    icon: Building2,
    stats: "24/7",
    statsLabel: "Disponibilidad continua",
    features: [
      "Gestión documental automatizada",
      "Workflows personalizados para tu negocio",
      "Trazabilidad completa de procesos",
      "Dashboards y reportes ejecutivos"
    ],
    gradient: "from-[#9b2d8a] to-[#c41e7a]",
    color: "#9b2d8a"
  },
  {
    id: "salas-hibridas",
    title: "Salas Híbridas",
    headline: "Colaboración efectiva donde sea que estés",
    subtitle: "Tecnología para equipos modernos",
    description: "Conecta equipos remotos y presenciales sin fricciones.",
    icon: MonitorSmartphone,
    stats: "+70%",
    statsLabel: "Mejora colaboración",
    features: [
      "Videoconferencias de alta calidad",
      "Pizarras digitales colaborativas",
      "Gestión de salas inteligente",
      "Integración con calendarios y herramientas"
    ],
    gradient: "from-[#7a3a9a] to-[#9b2d8a]",
    color: "#7a3a9a"
  }
]

const servicios = [
  { icon: Zap, title: "Automatización", description: "Flujos automáticos, cero tareas manuales repetitivas.", color: "#c41e7a" },
  { icon: Link2, title: "Integraciones", description: "Conectamos ERP, CRM y sistemas internos sin fricción.", color: "#9b2d8a" },
  { icon: Bot, title: "RPA", description: "Bots que ejecutan procesos 24/7 sin errores.", color: "#7a3a9a" },
  { icon: Code, title: "Desarrollo a medida", description: "Soluciones diseñadas según tu operación real.", color: "#5a45a5" }
]

const statsImpacto = [
  { value: "+70%", label: "Menos tiempo operativo", icon: Timer },
  { value: "-50%", label: "Errores", icon: AlertCircle },
  { value: "+40%", label: "Productividad", icon: TrendingUp },
  { value: "100%", label: "Trazabilidad", icon: Target }
]

const procesoPasos = [
  { step: "1", title: "Diagnóstico", description: "Detectamos cuellos de botella y oportunidades.", icon: BarChart3 },
  { step: "2", title: "Diseño", description: "Propuesta alineada a tus objetivos de negocio.", icon: Users },
  { step: "3", title: "Implementación", description: "Automatizamos e integramos tus sistemas.", icon: Zap },
  { step: "4", title: "Optimización", description: "Medimos y mejoramos continuamente.", icon: TrendingUp }
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [activeSolution, setActiveSolution] = useState(0)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % solutions.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Función para scroll suave
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background">
      <SimpleNavbar />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c41e7a]/30 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9b2d8a]/30 rounded-full blur-[128px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#c41e7a]/20 to-[#5a45a5]/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c41e7a]/10 border border-[#c41e7a]/30 text-sm mb-8">
              <Sparkles className="w-4 h-4 text-[#c41e7a]" />
              <span className="text-[#c41e7a] font-medium">🎁 Prueba gratuita por 3 meses - Cupo limitado</span>
            </div>
            
            {/* Título */}
            <h1 className="text-6xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-foreground">Deja de perder tiempo en tareas manuales</span>
              <span className="block bg-gradient-to-r from-[#c41e7a] via-[#e83e8c] to-[#5a45a5] bg-clip-text text-transparent mt-2">
              </span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Automatizamos tus procesos para que tu equipo produzca más, con menos errores y en menos tiempo.{" "}
            </p>

            {/* BOTONES DEL HERO */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('servicios')}
                className="group px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5 group-hover:scale-110 transition" />
                Ver cómo funciona
              </button>
              <button
                onClick={() => scrollToSection('soluciones')}
                className="group px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-[#9b2d8a] text-[#9b2d8a] font-semibold hover:bg-[#9b2d8a]/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Grid3x3 className="w-5 h-5 group-hover:rotate-90 transition duration-300" />
                Ver soluciones
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-[#c41e7a] text-[#c41e7a] font-semibold hover:bg-[#c41e7a]/10 transition-all duration-300 hover:scale-105"
              >
                Solicitar demo
              </button>
            </div>

            
          </div>
        </div>
      </section>

      {/* SERVICIOS SECTION */}
      <section id="servicios" className="py-24 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Qué <span className="bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent">hacemos</span>
            </h2>
            <p className="text-lg text-muted-foreground">Soluciones tecnológicas diseñadas para potenciar tu negocio</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio, idx) => {
              const Icon = servicio.icon
              return (
                <div key={idx} className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-[#c41e7a]/40 transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c41e7a]/20 to-[#5a45a5]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 text-[#c41e7a]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{servicio.title}</h3>
                  <p className="text-muted-foreground text-sm">{servicio.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* IMPACTO SECTION */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-[#c41e7a]/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Resultados que <span className="bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent">puedes esperar</span>
            </h2>
            <p className="text-lg text-muted-foreground">Métricas reales respaldadas por nuestros clientes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsImpacto.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="text-center p-6 rounded-2xl bg-card/30 border border-border hover:border-[#c41e7a]/40 transition-all hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c41e7a]/20 to-[#5a45a5]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#c41e7a]" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] bg-clip-text text-transparent mb-2">{stat.value}</h2>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESO SECTION */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cómo lo <span className="bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent">hacemos</span>
            </h2>
            <p className="text-lg text-muted-foreground">Metodología probada para garantizar tu éxito</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procesoPasos.map((paso, idx) => {
              const Icon = paso.icon
              return (
                <div key={idx} className="relative group">
                  <div className="text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-[#c41e7a]/40 transition-all hover:shadow-xl">
                    <div className="relative inline-block mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c41e7a]/20 to-[#5a45a5]/20 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                        <Icon className="w-7 h-7 text-[#c41e7a]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] flex items-center justify-center text-white font-bold text-xs">{paso.step}</div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{paso.title}</h3>
                    <p className="text-muted-foreground text-sm">{paso.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SOLUCIONES SECTION - HEXÁGONOS CON NUEVAS SOLUCIONES */}
      <section id="soluciones" className="py-24 px-4 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Nuestras
              <span className="bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent ml-3">
                Soluciones
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">Tecnología de vanguardia para transformar tu negocio</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon
              const isActive = activeSolution === idx
              
              return (
                <div
                  key={idx}
                  className="relative group cursor-pointer"
                  onClick={() => setActiveSolution(idx)}
                  onMouseEnter={() => setActiveSolution(idx)}
                >
                  <div className={`relative transition-all duration-500 ${isActive ? 'transform scale-105' : 'hover:scale-102'}`}>
                    <svg viewBox="0 0 240 220" className="w-full h-auto drop-shadow-lg">
                      <defs>
                        <linearGradient id={`hexGradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={solution.color} stopOpacity={isActive ? "0.35" : "0.15"} />
                          <stop offset="100%" stopColor={solution.color} stopOpacity={isActive ? "0.2" : "0.08"} />
                        </linearGradient>
                        <linearGradient id={`hexBorder-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={solution.color} stopOpacity={isActive ? "0.9" : "0.4"} />
                          <stop offset="100%" stopColor={solution.color} stopOpacity={isActive ? "0.6" : "0.2"} />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="120,15 225,63 225,157 120,205 15,157 15,63"
                        fill={`url(#hexGradient-${idx})`}
                        stroke={`url(#hexBorder-${idx})`}
                        strokeWidth={isActive ? "2.5" : "1.5"}
                        className="transition-all duration-500"
                        style={{
                          filter: isActive ? `drop-shadow(0 0 20px ${solution.color}80)` : "drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
                        }}
                      />
                    </svg>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <Icon className={`w-10 h-10 mb-2 transition-all duration-500 ${isActive ? 'scale-110' : ''}`} style={{ color: isActive ? solution.color : "#666" }} />
                      <h3 className="text-lg font-bold text-foreground mb-1">{solution.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 px-2">{solution.headline}</p>
                      <div className={`inline-flex items-baseline gap-1 px-2 py-0.5 rounded-full mt-2 text-xs ${isActive ? 'bg-opacity-20' : 'bg-muted/50'}`} style={{ backgroundColor: isActive ? `${solution.color}30` : undefined }}>
                        <span style={{ color: isActive ? solution.color : "#999" }}>{solution.stats}</span>
                        <span className="text-muted-foreground text-[10px]">{solution.statsLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Info de solución activa */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl border p-8" style={{ borderColor: `${solutions[activeSolution].color}60` }}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solutions[activeSolution].gradient} flex items-center justify-center flex-shrink-0`}>
                  {(() => {
                    const Icon = solutions[activeSolution].icon
                    return <Icon className="w-7 h-7 text-white" />
                  })()}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{solutions[activeSolution].title}</h3>
                  <p className="text-sm font-medium mb-2" style={{ color: solutions[activeSolution].color }}>{solutions[activeSolution].subtitle}</p>
                  <p className="text-foreground/80 text-sm mb-3">{solutions[activeSolution].headline}</p>
                  <ul className="space-y-1 mb-4">
                    {solutions[activeSolution].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: solutions[activeSolution].color }} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/soluciones/${solutions[activeSolution].id}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all group" style={{ background: `linear-gradient(135deg, ${solutions[activeSolution].color}, ${solutions[activeSolution].color}CC)`, color: 'white' }}>
                    Conocer más
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FUERTE - CONTACTO */}
      <section id="contacto" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#c41e7a] via-[#9b2d8a] to-[#5a45a5]" />
            <div className="relative px-8 py-16 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Si hoy dependes de Excel, correos y tareas manuales...
              </h2>
              <p className="text-xl text-white/90 mb-2 font-semibold">¡estás perdiendo dinero!</p>
              <p className="text-white/80 mb-8">Te mostramos en 30 minutos cómo automatizar tu operación.</p>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#c41e7a] font-bold rounded-full hover:shadow-xl transition hover:scale-105">
                Quiero mi diagnóstico gratis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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