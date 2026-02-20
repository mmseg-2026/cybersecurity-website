'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building2, Briefcase, ShoppingCart } from 'lucide-react'

export function Solutions() {
  const solutions = [
    {
      icon: Building2,
      title: 'Soluciones Empresariales',
      description: 'Infraestructura de seguridad de nivel enterprise con cumplimiento normativo completo.',
      benefits: [
        'Arquitectura multi-capa',
        'Cumplimiento ISO 27001',
        'Soporte dedicado 24/7',
        'SLA garantizado 99.99%',
      ],
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: Briefcase,
      title: 'Soluciones PYME',
      description: 'Protección asequible y escalable diseñada para pequeñas y medianas empresas.',
      benefits: [
        'Implementación rápida',
        'Costos predecibles',
        'Escalabilidad flexible',
        'Soporte técnico incluido',
      ],
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      icon: ShoppingCart,
      title: 'Soluciones E-commerce',
      description: 'Seguridad especializada para tiendas online con protección de pagos y datos de clientes.',
      benefits: [
        'PCI DSS Compliance',
        'Protección de pagos',
        'Prevención de fraude',
        'Certificado SSL/TLS',
      ],
      color: 'from-blue-400 via-cyan-300 to-blue-300',
    },
  ]

  return (
    <section id="solutions" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Soluciones Personalizadas
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Cada negocio es único. Ofrecemos soluciones adaptadas a tus necesidades específicas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-1 bg-gradient-to-r ${solution.color}`} />

                <div className="p-8 space-y-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${solution.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100">
                    {solution.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-3">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-r ${solution.color}`}
                        />
                        <span className="text-slate-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full bg-gradient-to-r ${solution.color} hover:opacity-90 text-white border-0 group/btn`}
                  >
                    Más Información
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
