// @ts-check
const { test, expect } = require('@playwright/test');

test('testar kabum', async ({ page }) => {
  await page.goto('https://www.kabum.com.br');

  const cartIconSeletor = 'svg.IconHeaderCart';

  await page.click(cartIconSeletor);

  await page.waitForNavigation();

  const emptyCartMessageSeletor = 'text=O seu carrinho está vazio.';

  const isMessageVisible = await page.isVisible(emptyCartMessageSeletor);


  expect(isMessageVisible).toBe(true);
});