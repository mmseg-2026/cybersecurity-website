const fs = require('fs');
const path = require('path');

// Read markdown files
const readme = fs.readFileSync('/home/code/cybersecurity-site/README.md', 'utf8');
const docs = fs.readFileSync('/home/code/cybersecurity-site/DOCUMENTATION.md', 'utf8');
const deployment = fs.readFileSync('/home/code/cybersecurity-site/DEPLOYMENT_GUIDE.md', 'utf8');

// Create combined markdown
const combined = `# 🛡️ MMSEG Ciberseguridad - Documentación Completa

**Versión**: 1.0  
**Fecha**: 30 de Enero, 2026  
**Estado**: ✅ Producción  

---

${readme}

---

# Documentación Técnica Completa

${docs}

---

# Guía de Despliegue

${deployment}

---

**Documento generado**: 30 de Enero, 2026  
**Versión**: 1.0  
**Autor**: Chat (AI Assistant)
`;

// Save combined markdown
fs.writeFileSync('/home/code/cybersecurity-site/COMPLETE_DOCUMENTATION_COMBINED.md', combined);
console.log('✅ Markdown combinado creado: COMPLETE_DOCUMENTATION_COMBINED.md');
