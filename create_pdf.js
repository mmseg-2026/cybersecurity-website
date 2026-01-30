const fs = require('fs');
const path = require('path');

// Read all markdown files
const readme = fs.readFileSync('/home/code/cybersecurity-site/README.md', 'utf8');
const docs = fs.readFileSync('/home/code/cybersecurity-site/DOCUMENTATION.md', 'utf8');
const deployment = fs.readFileSync('/home/code/cybersecurity-site/DEPLOYMENT_GUIDE.md', 'utf8');

// Create HTML from markdown (simple conversion)
function markdownToHtml(md) {
  return md
    .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
    .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
    .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
    .replace(/^#### (.*?)$/gm, '<h4>$1</h4>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^- (.*?)$/gm, '<li>$1</li>')
    .replace(/(<li>.*?<\/li>)/s, '<ul>$1</ul>')
    .replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^---$/gm, '<hr>')
    .replace(/✅/g, '✓')
    .replace(/❌/g, '✗');
}

// Create combined HTML document
const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MMSEG Ciberseguridad - Documentación Completa</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background: white;
      padding: 40px;
      max-width: 900px;
      margin: 0 auto;
    }
    
    h1 {
      font-size: 2.5em;
      margin: 40px 0 20px 0;
      color: #1e3a8a;
      border-bottom: 3px solid #06b6d4;
      padding-bottom: 10px;
      page-break-after: avoid;
    }
    
    h2 {
      font-size: 2em;
      margin: 30px 0 15px 0;
      color: #1e40af;
      page-break-after: avoid;
    }
    
    h3 {
      font-size: 1.5em;
      margin: 20px 0 10px 0;
      color: #1e40af;
      page-break-after: avoid;
    }
    
    h4 {
      font-size: 1.2em;
      margin: 15px 0 8px 0;
      color: #1e40af;
      page-break-after: avoid;
    }
    
    p {
      margin: 10px 0;
      text-align: justify;
    }
    
    ul, ol {
      margin: 15px 0 15px 30px;
    }
    
    li {
      margin: 8px 0;
    }
    
    code {
      background: #f5f5f5;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
    }
    
    pre {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      margin: 15px 0;
      border-left: 4px solid #06b6d4;
    }
    
    pre code {
      background: none;
      padding: 0;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
    }
    
    th, td {
      border: 1px solid #ddd;
      padding: 12px;
      text-align: left;
    }
    
    th {
      background: #1e3a8a;
      color: white;
    }
    
    tr:nth-child(even) {
      background: #f9f9f9;
    }
    
    a {
      color: #06b6d4;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    hr {
      border: none;
      border-top: 2px solid #06b6d4;
      margin: 40px 0;
      page-break-after: avoid;
    }
    
    .cover {
      text-align: center;
      padding: 100px 0;
      page-break-after: always;
      border-bottom: 3px solid #06b6d4;
    }
    
    .cover h1 {
      font-size: 3em;
      margin: 20px 0;
      border: none;
    }
    
    .cover p {
      font-size: 1.2em;
      color: #666;
      margin: 10px 0;
    }
    
    .toc {
      page-break-after: always;
      background: #f9f9f9;
      padding: 20px;
      border-radius: 5px;
    }
    
    .toc h2 {
      margin-top: 0;
    }
    
    .toc ul {
      list-style: none;
      margin-left: 0;
    }
    
    .toc li {
      margin: 8px 0;
      padding-left: 20px;
    }
    
    .toc a {
      color: #06b6d4;
    }
    
    .section {
      page-break-before: always;
    }
    
    .metadata {
      background: #f0f9ff;
      padding: 15px;
      border-radius: 5px;
      margin: 20px 0;
      border-left: 4px solid #06b6d4;
    }
    
    strong {
      color: #1e3a8a;
      font-weight: 600;
    }
    
    em {
      color: #666;
      font-style: italic;
    }
    
    .checkmark {
      color: #10b981;
      font-weight: bold;
    }
    
    .cross {
      color: #ef4444;
      font-weight: bold;
    }
    
    @media print {
      body {
        padding: 20px;
      }
      h1 {
        page-break-after: avoid;
      }
      h2, h3, h4 {
        page-break-after: avoid;
      }
      ul, ol, p {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="cover">
    <h1>🛡️ MMSEG Ciberseguridad</h1>
    <h2>Documentación Completa</h2>
    <p><strong>Versión</strong>: 1.0</p>
    <p><strong>Fecha</strong>: 30 de Enero, 2026</p>
    <p><strong>Estado</strong>: ✅ Producción</p>
  </div>
  
  <div class="toc">
    <h2>📋 Tabla de Contenidos</h2>
    <ul>
      <li><a href="#readme">README - Resumen Ejecutivo</a></li>
      <li><a href="#documentation">DOCUMENTATION - Documentación Técnica</a></li>
      <li><a href="#deployment">DEPLOYMENT_GUIDE - Guía de Despliegue</a></li>
    </ul>
  </div>
  
  <div id="readme" class="section">
    ${markdownToHtml(readme)}
  </div>
  
  <div id="documentation" class="section">
    ${markdownToHtml(docs)}
  </div>
  
  <div id="deployment" class="section">
    ${markdownToHtml(deployment)}
  </div>
  
  <div class="metadata" style="margin-top: 60px; page-break-before: always;">
    <h3>Información del Documento</h3>
    <p><strong>Generado</strong>: 30 de Enero, 2026</p>
    <p><strong>Versión</strong>: 1.0</p>
    <p><strong>Autor</strong>: Chat (AI Assistant)</p>
    <p><strong>Proyecto</strong>: MMSEG Ciberseguridad - Sitio Web Profesional</p>
    <p><strong>Ubicación del Proyecto</strong>: /home/code/cybersecurity-site/</p>
  </div>
</body>
</html>
`;

// Save HTML
fs.writeFileSync('/home/code/cybersecurity-site/COMPLETE_DOCUMENTATION.html', html);
console.log('✅ HTML generado: COMPLETE_DOCUMENTATION.html');
console.log('📄 Tamaño: ' + (html.length / 1024).toFixed(2) + ' KB');
