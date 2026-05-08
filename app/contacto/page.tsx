import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ArrowLeft, Mail, Phone, MapPin, User, Clock, Headphones, ArrowRight, Sparkles } from "lucide-react"

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c41e7a]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5a45a5]/20 rounded-full blur-[120px]" />
        
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
              Estamos para ayudarte
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-muted-foreground">
              Comunícate con nosotros para más información sobre nuestras soluciones de automatización.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            {/* Main Contact Card */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border overflow-hidden mb-10">
              <div className="bg-gradient-to-r from-[#c41e7a] to-[#5a45a5] p-10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white">Rhody Santibañez</h2>
                    <p className="text-white/80 text-lg">Ejecutivo de Ventas</p>
                  </div>
                </div>
              </div>
              
              <div className="p-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <a 
                    href="mailto:rsantibanez@ofimundo.cl"
                    className="flex items-center gap-4 p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors group border border-transparent hover:border-[#c41e7a]/30"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c41e7a] to-[#9b2d8a] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="font-semibold text-foreground text-lg">rsantibanez@ofimundo.cl</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+56229574700"
                    className="flex items-center gap-4 p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors group border border-transparent hover:border-[#c41e7a]/30"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9b2d8a] to-[#7a3a9a] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Teléfono</p>
                      <p className="font-semibold text-foreground text-lg">+56 2 2957 4700</p>
                    </div>
                  </a>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/30 border border-transparent">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7a3a9a] to-[#5a45a5] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Dirección</p>
                      <p className="font-semibold text-foreground text-lg">Av. Providencia 1208, Oficina 207</p>
                      <p className="text-muted-foreground">Providencia, Santiago, Chile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c41e7a] to-[#9b2d8a] flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Mesa de Ayuda</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nuestro equipo de soporte está disponible para resolver tus dudas y problemas técnicos durante el horario de atención.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-[#c41e7a]" />
                    <span>Lunes a Viernes: 9:00 - 18:00</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-[#c41e7a]" />
                    <span>soporte@ofimundo.cl</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9b2d8a] to-[#7a3a9a] flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Customer Success</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Clientes Premium y Plus cuentan con un Customer Success Manager dedicado para maximizar el valor de las soluciones.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-[#9b2d8a]" />
                    <span>Atención personalizada</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-[#9b2d8a]" />
                    <span>Línea directa exclusiva</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#c41e7a] via-[#9b2d8a] to-[#5a45a5]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative px-8 py-16 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  ¿Listo para automatizar?
                </h2>
                <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
                  Agenda una demostración gratuita y descubre cómo nuestras soluciones pueden transformar tu empresa.
                </p>
                <a
                  href="mailto:rsantibanez@ofimundo.cl?subject=Solicitud de demostración - Prueba gratuita 3 meses"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#c41e7a] font-bold rounded-full hover:bg-white/90 transition-colors"
                >
                  Agendar demostración
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
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
