"use client"

import { Users, Star, TrendingUp, Award, CheckCircle2, Phone, Mail, Calendar, MessageSquare, Zap, Target, Heart } from "lucide-react"

export function CustomerSuccess() {
  return (
    <section id="customer-success" className="py-24 px-4 scroll-mt-20 bg-gradient-to-b from-transparent to-[#c41e7a]/5">
      <div className="container mx-auto max-w-6xl">
        {/* Encabezado */}
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
            Clientes Premium y Plus cuentan con un Customer Success Manager dedicado para maximizar el valor de nuestras soluciones.
          </p>
        </div>

        {/* Beneficios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-[#c41e7a]/40 transition-all hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c41e7a]/20 to-[#9b2d8a]/20 flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-[#c41e7a]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Atención Personalizada</h3>
            <p className="text-sm text-muted-foreground">Un ejecutivo dedicado para tu empresa</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-[#9b2d8a]/40 transition-all hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9b2d8a]/20 to-[#7a3a9a]/20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-[#9b2d8a]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Optimización Continua</h3>
            <p className="text-sm text-muted-foreground">Mejora constante de procesos</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-[#7a3a9a]/40 transition-all hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7a3a9a]/20 to-[#5a45a5]/20 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-[#7a3a9a]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Capacitación Incluida</h3>
            <p className="text-sm text-muted-foreground">Entrenamiento para tu equipo</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-[#5a45a5]/40 transition-all hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5a45a5]/20 to-[#c41e7a]/20 flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#5a45a5]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Métricas de Éxito</h3>
            <p className="text-sm text-muted-foreground">Reportes personalizados de rendimiento</p>
          </div>
        </div>

        {/* Contacto Customer Success */}
        <div className="bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Heart className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">¿Eres cliente Premium o Plus?</h3>
                <p className="text-white/80">Tu Customer Success Manager está listo para atenderte</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a 
                href="mailto:success@ofimundo.cl"
                className="px-5 py-2.5 rounded-full bg-white text-[#c41e7a] font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                success@ofimundo.cl
              </a>
              <a 
                href="tel:+56229574700"
                className="px-5 py-2.5 rounded-full bg-white/20 text-white font-semibold hover:bg-white/30 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Línea directa
              </a>
            </div>
          </div>
        </div>

        {/* Features destacados */}
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
                <span>Reducción mínima del 40% en tiempos operativos</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-[#c41e7a] mt-0.5" />
                <span>Soporte prioritario con respuesta en menos de 2 horas</span>
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