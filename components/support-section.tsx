import { UserCheck, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SupportSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soporte
          </h2>
          <p className="text-xl text-[#C41E7A] font-semibold">
            ¡Acompañándote en cada paso!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] flex items-center justify-center mb-6">
                <UserCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Customer Success Manager
              </h3>
              <p className="text-muted-foreground">
                Tienes un Ejecutivo asignado que es tu contacto directo en Ofimundo. Su misión es ayudarte a optimizar tu cuenta, resolver dudas y gestionar cualquier requerimiento que necesites.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] flex items-center justify-center mb-6">
                <Headphones className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Soporte cuando lo necesites
              </h3>
              <p className="text-muted-foreground">
                Si necesitas asistencia técnica o resolver inquietudes operativas, también puedes contar con nuestra Mesa de Ayuda.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="text-center mt-12 text-lg text-muted-foreground max-w-2xl mx-auto">
          ¡Estamos aquí para apoyarte y hacer tu experiencia más sencilla y eficiente!
        </p>
      </div>
    </section>
  )
}
