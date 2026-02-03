'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Shield } from 'lucide-react'

/**
 * Hero Section Component
 * Main landing section with compelling headline, subheadline, and CTA buttons
 * Features gradient background and animated elements
 */
export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 z-0" />
      
      {/* Animated Circles Background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-center">
          {/* Center Content */}
          <div className="space-y-8 text-center max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full w-fit mx-auto">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Protección Avanzada</span>
            </div>

            {/* Main Headline - All in gradient */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ciberseguridad
                <br />
                e Infraestructura
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Protege tu negocio con soluciones integrales de ciberseguridad e infraestructura. 
              Expertos certificados listos para defender tu empresa 24/7.
            </p>


            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-slate-800">
              <div>
                <p className="text-2xl font-bold text-cyan-400">500+</p>
                <p className="text-sm text-slate-400">Empresas Protegidas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">99.9%</p>
                <p className="text-sm text-slate-400">Disponibilidad</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">24/7</p>
                <p className="text-sm text-slate-400">Monitoreo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
