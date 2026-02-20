'use client'

import { Card } from '@/components/ui/card'

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-20 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y texto */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contáctanos
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Estamos listos para ayudarte. Envía tu consulta y nos pondremos en contacto en las próximas 24 horas.
          </p>
        </div>

        {/* 3 cuadros alineados */}
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {/* Email */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
            <div className="p-6 space-y-3 text-center">
              <p className="text-sm font-semibold text-cyan-400">
                Email
              </p>

              <div className="space-y-1 text-sm md:text-base">
                <div>
                  <p className="font-semibold text-slate-100">
                    Chile
                  </p>
                  <a
                    href="mailto:contacto@mmseg.com"
                    className="text-slate-100 underline-offset-4 hover:underline"
                  >
                    contacto@mmseg.com
                  </a>
                </div>

                <div className="pt-2">
                  <p className="font-semibold text-slate-100">
                    Argentina
                  </p>
                  <a
                    href="mailto:contacto@mmseg.com"
                    className="text-slate-100 underline-offset-4 hover:underline"
                  >
                    contacto@mmseg.com
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Teléfono (sin Chile / Argentina, todo centrado) */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
            <div className="p-6 space-y-3 text-center">
              <p className="text-sm font-semibold text-cyan-400">
                Teléfono
              </p>

              <div className="space-y-2 text-sm md:text-base">
                <a
                  href="tel:+56223456789"
                  className="block text-slate-100"
                >
                  +56 2 2345 6789
                </a>
                <a
                  href="tel:+542611234567"
                  className="block text-slate-100"
                >
                  +54 261 123 4567
                </a>
              </div>
            </div>
          </Card>

          {/* Ubicación (sin Chile / Argentina a la izquierda, todo centrado) */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group">
            <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
            <div className="p-6 space-y-3 text-center">
              <p className="text-sm font-semibold text-cyan-400">
                Ubicación
              </p>

              <div className="space-y-1 text-sm md:text-base">
                <p className="text-slate-100">
                  Santiago, Chile
                </p>
                <p className="text-slate-100">
                  Mendoza, Argentina
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Aquí va tu formulario de contacto */}
        {/* <ContactForm /> */}
      </div>
    </section>
  )
}
