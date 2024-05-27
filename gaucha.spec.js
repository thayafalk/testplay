const { chromium } = require('playwright');

(async () => {
 
  const browser = await chromium.launch({ headless: false }); 
  
  
  const page = await browser.newPage();
  
  await page.goto('https://gauchazh.clicrbs.com.br/esportes/ultimas-noticias/');
  

  await page.click('h2.m-crd-pt__headline:has-text("Newgarden supera O\'Ward na última volta e vence novamente as 500 Milhas de Indianapolis")');

  await page.waitForTimeout(3000);

 
  await page.screenshot({ path: 'noticia.png' });


  await browser.close();
})();