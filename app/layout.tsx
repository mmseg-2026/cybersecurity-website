import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MMSEG Ciberseguridad | Soluciones de Seguridad e Infraestructura',
  description: 'Soluciones profesionales de Ciberseguridad e Infraestructura. Protege tu negocio con nuestros servicios especializados.',
  keywords: ['ciberseguridad', 'infraestructura', 'seguridad informática', 'protección de datos'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://mmseg.com',
    siteName: 'MMSEG Ciberseguridad',
    title: 'MMSEG Ciberseguridad | Soluciones de Seguridad e Infraestructura',
    description: 'Soluciones profesionales de Ciberseguridad e Infraestructura',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MMSEG Ciberseguridad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MMSEG Ciberseguridad',
    description: 'Soluciones profesionales de Ciberseguridad e Infraestructura',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 text-slate-50`}>
        {children}
      </body>
    </html>
  )
}
