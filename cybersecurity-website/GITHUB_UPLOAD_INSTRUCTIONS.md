# 📤 Instrucciones para Subir el Código a GitHub

## Opción 1: Usando Git desde tu Computadora (Recomendado)

### Paso 1: Descargar el Archivo ZIP
1. Descarga el archivo `cybersecurity-website.tar.gz` desde el enlace proporcionado
2. Extrae el archivo en tu computadora:
   - **Windows**: Usa 7-Zip o WinRAR
   - **Mac/Linux**: `tar -xzf cybersecurity-website.tar.gz`

### Paso 2: Abrir Terminal/CMD en la Carpeta del Proyecto
1. Navega a la carpeta extraída: `cybersecurity-site`
2. Abre terminal/CMD en esa ubicación

### Paso 3: Configurar Git (Primera Vez)
```bash
git config --global user.email "cmarciales3@gmail.com"
git config --global user.name "mmseg-2026"
```

### Paso 4: Inicializar Repositorio Local
```bash
git init
git add .
git commit -m "Initial commit - cybersecurity website"
```

### Paso 5: Conectar con GitHub
```bash
git remote add origin https://github.com/mmseg-2026/cybersecurity-website.git
git branch -M main
```

### Paso 6: Hacer Push a GitHub
```bash
git push -u origin main
```

**Cuando pida credenciales**:
- **Username**: `mmseg-2026`
- **Password**: Usa tu token de acceso personal (ghp_P9b0ab3CUITDVeyuI5uH4zrUFZuAZgh911pQTR)

---

## Opción 2: Usando GitHub Desktop (Más Fácil)

### Paso 1: Descargar GitHub Desktop
1. Ir a: https://desktop.github.com
2. Descargar e instalar

### Paso 2: Descargar y Extraer Código
1. Descarga `cybersecurity-website.tar.gz`
2. Extrae en tu computadora

### Paso 3: Crear Repositorio en GitHub Desktop
1. Abre GitHub Desktop
2. Click en "File" → "Add Local Repository"
3. Selecciona la carpeta `cybersecurity-site`
4. Click en "Create Repository"

### Paso 4: Hacer Commit
1. En GitHub Desktop, verás todos los archivos
2. En la esquina inferior izquierda:
   - **Summary**: "Initial commit - cybersecurity website"
   - Click en "Commit to main"

### Paso 5: Publicar en GitHub
1. Click en "Publish repository"
2. Nombre: `cybersecurity-website`
3. Descripción: "MMSEG Cybersecurity Website"
4. Asegúrate que sea **Private** (privado)
5. Click en "Publish Repository"

---

## Opción 3: Subir Directamente en GitHub.com (Sin Git)

### Paso 1: Crear Repositorio en GitHub
1. Ir a: https://github.com/new
2. Nombre: `cybersecurity-website`
3. Descripción: "MMSEG Cybersecurity Website"
4. Seleccionar **Private** (privado)
5. Click en "Create repository"

### Paso 2: Descargar y Extraer Código
1. Descarga `cybersecurity-website.tar.gz`
2. Extrae en tu computadora

### Paso 3: Subir Archivos
1. En GitHub, click en "uploading an existing file"
2. Arrastra todos los archivos de la carpeta `cybersecurity-site`
3. En el mensaje de commit escribe: "Initial commit - cybersecurity website"
4. Click en "Commit changes"

---

## ✅ Verificar que Funcionó

Después de subir:
1. Ir a: https://github.com/mmseg-2026/cybersecurity-website
2. Deberías ver todos los archivos del proyecto
3. Deberías ver el commit "Initial commit - cybersecurity website"

---

## 🚀 Próximo Paso: Conectar con Vercel

Una vez que el código esté en GitHub:

1. Ir a: https://vercel.com
2. Click en "Add New..." → "Project"
3. Seleccionar repositorio `cybersecurity-website`
4. Click en "Import"
5. Vercel detectará automáticamente que es Next.js
6. Click en "Deploy"
7. Configurar variable de entorno:
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: Tu API key de Anthropic (sk-ant-...)
8. Click en "Deploy"

¡Tu sitio estará en vivo en ~5 minutos! 🎉

---

## ❓ Problemas Comunes

**Problema**: "fatal: could not read Username for 'https://github.com'"
- **Solución**: Usa tu token en lugar de contraseña

**Problema**: "Repository already exists"
- **Solución**: El repositorio ya existe en GitHub. Usa `git push` en lugar de `git remote add origin`

**Problema**: "Permission denied (publickey)"
- **Solución**: Configura SSH key o usa HTTPS con token

---

## 📞 Soporte

Si tienes problemas:
1. Verifica que tu usuario de GitHub es: `mmseg-2026`
2. Verifica que el token es válido (comienza con `ghp_`)
3. Asegúrate que el repositorio es **Private** (privado)
4. Contacta a soporte de GitHub: https://support.github.com

