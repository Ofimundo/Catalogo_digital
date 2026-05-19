"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { FileCheck, Wallet, FileText, Grid3x3, ArrowRight, Sparkles, Timer, CheckCircle2, Zap, Link2, Bot, Code, TrendingUp, AlertCircle, Target, BarChart3, Users, ChevronDown, PlayCircle, Cpu, Building2, MonitorSmartphone, Landmark, ScrollText, Coins, FileSpreadsheet, Calculator, Headphones, Clock, Mail, Phone, MessageCircle, Star, Award, Calendar, MessageSquare, Heart, Scan, FileSearch, Plus, Handshake, LineChart, Rocket } from "lucide-react"
import './globals.css'

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-105 focus:outline-none"
            aria-label="Volver al inicio"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c41e7a] to-[#5a45a5] flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#c41e7a]/30">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#e83e8c] group-hover:to-[#7a3a9a]">
              Ofilab
            </span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('servicios')} className="text-foreground/70 hover:text-[#c41e7a] transition-colors cursor-pointer">Servicios</button>
            <button onClick={() => scrollToSection('resultados')} className="text-foreground/70 hover:text-[#c41e7a] transition-colors cursor-pointer">Resultados</button>
            <button onClick={() => scrollToSection('proceso')} className="text-foreground/70 hover:text-[#c41e7a] transition-colors cursor-pointer">Metodología</button>
            <button onClick={() => scrollToSection('soluciones')} className="text-foreground/70 hover:text-[#c41e7a] transition-colors cursor-pointer">Soluciones</button>
            <button onClick={() => scrollToSection('soporte-tecnico')} className="text-foreground/70 hover:text-[#c41e7a] transition-colors cursor-pointer">Soporte Técnico</button>
            <button onClick={() => scrollToSection('customer-success')} className="text-foreground/70 hover:text-[#c41e7a] transition-colors cursor-pointer">Customer Success</button>
            <button onClick={() => scrollToSection('contacto')} className="text-foreground/70 hover:text-[#c41e7a] transition-colors cursor-pointer">Contacto</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

// SOLUCIONES: 5 elementos
const solutions = [
  {
    id: "aceptacion-rechazo-facturas",
    title: "Aceptación y Rechazo de Facturas",
    titleShort: "Aceptación/Rechazo",
    headline: "Gestiona tus facturas de forma inteligente",
    subtitle: "Control total de tus documentos",
    description: "Automatiza la validación y gestión de facturas entrantes.",
    icon: FileCheck,
    stats: "99%",
    statsLabel: "Precisión",
    features: [
      "Validación automática de facturas",
      "Reglas personalizables de aceptación/rechazo",
      "Flujos de aprobación automáticos",
      "Trazabilidad completa del proceso"
    ],
    gradient: "from-[#c41e7a] to-[#e83e8c]",
    color: "#c41e7a"
  },
  {
    id: "saldos-bancarios",
    title: "Saldos Bancarios",
    titleShort: "Saldos Bancarios",
    headline: "Monitoreo financiero en tiempo real",
    subtitle: "Control total de tus cuentas",
    description: "Visualiza y gestiona tus saldos bancarios al instante.",
    icon: Landmark,
    stats: "24/7",
    statsLabel: "Actualización",
    features: [
      "Consulta automática de saldos",
      "Alertas de movimientos importantes",
      "Reportes ejecutivos personalizados",
      "Integración con múltiples bancos"
    ],
    gradient: "from-[#9b2d8a] to-[#c41e7a]",
    color: "#9b2d8a"
  },
  {
    id: "finiquitos",
    title: "Finiquitos",
    titleShort: "Finiquitos",
    headline: "Cálculos precisos y automatizados",
    subtitle: "Gestión de término de relación laboral",
    description: "Automatiza el cálculo y generación de finiquitos.",
    icon: ScrollText,
    stats: "-90%",
    statsLabel: "Tiempo",
    features: [
      "Cálculo automático de finiquitos legales",
      "Generación de documentos oficiales",
      "Historial completo de finiquitos",
      "Cumplimiento normativo garantizado"
    ],
    gradient: "from-[#7a3a9a] to-[#9b2d8a]",
    color: "#7a3a9a"
  },
  {
    id: "cuentas-basicas",
    title: "Cuentas Básicas",
    titleShort: "Cuentas Básicas",
    headline: "Gestión contable simplificada",
    subtitle: "Registros contables automatizados",
    description: "Optimiza el registro y seguimiento de tus cuentas básicas.",
    icon: Coins,
    stats: "+50%",
    statsLabel: "Eficiencia",
    features: [
      "Registro automático de transacciones",
      "Categorización inteligente",
      "Conciliación bancaria automática",
      "Reportes financieros en tiempo real"
    ],
    gradient: "from-[#c41e7a] to-[#5a45a5]",
    color: "#c41e7a"
  },
  {
    id: "automatizacion-documental-ocr",
    title: "Automatización Documental OCR",
    titleShort: "OCR Documental",
    headline: "Extracción inteligente de datos",
    subtitle: "Digitalización y reconocimiento óptico",
    description: "Convierte documentos físicos y digitales en datos estructurados automáticamente.",
    icon: FileSearch,
    stats: "95%",
    statsLabel: "Precisión",
    features: [
      "Reconocimiento óptico de caracteres (OCR)",
      "Extracción automática de datos relevantes",
      "Clasificación inteligente de documentos",
      "Integración con tus sistemas existentes",
      "Soporte para múltiples formatos (PDF, imágenes, etc.)",
      "Reducción de ingreso manual de datos"
    ],
    gradient: "from-[#5a45a5] to-[#c41e7a]",
    color: "#5a45a5"
  }
]

