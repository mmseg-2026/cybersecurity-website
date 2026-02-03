'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

/**
 * Contact Section Component
 * Displays contact information and contact form
 * Includes email, phone, and location details
 */
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an email service
    console.log('Form submitted:', formData)
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  // Contact information items
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contacto@mmseg.com',
      href: 'mailto:contacto@mmseg.com'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+56 2 2345 6789',
      href: 'tel:+56223456789'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Santiago, Chile',
      href: '#'
    }
        {
      icon: Phone,
      label: 'Teléfono Argentina',
      value: '+54 261 123 4567',
      href: 'tel:+542611234567'
    },
        {
      icon: MapPin,
      label: 'Ubicación Argentina',
      value: 'Mendoza, Argentina',
      href: '#'
    },
  ]

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contáctanos
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Estamos listos para ayudarte. Envía tu consulta y nos pondremos en contacto en las próximas 24 horas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information Cards */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <Card
                key={index}
                className="bg-slate-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all p-6 text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">
                  {info.label}
                </h3>
                <a
                  href={info.href}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {info.value}
                </a>
              </Card>
            )
          })}
        </div>

        {/* Contact Form */}
        <Card className="bg-slate-900/50 border-cyan-500/20 max-w-2xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Nombre Completo
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>

            {/* Company Input */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                Empresa
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Tu empresa"
                className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto..."
                required
                rows={5}
                className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 group"
            >
              Enviar Mensaje
              <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
