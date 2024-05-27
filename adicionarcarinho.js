const { chromium } = require('playwright');

(async () => {
  
  const browser = await chromium.launch({ headless: false }); 
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/inventory.html'); 
  
  await page.click('img[data-test="inventory-item-sauce-labs-backpack-img"]');

  
  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');

  const cartBadge = await page.textContent('a.shopping_cart_link .shopping_cart_badge');

  console.log(`Itens no carrinho: ${cartBadge}`);

 
  await browser.close();
})();