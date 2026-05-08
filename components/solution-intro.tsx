import { FileCheck, BarChart3, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const solutions = [
  {
    icon: FileCheck,
    title: "Aceptación y Rechazo de Facturas",
    description: "Conciliación automática de facturas con el SII"
  },
  {
    icon: BarChart3,
    title: "Reporte de Saldos y Líneas de Crédito",
    description: "Consolidado diario de tus cuentas bancarias"
  },
  {
    icon: FileText,
    title: "Emisión de Finiquitos",
    description: "Automatización de finiquitos y carga en DT"
  }
]

export function SolutionIntro() {
  return (
    <section id="soluciones" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Hoy queremos presentarte 3 soluciones de automatización
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Que hemos desarrollado y ya estamos aplicando en clientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
