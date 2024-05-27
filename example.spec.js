// Exemplo tests/google.spec.js
const { test, expect } = require('@playwright/test');

test('pesquisar', async ({ page }) => {
  await page.goto('https://www.google.com/');
    
  await page.locator('textarea[title="Pesquisar"]').fill('cachorro');
  await page.getByLabel('Pesquisa Google').first().click();
  
});
