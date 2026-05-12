import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})

test.afterEach(async ({ page }, testInfo) => {
  const screenshot = await page.screenshot({
    fullPage: true
  });

  await testInfo.attach(testInfo.title, {
    body: screenshot,
    contentType: 'image/png'
  });
});

test('CT001 - Validar carregamento da Home', async ({ page }) => {
  await expect(page.locator('#new-main-header').getByRole('button', { name: 'Ir para a página principal' })).toBeVisible();
  await expect(page.locator('#page-new-home')).toContainText('O seguro ideal para você');
  await expect(page.locator('#page-new-home')).toContainText('Encontre o seguro para você');
  await expect(page.getByRole('heading', { name: 'Qual Pottencial você precisa?' })).toBeVisible();
  await expect(page.locator('#section-products')).toContainText('Qual Pottencial você precisa?');
  await expect(page.locator('#page-new-home')).toContainText('Ser Pottencial é revolucionar o mercado de seguros!');
});

test('CT002 - Validar menu principal', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'PARA VOCÊ Ícone - Pottencial' })).toBeVisible();
  await expect(page.locator('#new-main-header')).toContainText('PARA VOCÊ');
  await expect(page.getByRole('button', { name: 'PARA SUA EMPRESA Ícone -' })).toBeVisible();
  await expect(page.locator('#new-main-header')).toContainText('PARA SUA EMPRESA');
  await expect(page.getByRole('link', { name: 'SOBRE NÓS' })).toBeVisible();
  await expect(page.locator('#new-main-header')).toContainText('SOBRE NÓS');
  await expect(page.getByRole('link', { name: 'SINISTROS' })).toBeVisible();
  await expect(page.locator('#new-main-header')).toContainText('SINISTROS');
  await expect(page.getByRole('link', { name: 'CONSULTAR APÓLICE' })).toBeVisible();
  await expect(page.locator('#new-main-header')).toContainText('CONSULTAR APÓLICE');
  await expect(page.getByRole('button', { name: 'AGENDA ESG Ícone - Pottencial' })).toBeVisible();
  await expect(page.locator('#new-main-header')).toContainText('AGENDA ESG');
  await expect(page.getByRole('button', { name: 'AJUDA Ícone - Pottencial' })).toBeVisible();
  await expect(page.locator('#new-main-header')).toContainText('AJUDA');
  await expect(page.getByRole('link', { name: 'Ir para a página de Cadastro' })).toBeVisible();
  await expect(page.locator('#new-main-header')).toContainText('CADASTRE-SE');
  await expect(page.locator('span').filter({ hasText: 'FAZER LOGIN' })).toBeVisible();
  await expect(page.locator('#new-main-header')).toContainText('FAZER LOGIN');
})

test('CT003 - Validar seguro Garantia', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Garantia', exact: true })).toBeVisible();
  await expect(page.locator('#section-products')).toContainText('Garantia');
  await expect(page.locator('#section-products').getByText('Garanta o cumprimento de uma')).toBeVisible();
  await expect(page.locator('#section-products')).toContainText('Garanta o cumprimento de uma obrigação contratual. Substitua outras formas de caução.');
  
  await page.getByRole('link', { name: 'Garantia', exact: true }).click();
  
  await expect(page.getByRole('heading', { name: 'Seguro Garantia', exact: true })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Seguro Garantia');
  await expect(page.getByRole('heading', { name: 'O que é o seguro Pottencial' })).toBeVisible();
  await expect(page.locator('#page-product')).toContainText('O que é o seguro Pottencial Garantia?');
})

test('CT004 - Validar seguro Garantia Judicial', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Garantia Judicial', exact: true })).toBeVisible();
  await expect(page.locator('#section-products')).toContainText('Garantia Judicial');
  await expect(page.locator('#section-products').getByText('Dê continuidade às obrigações')).toBeVisible();
  await expect(page.locator('#section-products')).toContainText('Dê continuidade às obrigações judiciais sem a descapitalizar o patrimônio das empresas.');
  
  await page.getByRole('link', { name: 'Garantia Judicial', exact: true }).click();
  
  await expect(page.getByRole('heading', { name: 'Seguro Garantia Judicial' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Seguro Garantia Judicial');
  await expect(page.getByRole('heading', { name: 'O que é o seguro Pottencial' })).toBeVisible();
  await expect(page.locator('#page-product')).toContainText('O que é o seguro Pottencial Garantia Judicial?');
  await expect(page.getByText('Com o seguro Pottencial')).toBeVisible();
  
  await expect(page.locator('#page-product')).toContainText(
    'Com o seguro Pottencial Garantia Judicial é possível dar continuidade às obrigações judiciais sem a necessidade de descapitalizar o patrimônio das empresas, otimizando custos e melhorando o fluxo de caixa, em substituição dos depósitos judiciais em dinheiro, penhora de bens e fianças bancárias.'
  );
})