// SERVICIOS
const servicios = [
  { icon: Zap, title: "Automatización de procesos", description: "Flujos automáticos, cero tareas manuales repetitivas.", color: "#c41e7a" },
  { icon: Link2, title: "Integración de sistemas", description: "Conectamos ERP, CRM y sistemas internos sin fricción.", color: "#9b2d8a" },
  { icon: Code, title: "Soluciones a Medida", description: "Plataformas personalizadas que se adaptan 100% a tu operación.", color: "#7a3a9a" }
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

// Componente Soporte Técnico
function SoporteTecnico() {
  return (
    <section id="soporte-tecnico" className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c41e7a]/10 border border-[#c41e7a]/30 text-sm mb-8">
            <Headphones className="w-4 h-4 text-[#c41e7a]" />
            <span className="text-[#c41e7a] font-medium">Soporte Técnico</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent">
              Soporte Técnico
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soporte técnico especializado para resolver tus dudas y problemas de manera rápida y eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-[#c41e7a]/40 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c41e7a] to-[#9b2d8a] flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Horario de Atención</h3>
            <p className="text-muted-foreground">Lunes a Jueves</p>
            <p className="text-foreground font-semibold text-lg mt-1">9:00 - 18:00 hrs</p>
            <p className="text-muted-foreground mt-2">Viernes</p>
            <p className="text-foreground font-semibold text-lg">9:00 - 17:00 hrs</p>
          </div>

          <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-[#9b2d8a]/40 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9b2d8a] to-[#7a3a9a] flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Correo Electrónico</h3>
            <p className="text-muted-foreground">Escribenos a:</p>
            <a href="mailto:micuenta@ofimundo.cl" className="text-[#c41e7a] font-semibold hover:underline">
              micuenta@ofimundo.cl
            </a>
          </div>

          <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-[#7a3a9a]/40 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7a3a9a] to-[#5a45a5] flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Teléfono</h3>
            <p className="text-muted-foreground">Llámanos al:</p>
            <a href="tel:+56228104700" className="text-[#9b2d8a] font-semibold hover:underline">
              +56 2 2810 4700
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Customer Success - ACTUALIZADO con solo 3 conceptos
function CustomerSuccess() {
  return (
    <section id="customer-success" className="py-24 px-4 scroll-mt-20 bg-gradient-to-b from-transparent to-[#c41e7a]/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#9b2d8a]/10 border border-[#9b2d8a]/30 text-sm mb-8">
            <Users className="w-4 h-4 text-[#9b2d8a]" />
            <span className="text-[#9b2d8a] font-medium">Éxito del Cliente</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Customer{" "}
            <span className="bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todos nuestros clientes cuentan con un Customer Success Manager dedicado para maximizar el valor de nuestras soluciones.
          </p>
        </div>

        {/* Grid de 3 conceptos */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {/* Atención Personalizada */}
          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-[#c41e7a]/40 transition-all hover:scale-105 group">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c41e7a]/20 to-[#9b2d8a]/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Star className="w-10 h-10 text-[#c41e7a]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Atención Personalizada</h3>
            <p className="text-sm text-muted-foreground">Un ejecutivo dedicado para tu empresa</p>
          </div>

          {/* Acompañamiento Estratégico */}
          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-[#9b2d8a]/40 transition-all hover:scale-105 group">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#9b2d8a]/20 to-[#7a3a9a]/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Handshake className="w-10 h-10 text-[#9b2d8a]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Acompañamiento Estratégico</h3>
            <p className="text-sm text-muted-foreground">Visión experta para potenciar tus resultados</p>
          </div>

          {/* Evolución Continua */}
          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-[#7a3a9a]/40 transition-all hover:scale-105 group">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7a3a9a]/20 to-[#5a45a5]/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Rocket className="w-10 h-10 text-[#7a3a9a]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Evolución Continua</h3>
            <p className="text-sm text-muted-foreground">Tu solución crece junto a tu negocio</p>
          </div>
        </div>

        {/* Beneficios y Resultados - sin cambios */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-card/50 border border-border">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#c41e7a]" />
              Beneficios Exclusivos
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Zap className="w-4 h-4 text-[#c41e7a] mt-0.5" />
                <span>Onboarding personalizado</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MessageSquare className="w-4 h-4 text-[#9b2d8a] mt-0.5" />
                <span>Asesoría estratégica mensual</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-[#7a3a9a] mt-0.5" />
                <span>Revisiones trimestrales de rendimiento</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Users className="w-4 h-4 text-[#5a45a5] mt-0.5" />
                <span>Acceso prioritario a nuevas funcionalidades</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card/50 border border-border">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#9b2d8a]" />
              Resultados Garantizados
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-[#c41e7a] mt-0.5" />
                <span>Reducción significativa en tiempos operativos</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-[#c41e7a] mt-0.5" />
                <span>Soporte prioritario con respuesta ágil</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-[#c41e7a] mt-0.5" />
                <span>Actualizaciones y mejoras continuas sin costo adicional</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-[#c41e7a] mt-0.5" />
                <span>Dashboard personalizado con KPIs de tu negocio</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [activeSolution, setActiveSolution] = useState(0)
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % solutions.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleSolution = (idx: number) => {
    setExpandedSolution(expandedSolution === idx ? null : idx)
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background">
      <SimpleNavbar />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c41e7a]/30 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9b2d8a]/30 rounded-full blur-[128px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#c41e7a]/20 to-[#5a45a5]/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c41e7a]/10 border border-[#c41e7a]/30 text-sm mb-8">
              <Sparkles className="w-4 h-4 text-[#c41e7a]" />
              <span className="text-[#c41e7a] font-medium">🎁 Prueba gratuita por 3 meses - Cupo limitado</span>
            </div>
            
            <h1 className="text-6xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-foreground">Deja de perder tiempo en tareas manuales</span>
              <span className="block bg-gradient-to-r from-[#c41e7a] via-[#e83e8c] to-[#5a45a5] bg-clip-text text-transparent mt-2">
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Automatizamos tus procesos para que tu equipo produzca más, con menos errores y en menos tiempo.
            </p>

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
          
          <div className="grid md:grid-cols-3 gap-6">
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

      {/* RESULTADOS SECTION */}
      <section id="resultados" className="py-24 px-4 bg-gradient-to-b from-transparent to-[#c41e7a]/5 scroll-mt-20">
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
      <section id="proceso" className="py-24 px-4 scroll-mt-20">
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

      {/* SOLUCIONES SECTION */}
      <section id="soluciones" className="py-24 px-4 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Nuestras
              <span className="bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent ml-3">
                Soluciones
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">Tecnología de vanguardia para transformar tu negocio</p>
            <p className="text-sm text-muted-foreground mt-2">✨ Los hexágonos cambian automáticamente - Haz clic en cualquier solución para ver más detalles ✨</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-12">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon
              const isActive = activeSolution === idx
              const isExpanded = expandedSolution === idx
              
              return (
                <div
                  key={idx}
                  className="relative group cursor-pointer transition-all duration-300"
                  onClick={() => toggleSolution(idx)}
                >
                  <div className={`relative transition-all duration-300 ${isActive || isExpanded ? 'transform scale-110' : 'hover:scale-105'}`}>
                    <svg viewBox="0 0 160 150" className="w-full h-auto drop-shadow-md">
                      <defs>
                        <linearGradient id={`hexGradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={solution.color} stopOpacity={isActive || isExpanded ? "0.45" : "0.2"} />
                          <stop offset="100%" stopColor={solution.color} stopOpacity={isActive || isExpanded ? "0.3" : "0.1"} />
                        </linearGradient>
                        <linearGradient id={`hexBorder-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={solution.color} stopOpacity={isActive || isExpanded ? "1" : "0.5"} />
                          <stop offset="100%" stopColor={solution.color} stopOpacity={isActive || isExpanded ? "0.8" : "0.3"} />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="80,10 150,50 150,100 80,140 10,100 10,50"
                        fill={`url(#hexGradient-${idx})`}
                        stroke={`url(#hexBorder-${idx})`}
                        strokeWidth={isActive || isExpanded ? "2.5" : "1.5"}
                        className="transition-all duration-300"
                        style={{
                          filter: isActive || isExpanded ? `drop-shadow(0 0 20px ${solution.color}99)` : "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                        }}
                      />
                    </svg>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3">
                      <Icon className={`w-7 h-7 mb-2 transition-all duration-300 ${isActive || isExpanded ? 'scale-110' : ''}`} style={{ color: isActive || isExpanded ? solution.color : "#888" }} />
                      <h3 className={`text-[11px] font-bold text-center px-1 leading-tight transition-all duration-300 ${isActive || isExpanded ? 'text-foreground' : 'text-foreground/80'}`}>
                        {solution.titleShort}
                      </h3>
                      <div className={`inline-flex items-baseline gap-0.5 px-1.5 py-0.5 rounded-full mt-1.5 text-[9px] ${isActive || isExpanded ? 'bg-opacity-25' : 'bg-muted/50'}`} style={{ backgroundColor: isActive || isExpanded ? `${solution.color}40` : undefined }}>
                        <span style={{ color: isActive || isExpanded ? solution.color : "#999" }} className="font-bold">{solution.stats}</span>
                        <span className="text-muted-foreground text-[8px]">{solution.statsLabel}</span>
                      </div>
                      <div className={`absolute bottom-2 right-2 w-5 h-5 rounded-full bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${isActive || isExpanded ? 'scale-110' : ''}`}>
                        <Plus className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {expandedSolution !== null && (
            <div className="max-w-4xl mx-auto mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-2xl border-2 p-8 shadow-xl transition-all duration-500" style={{ borderColor: `${solutions[expandedSolution].color}80` }}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${solutions[expandedSolution].gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    {(() => {
                      const Icon = solutions[expandedSolution].icon
                      return <Icon className="w-10 h-10 text-white" />
                    })()}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{solutions[expandedSolution].title}</h3>
                      <button 
                        onClick={() => setExpandedSolution(null)}
                        className="text-muted-foreground hover:text-[#c41e7a] transition-colors p-1 text-xl"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-base font-semibold mb-3" style={{ color: solutions[expandedSolution].color }}>{solutions[expandedSolution].subtitle}</p>
                    <p className="text-lg text-foreground/80 mb-5">{solutions[expandedSolution].headline}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {solutions[expandedSolution].features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: solutions[expandedSolution].color }} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: `${solutions[expandedSolution].color}20`, color: solutions[expandedSolution].color }}>
                        {solutions[expandedSolution].stats} {solutions[expandedSolution].statsLabel}
                      </span>
                      <Link href={`/soluciones/${solutions[expandedSolution].id}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all group hover:shadow-lg hover:scale-105" style={{ background: `linear-gradient(135deg, ${solutions[expandedSolution].color}, ${solutions[expandedSolution].color}CC)`, color: 'white' }}>
                        Conocer más
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SOPORTE TÉCNICO */}
      <SoporteTecnico />

      {/* CUSTOMER SUCCESS */}
      <CustomerSuccess />

      {/* CTA FUERTE - CONTACTO */}
      <section id="contacto" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#c41e7a] via-[#9b2d8a] to-[#5a45a5]" />
            <div className="relative px-8 py-16 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Si hoy dependes de Excel, correos y tareas manuales...
              </h2>
              <p className="text-xl text-white/90 mb-8 font-semibold">¡estás perdiendo dinero!</p>
              <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#c41e7a] font-bold rounded-full hover:shadow-xl transition hover:scale-105">
                Contáctanos
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