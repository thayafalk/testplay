// @ts-check
const { test, expect } = require('@playwright/test');

test('Testar atitus', async ({ page }) => {
  await page.goto('https://atitus.edu.br');
  
  const searchButtonSelector = '.chakra-button.css-ntt6l1';

 
  await page.click(searchButtonSelector);


  await page.waitForSelector('input[type="search"]');

  
  const searchInputSelector = 'input[type="search"]';

  
  const searchText = 'cursos';
  await page.fill(searchInputSelector, searchText);

  
  await page.keyboard.press('Enter');

  const resultsSelector = '.results-selector'; 
  await page.waitForSelector(resultsSelector);

  const resultsAreVisible = await page.isVisible(resultsSelector);
  expect(resultsAreVisible).toBe(true);
});