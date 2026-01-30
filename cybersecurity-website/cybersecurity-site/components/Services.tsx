'use client'

import { Card } from '@/components/ui/card'
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Network, 
  Zap,
  CheckCircle2
} from 'lucide-react'

/**
 * Services Section Component
 * Displays core cybersecurity and infrastructure services
 * Uses card layout with icons and descriptions
 */
export function Services() {
  // Array of services with icons and descriptions
  const services = [
    {
      icon: Shield,
      title: 'Protección de Datos',
      description: 'Encriptación avanzada y políticas de seguridad para proteger tu información sensible.',
      features: ['Encriptación AES-256', 'Backup automático', 'Cumplimiento GDPR']
    },
    {
      icon: Lock,
      title: 'Gestión de Acceso',
      description: 'Control granular de permisos y autenticación multifactor para máxima seguridad.',
      features: ['MFA/2FA', 'SSO Enterprise', 'Control de roles']
    },
    {
      icon: Eye,
      title: 'Monitoreo 24/7',
      description: 'Vigilancia continua de tu infraestructura con alertas en tiempo real.',
      features: ['Detección de amenazas', 'Análisis de logs', 'Reportes diarios']
    },
    {
      icon: AlertTriangle,
      title: 'Respuesta a Incidentes',
      description: 'Equipo especializado listo para responder ante cualquier incidente de seguridad.',
      features: ['Respuesta inmediata', 'Análisis forense', 'Plan de recuperación']
    },
    {
      icon: Network,
      title: 'Infraestructura Segura',
      description: 'Diseño y gestión de infraestructura robusta y escalable en la nube.',
      features: ['Cloud seguro', 'Redundancia', 'Escalabilidad', 'On-premise']
    },
    {
      icon: Zap,
      title: 'Auditorías de Seguridad',
      description: 'Evaluaciones exhaustivas de vulnerabilidades y pruebas de penetración.',
      features: ['Pentesting', 'Análisis de vulnerabilidades', 'Reportes detallados']
    }
  ]

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Soluciones integrales de ciberseguridad e infraestructura diseñadas para proteger tu negocio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-slate-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group overflow-hidden"
              >
                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-100">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-4 border-t border-slate-800">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
