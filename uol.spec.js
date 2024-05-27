const { test, expect } = require('@playwright/test');

test('Testar uol', async ({ page }) => {
  
  await page.goto('https://www.uol.com.br/esporte');

  
  const headlineLinkSelector = 'a[href="https://www.uol.com.br/esporte/futebol/colunas/rafael-reis/2024/05/25/arsenal-e-city-disputam-bruno-guimaraes-que-pode-fechar-negocio-recorde.htm"]';

  
  const headlineTitleSelector = `${headlineLinkSelector} .thumb-title`;

  const headlineText = await page.textContent(headlineTitleSelector);

  
  await page.click(headlineLinkSelector);


  await page.waitForNavigation();

  const newPageHeadlineSelector = 'h1'; 

  
  const newPageHeadlineText = await page.textContent(newPageHeadlineSelector);

 
  expect(headlineText.trim()).toBe(newPageHeadlineText.trim());
});