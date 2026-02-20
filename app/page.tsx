import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Solutions } from '@/components/Solutions'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ChatBot } from '@/components/ChatBot'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section - Main landing area with headline and CTAs */}
      <Hero />

      {/* Services Section - 6 core services offered */}
      <Services />

      {/* Solutions Section - 3 solution types for diferentes tamaños de negocio */}
      <Solutions />

      {/* Contact Section - Contact form and information */}
      <Contact />

      {/* Footer - Company info and links */}
      <Footer />

      {/* AI ChatBot - Floating widget for customer support */}
      <ChatBot />
    </main>
  )
}
