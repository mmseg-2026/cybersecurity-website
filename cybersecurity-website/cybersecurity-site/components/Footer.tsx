'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

/**
 * Footer Component
 * Displays company information, links, and social media
 * Includes copyright and contact details
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  // Footer link sections
  const footerSections = [
    {
      title: 'Servicios',
      links: [
        { label: 'Protección de Datos', href: '#services' },
        { label: 'Gestión de Acceso', href: '#services' },
        { label: 'Monitoreo 24/7', href: '#services' },
        { label: 'Auditorías', href: '#services' }
      ]
    },
    {
      title: 'Soluciones',
      links: [
        { label: 'Empresariales', href: '#solutions' },
        { label: 'PYME', href: '#solutions' },
        { label: 'E-commerce', href: '#solutions' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nosotros', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Carreras', href: '#' },
        { label: 'Contacto', href: '#contact' }
      ]
    }
  ]

  // Social media links
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ]

  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo-solo.png"
                  alt="MMSEG Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                MMSEG
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Soluciones integrales de ciberseguridad e infraestructura para proteger tu negocio.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5 text-slate-300 hover:text-white" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-slate-100 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8">
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <a href="mailto:contacto@mmseg.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  contacto@mmseg.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-500">Teléfono</p>
                <a href="tel:+56223456789" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  +56 2 2345 6789
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-500">Ubicación</p>
                <p className="text-slate-300">Santiago, Chile</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} MMSEG Ciberseguridad. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
