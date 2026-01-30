# 🚀 Guía Completa de Despliegue - MMSEG Ciberseguridad

**Última actualización**: 30 de Enero, 2026  
**Versión**: 1.0

---

## 📋 Tabla de Contenidos

1. [Resumen Rápido](#resumen-rápido)
2. [Opción 1: Vercel (Recomendado)](#opción-1-vercel-recomendado)
3. [Opción 2: Netlify](#opción-2-netlify)
4. [Opción 3: AWS Amplify](#opción-3-aws-amplify)
5. [Opción 4: Servidor Propio (VPS)](#opción-4-servidor-propio-vps)
6. [Configuración de Dominio Personalizado](#configuración-de-dominio-personalizado)
7. [Verificación Post-Despliegue](#verificación-post-despliegue)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 Resumen Rápido

| Opción | Dificultad | Costo | Tiempo | Recomendado |
|--------|-----------|-------|--------|-------------|
| **Vercel** | Muy Fácil | Gratis/Pago | 5 min | ✅ SÍ |
| **Netlify** | Fácil | Gratis/Pago | 10 min | ✅ SÍ |
| **AWS Amplify** | Medio | Gratis/Pago | 15 min | ⚠️ Opcional |
| **VPS Propio** | Difícil | $5-20/mes | 30+ min | ❌ No recomendado |

**Recomendación**: Usa **Vercel** - es la opción más fácil y está optimizada para Next.js.

---

## ✅ Opción 1: Vercel (Recomendado)

### ¿Por qué Vercel?

✅ Creadores de Next.js  
✅ Despliegue automático desde Git  
✅ HTTPS/TLS automático  
✅ Optimizaciones de Next.js incluidas  
✅ Serverless functions  
✅ Analytics gratis  
✅ Dominio personalizado gratis  
✅ Muy fácil de usar  

### Paso 1: Preparar el Código

```bash
# 1. Asegúrate de que el código está en Git
cd /home/code/cybersecurity-site

# 2. Inicializar Git (si no está ya)
git init
git add .
git commit -m "Initial commit: MMSEG website"

# 3. Crear repositorio en GitHub
# - Ir a: https://github.com/new
# - Crear repositorio: "cybersecurity-site"
# - Copiar URL del repositorio

# 4. Agregar repositorio remoto
git remote add origin https://github.com/tu-usuario/cybersecurity-site.git
git branch -M main
git push -u origin main
```

### Paso 2: Crear Cuenta en Vercel

1. **Ir a**: https://vercel.com
2. **Registrarse** con GitHub (recomendado):
   - Click en "Sign up with GitHub"
   - Autorizar Vercel
   - Completar perfil

### Paso 3: Importar Proyecto

1. **En Vercel Dashboard**:
   - Click en "Add New..." → "Project"
   - Seleccionar repositorio "cybersecurity-site"
   - Click en "Import"

2. **Configurar Proyecto**:
   - **Project Name**: `cybersecurity-site` (o tu nombre)
   - **Framework**: Next.js (detectado automáticamente)
   - **Root Directory**: `./` (por defecto)
   - Click en "Deploy"

### Paso 4: Configurar Variables de Entorno

1. **En Vercel Dashboard**:
   - Ir a: Settings → Environment Variables
   - Agregar variable:
     - **Name**: `ANTHROPIC_API_KEY`
     - **Value**: `sk-ant-tu-clave-aqui`
     - Click en "Add"

2. **Redeploy**:
   - Ir a: Deployments
   - Click en el último deployment
   - Click en "Redeploy"

### Paso 5: Verificar Despliegue

1. **URL automática**:
   - Vercel proporciona URL: `https://cybersecurity-site.vercel.app`
   - Visitar en navegador
   - Verificar que funciona

2. **Dominio personalizado** (opcional):
   - Ir a: Settings → Domains
   - Agregar dominio personalizado
   - Seguir instrucciones de DNS

### Paso 6: Configurar Despliegues Automáticos

**Ya está configurado automáticamente**:
- Cada push a `main` despliega automáticamente
- Cada pull request crea preview deployment
- Rollback automático si hay errores

---

## ✅ Opción 2: Netlify

### ¿Por qué Netlify?

✅ Muy fácil de usar  
✅ Despliegue automático desde Git  
✅ HTTPS/TLS automático  
✅ Buena documentación  
✅ Gratis para proyectos pequeños  

### Paso 1: Preparar Código en Git

```bash
# Mismo proceso que Vercel
cd /home/code/cybersecurity-site
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/cybersecurity-site.git
git push -u origin main
```

### Paso 2: Crear Cuenta en Netlify

1. **Ir a**: https://netlify.com
2. **Registrarse** con GitHub:
   - Click en "Sign up with GitHub"
   - Autorizar Netlify

### Paso 3: Importar Proyecto

1. **En Netlify Dashboard**:
   - Click en "Add new site" → "Import an existing project"
   - Seleccionar GitHub
   - Buscar y seleccionar "cybersecurity-site"

2. **Configurar Build**:
   - **Base directory**: `./` (por defecto)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - Click en "Deploy site"

### Paso 4: Configurar Variables de Entorno

1. **En Netlify Dashboard**:
   - Ir a: Site settings → Build & deploy → Environment
   - Click en "Edit variables"
   - Agregar:
     - **Key**: `ANTHROPIC_API_KEY`
     - **Value**: `sk-ant-tu-clave-aqui`
   - Click en "Save"

2. **Redeploy**:
   - Ir a: Deploys
   - Click en "Trigger deploy" → "Deploy site"

### Paso 5: Verificar Despliegue

- URL: `https://cybersecurity-site.netlify.app`
- Visitar en navegador
- Verificar que funciona

---

## ✅ Opción 3: AWS Amplify

### Paso 1: Preparar Código en Git

```bash
# Mismo proceso que Vercel/Netlify
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Paso 2: Crear Cuenta en AWS

1. **Ir a**: https://aws.amazon.com
2. **Crear cuenta** (requiere tarjeta de crédito)
3. **Ir a AWS Amplify**: https://console.aws.amazon.com/amplify

### Paso 3: Conectar Repositorio

1. **Click en "Create app"**
2. **Seleccionar GitHub**
3. **Autorizar AWS**
4. **Seleccionar repositorio "cybersecurity-site"**
5. **Seleccionar rama "main"**

### Paso 4: Configurar Build

1. **Build settings**:
   - **Build command**: `npm run build`
   - **Start command**: `npm start`

2. **Environment variables**:
   - Agregar: `ANTHROPIC_API_KEY=sk-ant-...`

3. **Click en "Save and deploy"**

### Paso 5: Verificar Despliegue

- URL: `https://main.xxxxx.amplifyapp.com`
- Visitar en navegador

---

## ✅ Opción 4: Servidor Propio (VPS)

### ⚠️ Advertencia

Esta opción es más compleja. Solo recomendada si:
- Tienes experiencia con servidores
- Necesitas control total
- Quieres ahorrar costos a largo plazo

### Requisitos

- VPS con Ubuntu 20.04+ (DigitalOcean, Linode, AWS EC2, etc.)
- Node.js 18+
- Nginx o Apache
- Certificado SSL (Let's Encrypt)

### Paso 1: Configurar VPS

```bash
# 1. SSH al servidor
ssh root@tu-servidor.com

# 2. Actualizar sistema
apt update && apt upgrade -y

# 3. Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# 4. Instalar PM2 (process manager)
npm install -g pm2

# 5. Instalar Nginx
apt install -y nginx

# 6. Instalar Certbot (SSL)
apt install -y certbot python3-certbot-nginx
```

### Paso 2: Clonar Proyecto

```bash
# 1. Crear directorio
mkdir -p /var/www/cybersecurity-site
cd /var/www/cybersecurity-site

# 2. Clonar repositorio
git clone https://github.com/tu-usuario/cybersecurity-site.git .

# 3. Instalar dependencias
npm install

# 4. Compilar
npm run build
```

### Paso 3: Configurar Variables de Entorno

```bash
# Crear archivo .env.local
cat > .env.local << 'ENVFILE'
ANTHROPIC_API_KEY="sk-ant-tu-clave-aqui"
NEXT_PUBLIC_APP_URL="https://tu-dominio.com"
ENVFILE
```

### Paso 4: Iniciar con PM2

```bash
# 1. Iniciar aplicación
pm2 start npm --name "mmseg" -- start

# 2. Guardar configuración
pm2 save

# 3. Configurar para reiniciar en boot
pm2 startup
```

### Paso 5: Configurar Nginx

```bash
# Crear archivo de configuración
cat > /etc/nginx/sites-available/cybersecurity-site << 'NGINX'
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX

# Habilitar sitio
ln -s /etc/nginx/sites-available/cybersecurity-site /etc/nginx/sites-enabled/

# Probar configuración
nginx -t

# Reiniciar Nginx
systemctl restart nginx
```

### Paso 6: Configurar SSL

```bash
# Obtener certificado SSL
certbot --nginx -d tu-dominio.com -d www.tu-dominio.com

# Renovación automática
systemctl enable certbot.timer
```

### Paso 7: Verificar

```bash
# Verificar que PM2 está corriendo
pm2 status

# Ver logs
pm2 logs mmseg

# Verificar Nginx
systemctl status nginx
```

---

## 🌐 Configuración de Dominio Personalizado

### Opción A: Vercel (Recomendado)

1. **Comprar dominio**:
   - GoDaddy, Namecheap, Google Domains, etc.
   - Ejemplo: `mmseg.com`

2. **En Vercel Dashboard**:
   - Ir a: Settings → Domains
   - Click en "Add Domain"
   - Ingresar: `mmseg.com`
   - Click en "Add"

3. **Vercel proporciona nameservers**:
   - Copiar nameservers de Vercel
   - Ir a registrador de dominio
   - Cambiar nameservers a los de Vercel
   - Esperar 24-48 horas para propagación

4. **Verificar**:
   - Visitar `https://mmseg.com`
   - Debe mostrar tu sitio

### Opción B: Netlify

1. **Comprar dominio** (mismo proceso)

2. **En Netlify Dashboard**:
   - Ir a: Site settings → Domain management
   - Click en "Add custom domain"
   - Ingresar dominio
   - Seguir instrucciones

### Opción C: Servidor Propio

1. **Comprar dominio**

2. **Apuntar A record a IP del servidor**:
   - En registrador de dominio
   - Crear A record: `mmseg.com` → `tu-ip-del-servidor`
   - Esperar propagación

3. **Configurar SSL** (ya hecho con Certbot)

---

## ✅ Verificación Post-Despliegue

### Checklist de Verificación

- [ ] Sitio accesible en URL pública
- [ ] HTTPS funciona (candado verde)
- [ ] Logo carga correctamente
- [ ] Menú de navegación funciona
- [ ] Botones CTA funcionan
- [ ] ChatBot aparece (botón azul esquina inferior derecha)
- [ ] Formulario de contacto funciona
- [ ] No hay errores en consola (F12)
- [ ] Responsive en móvil
- [ ] Metadata SEO correcta (ver source)

### Pruebas Rápidas

```bash
# Verificar HTTPS
curl -I https://tu-dominio.com
# Debe mostrar: HTTP/2 200

# Verificar headers de seguridad
curl -I https://tu-dominio.com | grep -i "strict-transport"
# Debe mostrar: Strict-Transport-Security

# Verificar que no hay errores
# Abrir en navegador y revisar Console (F12)
```

---

## 🔧 Troubleshooting

### Problema: "Build failed"

**Solución**:
1. Verificar que `.env.local` tiene `ANTHROPIC_API_KEY`
2. Verificar que `package.json` tiene todas las dependencias
3. Revisar logs de build en dashboard
4. Ejecutar `npm run build` localmente para verificar

### Problema: ChatBot no funciona

**Solución**:
1. Verificar que `ANTHROPIC_API_KEY` está configurada
2. Verificar que API key es válida (comienza con `sk-ant-`)
3. Revisar logs en navegador (F12 → Console)
4. Verificar que API key tiene crédito disponible

### Problema: Sitio lento

**Solución**:
1. Verificar Core Web Vitals en Vercel Analytics
2. Optimizar imágenes
3. Implementar caching
4. Revisar Network tab en DevTools

### Problema: Dominio no funciona

**Solución**:
1. Esperar 24-48 horas para propagación DNS
2. Verificar que nameservers están correctos
3. Usar herramienta: https://mxtoolbox.com/
4. Contactar soporte del registrador

### Problema: SSL certificate error

**Solución**:
1. Esperar a que Vercel/Netlify genere certificado (automático)
2. Verificar que dominio está correctamente configurado
3. Limpiar caché del navegador
4. Intentar en navegador privado

---

## 📊 Monitoreo Post-Despliegue

### Vercel Analytics

1. **En Vercel Dashboard**:
   - Ir a: Analytics
   - Ver métricas de rendimiento
   - Monitorear errores

### Recomendaciones Adicionales

1. **Google Analytics**:
   - Agregar tracking code
   - Monitorear tráfico

2. **Sentry** (error tracking):
   - Crear cuenta en https://sentry.io
   - Integrar con Next.js
   - Recibir alertas de errores

3. **Uptime Monitoring**:
   - Usar https://uptimerobot.com
   - Monitorear disponibilidad 24/7

---

## 🎉 ¡Listo!

Tu sitio está en línea. Próximos pasos:

1. ✅ Compartir URL con clientes
2. ✅ Configurar dominio personalizado
3. ✅ Agregar analytics
4. ✅ Monitorear rendimiento
5. ✅ Actualizar contenido regularmente

---

## 📞 Soporte

**Vercel Support**: https://vercel.com/support  
**Netlify Support**: https://support.netlify.com  
**AWS Support**: https://aws.amazon.com/support  

---

**Documento generado**: 30 de Enero, 2026  
**Versión**: 1.0  
**Autor**: Chat (AI Assistant)
