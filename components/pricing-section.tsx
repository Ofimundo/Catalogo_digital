import { Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const facturasPlans = [
  {
    name: "Estándar",
    price: "10",
    features: {
      "Cantidad de Facturas": "≤500",
      "Cantidad de Rut": "1",
      "Integración al ERP": true,
      "Desarrollo Integración custom": false,
      "Regla Negocio estándar": true,
      "Customización Regla Negocio": false,
      "Reporte estándar": true,
      "Customización Reporte": false,
      "Gráficas customizadas": false,
      "Notificaciones customizadas": false,
      "Horas soporte incluidas": "1"
    }
  },
  {
    name: "Premium",
    price: "16",
    popular: true,
    features: {
      "Cantidad de Facturas": "501-1000",
      "Cantidad de Rut": "1-10",
      "Integración al ERP": true,
      "Desarrollo Integración custom": true,
      "Regla Negocio estándar": false,
      "Customización Regla Negocio": true,
      "Reporte estándar": true,
      "Customización Reporte": true,
      "Gráficas customizadas": true,
      "Notificaciones customizadas": true,
      "Horas soporte incluidas": "2"
    }
  },
  {
    name: "Plus",
    price: "25",
    features: {
      "Cantidad de Facturas": ">1000",
      "Cantidad de Rut": ">10",
      "Integración al ERP": true,
      "Desarrollo Integración custom": true,
      "Regla Negocio estándar": false,
      "Customización Regla Negocio": true,
      "Reporte estándar": true,
      "Customización Reporte": true,
      "Gráficas customizadas": true,
      "Notificaciones customizadas": true,
      "Horas soporte incluidas": "3"
    }
  }
]

const saldosPlans = [
  {
    name: "Estándar",
    price: "8",
    features: {
      "Cantidad de Rut": "1",
      "Cantidad de Bancos": "≤5",
      "Reporte estándar": true,
      "Customización Reporte": false,
      "Gráficas estándar": true,
      "Customización Gráficas": false,
      "Notificación estándar": true,
      "Customización Notificación": false,
      "Horas soporte incluidas": "1"
    }
  },
  {
    name: "Premium",
    price: "13",
    popular: true,
    features: {
      "Cantidad de Rut": "hasta 10",
      "Cantidad de Bancos": ">5",
      "Reporte estándar": true,
      "Customización Reporte": true,
      "Gráficas estándar": true,
      "Customización Gráficas": true,
      "Notificación estándar": true,
      "Customización Notificación": true,
      "Horas soporte incluidas": "2"
    }
  }
]

const finiquitosPlans = [
  {
    name: "Estándar",
    price: "10",
    features: {
      "Cantidad de Rut": "1",
      "Cantidad de Finiquitos": "≤100",
      "Elaboración set documentos": true,
      "Envío automático a DT": true,
      "Integración al ERP": true,
      "Integración gestor documental": false,
      "Reporte estándar": true,
      "Customización Reporte": false,
      "Gráficas estándar": true,
      "Customización Gráficas": false,
      "Notificación estándar": true,
      "Customización Notificación": false,
      "Horas soporte incluidas": "1"
    }
  },
  {
    name: "Premium",
    price: "16",
    popular: true,
    features: {
      "Cantidad de Rut": "hasta 10",
      "Cantidad de Finiquitos": ">100",
      "Elaboración set documentos": true,
      "Envío automático a DT": true,
      "Integración al ERP": true,
      "Integración gestor documental": true,
      "Reporte estándar": true,
      "Customización Reporte": true,
      "Gráficas estándar": true,
      "Customización Gráficas": true,
      "Notificación estándar": true,
      "Customización Notificación": true,
      "Horas soporte incluidas": "2"
    }
  }
]

function PricingTable({ title, plans, notes }: { title: string; plans: typeof facturasPlans; notes: string[] }) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{title}</h3>
      <div className={`grid gap-6 ${plans.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-3'}`}>
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`border-0 shadow-lg relative ${plan.popular ? 'ring-2 ring-[#C41E7A]' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-1">UF/mes</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3">
                {Object.entries(plan.features).map(([key, value], i) => (
                  <li key={i} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{key}</span>
                    {typeof value === 'boolean' ? (
                      value ? (
                        <Check className="w-4 h-4 text-[#C41E7A]" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/50" />
                      )
                    ) : (
                      <span className="font-medium text-foreground">{value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 text-sm text-muted-foreground max-w-3xl mx-auto">
        <p className="font-semibold mb-2">Incluye:</p>
        <ul className="list-disc list-inside space-y-1">
          {notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function PricingSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#C41E7A]/5 to-[#7B2D8E]/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Precios
          </h2>
          <p className="text-lg text-muted-foreground">
            Planes adaptados a las necesidades de tu empresa
          </p>
        </div>

        <PricingTable 
          title="Aprobación / Rechazo de Facturas" 
          plans={facturasPlans}
          notes={[
            "Notificaciones: Alerta de finalización de proceso y alertas por funcionamiento anormal",
            "Conexión con SII y validación de reglas básicas",
            "Reporte diario y mensual estándar",
            "Implementación en 3 semanas para plan Estándar",
            "Toda customización está sujeta a evaluación previa"
          ]}
        />

        <PricingTable 
          title="Saldos Bancarios" 
          plans={saldosPlans}
          notes={[
            "Reportes: Reporte estándar en formato Excel con saldos consolidados diarios",
            "Gráficas: Relación Caja Deuda, Estado Línea sobregiro y Total disponible",
            "Notificaciones: Envío de correo electrónico con gráficas y reporte Excel adjunto",
            "Implementación en 1 semana para plan Estándar",
            "Toda customización está sujeta a evaluación previa"
          ]}
        />

        <PricingTable 
          title="Finiquitos DT" 
          plans={finiquitosPlans}
          notes={[
            "Notificaciones: Alerta de finalización de proceso y alertas por funcionamiento anormal",
            "Reporte estándar: Tabla de resumen con cantidad de finiquitos procesados",
            "Implementación en 3 semanas para plan Estándar",
            "Toda customización está sujeta a evaluación previa"
          ]}
        />
      </div>
    </section>
  )
}
