'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Header Component
 * Displays the navigation bar with logo and menu items
 * Includes responsive mobile menu with hamburger toggle
 * Logo sized to 180x180px with proportionally scaled MMSEG text
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Navigation links for the header
  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Soluciones', href: '#solutions' },
    { label: 'Contacto', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-sm border-b border-cyan-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo Section - 180x180px with proportional text */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="relative w-45 h-45">
              <Image
                src="/images/logo-solo.png"
                alt="MMSEG Logo"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hidden sm:inline">
              MMSEG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0"
            >
              <a href="#contact">Consulta Gratis</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-cyan-400" />
            ) : (
              <Menu className="w-6 h-6 text-cyan-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-cyan-500/20">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-cyan-400 transition-colors py-2 px-2 rounded hover:bg-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 mt-2"
              >
                <a href="#contact">Consulta Gratis</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
