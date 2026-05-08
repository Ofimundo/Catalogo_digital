import { Check, Clock, AlertTriangle, FileSearch } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  "Disminuir en un 99% el tiempo que esta tarea requiere manualmente.",
  "Destinar el tiempo que tu equipo tomaba en esta actividad, en actividades que de verdad te agreguen valor.",
  "Frente a una inconsistencia en relación a tus reglas de negocio, recibirás la alerta a tiempo para tomar acción."
]

const workflowSteps = [
  { icon: FileSearch, label: "Conexión con SII" },
  { icon: Clock, label: "Verificación de OC" },
  { icon: Check, label: "Validación de Reglas" },
  { icon: AlertTriangle, label: "Reporte y Alertas" }
]

export function SolutionFacturas() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#C41E7A]/5 to-[#7B2D8E]/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] text-white text-sm font-medium mb-4">
            Solución 1
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Aceptación y Rechazo de Facturas
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ¿Qué hacemos? */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] flex items-center justify-center text-white text-lg">?</span>
                ¿Qué hacemos?
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Conciliamos en línea las facturas recibidas desde el SII con la información de tu sistema de OC, verificando si existe consistencia con tus reglas de negocio.
                </p>
                <p>
                  Las reglas de negocio se personalizan de acuerdo a los requerimientos que tú tengas.
                </p>
                <p>
                  Recibirás un reporte diario con lo realizado el día anterior, alertando a tiempo en caso de encontrar alguna inconsistencia en que tengas que enfocar tu análisis.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Beneficios */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] flex items-center justify-center text-white text-lg">✓</span>
                Beneficios para ti
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C41E7A] mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Flujo de trabajo */}
        <Card className="mt-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Flujo de Trabajo de la Automatización
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] flex items-center justify-center mb-2">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground text-center max-w-[100px]">{step.label}</span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] mt-[-20px]" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
