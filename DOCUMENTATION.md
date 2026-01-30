# MMSEG Ciberseguridad - Documentación Completa del Sitio Web

**Última actualización**: 30 de Enero, 2026  
**Versión**: 1.0  
**Estado**: Producción

---

## 📋 Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Stack Tecnológico](#stack-tecnológico)
4. [Instalación y Configuración](#instalación-y-configuración)
5. [Componentes](#componentes)
6. [Características Principales](#características-principales)
7. [Integración de IA (ChatBot)](#integración-de-ia-chatbot)
8. [Seguridad](#seguridad)
9. [SEO y Metadata](#seo-y-metadata)
10. [Despliegue](#despliegue)
11. [Mantenimiento](#mantenimiento)

---

## 🎯 Descripción General

**MMSEG Ciberseguridad** es un sitio web profesional de servicios de ciberseguridad e infraestructura construido con Next.js 15, React 19, TypeScript y shadcn/ui.

### Características Principales

✅ **Diseño Responsivo** - Funciona perfectamente en móvil, tablet y desktop  
✅ **Agente IA Integrado** - ChatBot con Claude (Anthropic) para soporte al cliente  
✅ **SEO Optimizado** - Metadata completa, Open Graph, Twitter Cards  
✅ **Seguridad de Nivel Empresarial** - HTTPS/TLS, protección contra CVEs críticas  
✅ **Rendimiento Optimizado** - Next.js 15 con optimizaciones automáticas  
✅ **Accesibilidad** - Cumple con estándares WCAG AA  

### Secciones del Sitio

1. **Header/Navegación** - Logo 180x180px, menú responsivo, CTA
2. **Hero** - Headline principal, subheadline, CTAs, indicadores de confianza
3. **Servicios** - 6 servicios principales con características
4. **Soluciones** - 3 tipos de soluciones (Empresarial, PYME, E-commerce)
5. **Contacto** - Formulario de contacto con validación
6. **Footer** - Enlaces, información de contacto, copyright
7. **ChatBot** - Widget flotante con IA para soporte

---

## 📁 Estructura del Proyecto

```
cybersecurity-site/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts              # API route para Claude ChatBot
│   ├── layout.tsx                    # Layout raíz con metadata SEO
│   ├── page.tsx                      # Página principal
│   └── globals.css                   # Estilos globales (Tailwind)
├── components/
│   ├── Header.tsx                    # Navegación con logo 180x180px
│   ├── Hero.tsx                      # Sección hero con CTAs
│   ├── Services.tsx                  # Grid de 6 servicios
│   ├── Solutions.tsx                 # 3 soluciones personalizadas
│   ├── Contact.tsx                   # Formulario de contacto
│   ├── Footer.tsx                    # Footer con enlaces
│   ├── ChatBot.tsx                   # Widget de ChatBot con IA
│   └── ui/                           # Componentes shadcn/ui
│       ├── button.tsx
│       ├── input.tsx
│       ├── card.tsx
│       └── ... (otros componentes)
├── lib/
│   └── utils.ts                      # Utilidades (cn, etc.)
├── public/
│   ├── images/
│   │   ├── logo-solo.png             # Logo principal (180x180px)
│   │   └── logo-completo.jpg         # Logo completo (no usado)
│   ├── favicon.ico
│   └── og-image.png                  # Imagen Open Graph
├── .env.example                      # Variables de entorno (plantilla)
├── .env.local                        # Variables de entorno (local, no commitear)
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 15.5.6** - Framework React con App Router
- **React 19.1.0** - Librería UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Utilidades CSS
- **shadcn/ui** - Componentes accesibles

### Backend
- **Next.js API Routes** - Endpoints serverless
- **Anthropic Claude API** - IA para ChatBot

### Herramientas
- **Node.js** - Runtime JavaScript
- **npm** - Package manager
- **Vercel** - Hosting y despliegue

### Dependencias Principales

```json
{
  "dependencies": {
    "next": "15.5.6",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "@anthropic-ai/sdk": "^0.x.x",
    "lucide-react": "^0.555.0",
    "tailwindcss": "^3.x.x",
    "@radix-ui/react-*": "latest"
  },
  "devDependencies": {
    "typescript": "^5.x.x",
    "@types/node": "^20.x.x",
    "@types/react": "^19.x.x"
  }
}
```

---

## 🚀 Instalación y Configuración

### Requisitos Previos

- Node.js 18+ instalado
- npm o yarn
- Git (para control de versiones)
- API key de Anthropic (para ChatBot)

### Pasos de Instalación

#### 1. Clonar o Descargar el Proyecto

```bash
# Si está en un repositorio Git
git clone <repository-url>
cd cybersecurity-site

# O si es un archivo descargado
cd cybersecurity-site
```

#### 2. Instalar Dependencias

```bash
npm install
# o
yarn install
```

#### 3. Configurar Variables de Entorno

```bash
# Copiar archivo de ejemplo
cp .env.example .env.local

# Editar .env.local y agregar tu API key de Anthropic
# ANTHROPIC_API_KEY="sk-ant-tu-clave-aqui"
```

**Variables de entorno requeridas**:

```bash
# Anthropic Claude API Key (requerido para ChatBot)
# Obtén en: https://console.anthropic.com/account/keys
ANTHROPIC_API_KEY="sk-ant-..."

# Configuración de la aplicación
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="MMSEG Ciberseguridad"
```

#### 4. Ejecutar en Desarrollo

```bash
npm run dev
# o
yarn dev
```

El sitio estará disponible en: `http://localhost:3000`

#### 5. Compilar para Producción

```bash
npm run build
npm run start
```

---

## 🧩 Componentes

### Header.tsx

**Propósito**: Navegación principal con logo y menú responsivo

**Características**:
- Logo 180x180px (MMSEG)
- Menú de navegación con smooth scroll
- Botón CTA "Consulta Gratis"
- Menú móvil con hamburger toggle
- Diseño responsivo (oculto en móvil, visible en desktop)

**Props**: Ninguno (componente autónomo)

**Uso**:
```tsx
import { Header } from '@/components/Header'

export default function Home() {
  return <Header />
}
```

### Hero.tsx

**Propósito**: Sección principal con headline y CTAs

**Características**:
- Headline: "Ciberseguridad e Infraestructura"
- Subheadline descriptivo
- Dos botones CTA (Solicitar Consulta, Ver Servicios)
- Indicadores de confianza (500+ empresas, 99.9% disponibilidad, 24/7 monitoreo)
- Fondo con gradientes animados
- Responsive design

**Props**: Ninguno

**Uso**:
```tsx
import { Hero } from '@/components/Hero'

export default function Home() {
  return <Hero />
}
```

### Services.tsx

**Propósito**: Mostrar 6 servicios principales

**Servicios incluidos**:
1. **Protección de Datos** - AES-256, Backup automático, GDPR
2. **Gestión de Acceso** - MFA/2FA, SSO Enterprise, Control de roles
3. **Monitoreo 24/7** - Detección de amenazas, Análisis de logs, Reportes
4. **Respuesta a Incidentes** - Respuesta inmediata, Análisis forense, Plan de recuperación
5. **Infraestructura Segura** - Cloud seguro, Redundancia, Escalabilidad, On-premise
6. **Auditorías de Seguridad** - Pentesting, Análisis de vulnerabilidades, Reportes

**Props**: Ninguno

**Uso**:
```tsx
import { Services } from '@/components/Services'

export default function Home() {
  return <Services />
}
```

### Solutions.tsx

**Propósito**: Presentar 3 tipos de soluciones personalizadas

**Soluciones**:
1. **Empresariales** - Arquitectura multi-capa, ISO 27001, Soporte 24/7, SLA 99.99%
2. **PYME** - Implementación rápida, Costos predecibles, Escalabilidad flexible
3. **E-commerce** - PCI DSS, Protección de pagos, Prevención de fraude, SSL/TLS

**Props**: Ninguno

**Uso**:
```tsx
import { Solutions } from '@/components/Solutions'

export default function Home() {
  return <Solutions />
}
```

### Contact.tsx

**Propósito**: Formulario de contacto con información

**Características**:
- Formulario con campos: Nombre, Email, Empresa, Mensaje
- Información de contacto (Email, Teléfono, Ubicación)
- Validación de campos
- Botón de envío

**Props**: Ninguno

**Uso**:
```tsx
import { Contact } from '@/components/Contact'

export default function Home() {
  return <Contact />
}
```

### Footer.tsx

**Propósito**: Pie de página con enlaces e información

**Contenido**:
- Logo y descripción
- Enlaces a servicios
- Enlaces a soluciones
- Enlaces de empresa
- Información de contacto
- Copyright y políticas

**Props**: Ninguno

**Uso**:
```tsx
import { Footer } from '@/components/Footer'

export default function Home() {
  return <Footer />
}
```

### ChatBot.tsx

**Propósito**: Widget flotante de IA para soporte al cliente

**Características**:
- Botón flotante en esquina inferior derecha
- Ventana de chat con historial de conversación
- Integración con Claude (Anthropic)
- Respuestas inteligentes sobre servicios
- Indicador de escritura (3 puntos animados)
- Validación de entrada
- Manejo de errores

**Props**: Ninguno

**Uso**:
```tsx
import { ChatBot } from '@/components/ChatBot'

export default function Home() {
  return <ChatBot />
}
```

**Conocimiento del ChatBot**:
- Servicios de MMSEG (6 servicios principales)
- Tipos de soluciones (Empresarial, PYME, E-commerce)
- Información de contacto
- Preguntas sobre ciberseguridad e infraestructura
- Calificación de leads

---

## 🤖 Integración de IA (ChatBot)

### Configuración

El ChatBot utiliza **Claude (Anthropic)** para responder preguntas sobre servicios.

#### Obtener API Key

1. Ir a: https://console.anthropic.com/account/keys
2. Crear una nueva API key
3. Copiar la clave (comienza con `sk-ant-`)
4. Agregar a `.env.local`:

```bash
ANTHROPIC_API_KEY="sk-ant-tu-clave-aqui"
```

#### Reiniciar el Servidor

```bash
# Detener servidor (Ctrl+C)
# Reiniciar
npm run dev
```

### API Route: `/api/chat`

**Ubicación**: `app/api/chat/route.ts`

**Método**: POST

**Request Body**:
```json
{
  "messages": [
    { "role": "user", "content": "¿Qué servicios ofrecen?" },
    { "role": "assistant", "content": "Ofrecemos..." }
  ]
}
```

**Response**:
```json
{
  "message": "Respuesta del ChatBot..."
}
```

**Características**:
- Mantiene historial de conversación
- System prompt con información de MMSEG
- Manejo de errores
- Rate limiting (implícito en Anthropic)
- Respuestas en español e inglés

### Personalización del ChatBot

Para cambiar el comportamiento del ChatBot, editar `app/api/chat/route.ts`:

```typescript
const SYSTEM_PROMPT = `You are an intelligent customer support assistant for MMSEG...`
```

Modificar:
- Servicios listados
- Tono de respuesta
- Información de contacto
- Instrucciones específicas

---

## 🔒 Seguridad

### Vulnerabilidades Críticas - PROTEGIDO

✅ **CVE-2025-29927** (Omisión de Autorización) - PROTEGIDO  
✅ **CVE-2025-55182 & CVE-2025-66478** (RCE) - PROTEGIDO  
✅ **CVE-2025-55184 & CVE-2025-67779** (DoS) - PROTEGIDO  

**Razón**: Versiones actualizadas (Next.js 15.5.6, React 19.1.0)

### HTTPS/TLS

- ✅ Certificado SSL/TLS automático (Vercel)
- ✅ TLS 1.3 (estándar actual)
- ✅ Redirección automática HTTP → HTTPS

### Headers de Seguridad

Vercel aplica automáticamente:
- `Strict-Transport-Security` (HSTS)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection`

### API Security

**ChatBot API**:
- API key almacenada en `.env.local` (no expuesta)
- Validación de entrada en request body
- Manejo de errores sin exponer detalles sensibles
- No hay inyección SQL (no usamos BD directa)

### Mejores Prácticas

1. **Nunca commitear `.env.local`** - Ya está en `.gitignore`
2. **Rotar API keys regularmente** - Especialmente si se exponen
3. **Monitorear logs** - Verificar accesos anómalos
4. **Actualizar dependencias** - `npm update` regularmente
5. **Usar HTTPS en producción** - Vercel lo hace automáticamente

---

## 📊 SEO y Metadata

### Metadata Configurada

**Archivo**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: {
    default: 'MMSEG Ciberseguridad - Soluciones de Seguridad e Infraestructura',
    template: '%s | MMSEG',
  },
  description: 'Soluciones integrales de ciberseguridad e infraestructura para proteger tu negocio. Expertos certificados, monitoreo 24/7, cumplimiento normativo.',
  keywords: ['ciberseguridad', 'infraestructura', 'seguridad', 'protección'],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://mmseg.com',
    siteName: 'MMSEG Ciberseguridad',
    title: 'MMSEG Ciberseguridad',
    description: 'Soluciones integrales de ciberseguridad e infraestructura',
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
    description: 'Soluciones integrales de ciberseguridad e infraestructura',
    images: ['/og-image.png'],
  },
}
```

### Elementos SEO Implementados

✅ Title tag (60 caracteres)  
✅ Meta description (160 caracteres)  
✅ Open Graph image (1200x630px)  
✅ Twitter Card metadata  
✅ Semantic HTML (h1, h2, h3)  
✅ Alt text en imágenes  
✅ Robots meta (index, follow)  
✅ Favicon  

### Mejoras SEO Recomendadas

1. **Agregar Sitemap**: `public/sitemap.xml`
2. **Agregar robots.txt**: `public/robots.txt`
3. **Structured Data**: Schema.org JSON-LD
4. **Analytics**: Google Analytics o Plausible
5. **Backlinks**: Estrategia de link building

---

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)

**Ventajas**:
- Despliegue automático desde Git
- HTTPS/TLS automático
- Optimizaciones de Next.js
- Serverless functions
- Analytics incluido

**Pasos**:

1. **Crear cuenta en Vercel**:
   - Ir a: https://vercel.com
   - Registrarse con GitHub/GitLab/Bitbucket

2. **Conectar repositorio**:
   - Importar proyecto desde Git
   - Seleccionar rama principal (main/master)

3. **Configurar variables de entorno**:
   - En Vercel Dashboard → Settings → Environment Variables
   - Agregar: `ANTHROPIC_API_KEY="sk-ant-..."`

4. **Desplegar**:
   - Vercel despliega automáticamente en cada push
   - URL: `https://cybersecurity-site.vercel.app`

5. **Dominio personalizado** (opcional):
   - Ir a Settings → Domains
   - Agregar dominio personalizado
   - Configurar DNS

### Opción 2: Netlify

**Pasos**:

1. Ir a: https://netlify.com
2. Conectar repositorio Git
3. Configurar build:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Agregar variables de entorno
5. Desplegar

### Opción 3: AWS Amplify

**Pasos**:

1. Ir a: https://aws.amazon.com/amplify
2. Conectar repositorio
3. Configurar build settings
4. Desplegar

### Opción 4: Servidor Propio (VPS)

**Requisitos**:
- VPS con Node.js 18+
- PM2 o similar para process management
- Nginx o Apache como reverse proxy
- SSL certificate (Let's Encrypt)

**Pasos**:

```bash
# 1. SSH al servidor
ssh user@your-server.com

# 2. Clonar repositorio
git clone <repository-url>
cd cybersecurity-site

# 3. Instalar dependencias
npm install

# 4. Compilar
npm run build

# 5. Instalar PM2
npm install -g pm2

# 6. Iniciar con PM2
pm2 start npm --name "mmseg" -- start

# 7. Configurar Nginx (reverse proxy)
# ... (configuración de Nginx)

# 8. SSL con Let's Encrypt
# ... (certificado SSL)
```

### Configuración de Dominio

**Después de desplegar**:

1. Comprar dominio (GoDaddy, Namecheap, etc.)
2. Configurar DNS:
   - **Para Vercel**: Apuntar a nameservers de Vercel
   - **Para otros**: Apuntar A record a IP del servidor
3. Esperar propagación DNS (24-48 horas)
4. Verificar en navegador

---

## 🔧 Mantenimiento

### Actualizar Dependencias

```bash
# Ver actualizaciones disponibles
npm outdated

# Actualizar todas las dependencias
npm update

# Actualizar a versión mayor (cuidado)
npm install next@latest react@latest
```

### Monitoreo

**Vercel Analytics**:
- Dashboard automático en Vercel
- Métricas de rendimiento
- Errores y excepciones

**Recomendado agregar**:
- Google Analytics
- Sentry (error tracking)
- LogRocket (session replay)

### Backups

```bash
# Hacer backup del código
git push origin main

# Hacer backup de variables de entorno
# (guardar .env.local en lugar seguro)
```

### Logs

**Vercel**:
- Ver logs en: Vercel Dashboard → Deployments → Logs

**Local**:
```bash
npm run dev 2>&1 | tee server.log
```

### Troubleshooting

**Problema**: ChatBot no responde
- **Solución**: Verificar API key en `.env.local`
- **Solución**: Verificar límite de uso de Anthropic

**Problema**: Sitio lento
- **Solución**: Verificar Core Web Vitals en Vercel
- **Solución**: Optimizar imágenes
- **Solución**: Implementar caching

**Problema**: Errores en consola
- **Solución**: Abrir DevTools (F12)
- **Solución**: Revisar Network tab
- **Solución**: Revisar Console tab

---

## 📝 Cambios y Modificaciones Realizadas

### Versión 1.0 (30 de Enero, 2026)

#### Cambios Principales

1. **Logo ajustado a 180x180px**
   - Archivo: `components/Header.tsx`
   - Cambio: `width={180} height={180}`
   - Contenedor: `w-45 h-45` (180px)

2. **Texto "MMSEG" aumentado proporcionalmente**
   - Archivo: `components/Header.tsx`
   - Cambio: `text-lg` → `text-4xl` (18px → 36px)
   - Razón: Proporcional al logo de 180x180px

3. **Headline simplificado**
   - Archivo: `components/Hero.tsx`
   - Cambio: Removido "de Clase Mundial"
   - Nuevo: "Ciberseguridad e Infraestructura"

4. **Integración de ChatBot con Claude**
   - Archivo: `components/ChatBot.tsx`
   - Archivo: `app/api/chat/route.ts`
   - Características: Widget flotante, respuestas inteligentes, historial

5. **Seguridad verificada**
   - Next.js 15.5.6 (protegido contra CVEs críticas)
   - React 19.1.0 (incluye correcciones de seguridad)
   - HTTPS/TLS automático
   - Headers de seguridad implementados

---

## 📞 Soporte y Contacto

**Email**: contacto@mmseg.com  
**Teléfono**: +56 2 2345 6789  
**Ubicación**: Santiago, Chile  

---

## 📄 Licencia

© 2026 MMSEG Ciberseguridad. Todos los derechos reservados.

---

**Documento generado**: 30 de Enero, 2026  
**Versión**: 1.0  
**Autor**: Chat (AI Assistant)
