"use client"

import { Headphones, Clock, Mail, Phone, MessageCircle, CheckCircle2, Zap, Users } from "lucide-react"

export function MesaAyuda() {
  return (
    <section id="mesa-ayuda" className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c41e7a]/10 border border-[#c41e7a]/30 text-sm mb-8">
            <Headphones className="w-4 h-4 text-[#c41e7a]" />
            <span className="text-[#c41e7a] font-medium">Soporte Técnico</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mesa de{" "}
            <span className="bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] bg-clip-text text-transparent">
              Ayuda
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soporte técnico especializado para resolver tus dudas y problemas de manera rápida y eficiente.
          </p>
        </div>

        {/* Grid de servicios de soporte */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Horario */}
          <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-[#c41e7a]/40 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c41e7a] to-[#9b2d8a] flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Horario de Atención</h3>
            <p className="text-muted-foreground">Lunes a Viernes</p>
            <p className="text-foreground font-semibold text-lg mt-1">9:00 - 18:00 hrs</p>
          </div>

          {/* Email */}
          <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-[#9b2d8a]/40 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9b2d8a] to-[#7a3a9a] flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Correo Electrónico</h3>
            <p className="text-muted-foreground">Escribenos a:</p>
            <a href="mailto:soporte@ofimundo.cl" className="text-[#c41e7a] font-semibold hover:underline">
              soporte@ofimundo.cl
            </a>
          </div>

          {/* Teléfono */}
          <div className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-[#7a3a9a]/40 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7a3a9a] to-[#5a45a5] flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Teléfono</h3>
            <p className="text-muted-foreground">Llámanos al:</p>
            <a href="tel:+56229574700" className="text-[#9b2d8a] font-semibold hover:underline">
              +56 2 2957 4700 (opción 2)
            </a>
          </div>
        </div>

        {/* Ticket de soporte */}
        <div className="bg-gradient-to-r from-[#c41e7a]/10 to-[#5a45a5]/10 rounded-2xl border border-border p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c41e7a] to-[#5a45a5] flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">¿Necesitas ayuda inmediata?</h3>
                <p className="text-muted-foreground">Abrir un ticket de soporte</p>
              </div>
            </div>
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#c41e7a] to-[#9b2d8a] text-white font-semibold hover:shadow-lg transition-all hover:scale-105">
              Crear ticket
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}