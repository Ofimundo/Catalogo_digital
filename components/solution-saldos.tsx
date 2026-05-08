import { Check, Landmark, PieChart, Send, FileSpreadsheet } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  "Tener en una vista, un panorama claro de tus cuentas y líneas de crédito.",
  "Tomar decisiones financieras rápidas y eficientes para comenzar el día."
]

const workflowSteps = [
  { icon: Landmark, label: "Acceso a Bancos" },
  { icon: FileSpreadsheet, label: "Obtención de Saldos" },
  { icon: PieChart, label: "Consolidación" },
  { icon: Send, label: "Envío de Reporte" }
]

export function SolutionSaldos() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] text-white text-sm font-medium mb-4">
            Solución 2
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reporte de Saldo y Líneas de Crédito Diario
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
                  Te entregamos un reporte diario en el cual de una forma simple, podrás ver el consolidado de tus cuentas bancarias y líneas de crédito.
                </p>
                <p>
                  Para esto, la automatización accede diariamente a tus cuentas, obtiene la información de saldos de cuenta corriente y línea de crédito, consolida esa información, ordenándola por cada razón social y bancos.
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
