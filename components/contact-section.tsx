import { Mail, Phone, MapPin, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos listos para ayudarte a automatizar tus procesos
          </p>
        </div>

        <Card className="border-0 shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] p-8 text-white text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Rhody Santibañez</h3>
            <p className="text-white/90">Sales Manager Regional</p>
          </div>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="mailto:rsantibanez@ofimundo.cl" 
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">rsantibanez@ofimundo.cl</p>
                </div>
              </a>

              <a 
                href="tel:+56228104700" 
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="font-medium text-foreground">+56 2 2810 4700</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Dirección</p>
                  <p className="font-medium text-foreground">Lota 2305, Providencia, Santiago, Chile</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
