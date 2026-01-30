const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    console.log('🚀 Iniciando generación de PDF...');
    
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Read HTML file
    const htmlPath = path.join(__dirname, 'COMPLETE_DOCUMENTATION.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Set content
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    const pdfPath = path.join(__dirname, 'MMSEG_Ciberseguridad_Documentacion_Completa.pdf');
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm'
      },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<div style="font-size: 10px; width: 100%; text-align: center; color: #999;">MMSEG Ciberseguridad - Documentación Completa</div>',
      footerTemplate: '<div style="font-size: 10px; width: 100%; text-align: center; color: #999;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>'
    });
    
    await browser.close();
    
    // Get file size
    const stats = fs.statSync(pdfPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log('✅ PDF generado exitosamente!');
    console.log(`📄 Archivo: MMSEG_Ciberseguridad_Documentacion_Completa.pdf`);
    console.log(`📊 Tamaño: ${fileSizeInMB} MB`);
    console.log(`📍 Ubicación: ${pdfPath}`);
    
  } catch (error) {
    console.error('❌ Error generando PDF:', error.message);
    process.exit(1);
  }
})();
