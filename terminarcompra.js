const { chromium } = require('playwright');

(async () => {
  
  const browser = await chromium.launch({ headless: false }); 
  const context = await browser.newContext();
  const page = await context.newPage();

 
  await page.goto('https://www.saucedemo.com/');

  
  await page.fill('input[data-test="username"]', 'standard_user');
  await page.fill('input[data-test="password"]', 'secret_sauce');
  await page.click('input[data-test="login-button"]');


  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');

  
  await page.goto('https://www.saucedemo.com/cart.html');


  const cartBadge = await page.textContent('.shopping_cart_badge');
  console.log(`Itens no carrinho: ${cartBadge}`);

  
  await page.click('button[data-test="checkout"]');

  
  await page.fill('input[data-test="firstName"]', 'John');
  await page.fill('input[data-test="lastName"]', 'Doe');
  await page.fill('input[data-test="postalCode"]', '12345');
  await page.click('input[data-test="continue"]');

  await page.click('button[data-test="finish"]');

  const completeHeader = await page.textContent('.complete-header');
  console.log(`Status do pedido: ${completeHeader}`);

  await browser.close();
})();