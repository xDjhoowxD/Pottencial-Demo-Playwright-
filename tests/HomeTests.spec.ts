import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.accessHomePage();
});

test.afterEach(async ({ page }, testInfo) => {
  const screenshot = await page.screenshot({
    fullPage: true,
  });

  await testInfo.attach(testInfo.title, {
    body: screenshot,
    contentType: 'image/png',
  });
});

test('CT001 - Validar carregamento da Home', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.validateHomeLoaded();
});

test('CT002 - Validar menu principal', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.validateMainMenu();
});

test('CT003 - Validar seguro Garantia', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.validateGarantiaCard();
  await homePage.accessGarantiaPage();
  await homePage.validateGarantiaPage();
});

test('CT004 - Validar seguro Garantia Judicial', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.validateGarantiaJudicialCard();
  await homePage.accessGarantiaJudicialPage();
  await homePage.validateGarantiaJudicialPage();
});