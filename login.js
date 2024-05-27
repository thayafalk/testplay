const { chromium } = require('playwright');

(async () => {
  
  const browser = await chromium.launch({ headless: false }); 
  const context = await browser.newContext();
  const page = await context.newPage();

  
  await page.goto('https://www.saucedemo.com/');

  
  await page.fill('input[name="username"]', 'standard_user');

  
  await page.fill('input[name="password"]', 'secret_sauce');

  
  await page.click('button[type="submit"]');

  
  await page.waitForNavigation();

  console.log('Login com sucesso');

 
  await browser.close();
})();