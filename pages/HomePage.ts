import { expect, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Element Mapping

  mainHeader() {
    return this.page.locator('#new-main-header');
  }

  homePage() {
    return this.page.locator('#page-new-home');
  }

  productsSection() {
    return this.page.locator('#section-products');
  }

  logoButton() {
    return this.mainHeader().getByRole('button', {
      name: 'Ir para a página principal',
    });
  }

  homeMainHeading() {
    return this.page.getByRole('heading', {
      name: 'Qual Pottencial você precisa?',
    });
  }

  paraVoceButton() {
    return this.page.getByRole('button', {
      name: 'PARA VOCÊ Ícone - Pottencial',
    });
  }

  paraSuaEmpresaButton() {
    return this.page.getByRole('button', {
      name: 'PARA SUA EMPRESA Ícone -',
    });
  }

  sobreNosLink() {
    return this.page.getByRole('link', {
      name: 'SOBRE NÓS',
    });
  }

  sinistrosLink() {
    return this.page.getByRole('link', {
      name: 'SINISTROS',
    });
  }

  consultarApoliceLink() {
    return this.page.getByRole('link', {
      name: 'CONSULTAR APÓLICE',
    });
  }

  agendaEsgButton() {
    return this.page.getByRole('button', {
      name: 'AGENDA ESG Ícone - Pottencial',
    });
  }

  ajudaButton() {
    return this.page.getByRole('button', {
      name: 'AJUDA Ícone - Pottencial',
    });
  }

  cadastroLink() {
    return this.page.getByRole('link', {
      name: 'Ir para a página de Cadastro',
    });
  }

  loginButton() {
    return this.page.locator('span').filter({
      hasText: 'FAZER LOGIN',
    });
  }

  garantiaHeading() {
    return this.page.getByRole('heading', {
      name: 'Garantia',
      exact: true,
    });
  }

  garantiaText() {
    return this.productsSection().getByText('Garanta o cumprimento de uma');
  }

  garantiaLink() {
    return this.page.getByRole('link', {
      name: 'Garantia',
      exact: true,
    });
  }

  garantiaJudicialHeading() {
    return this.page.getByRole('heading', {
      name: 'Garantia Judicial',
      exact: true,
    });
  }

  garantiaJudicialText() {
    return this.productsSection().getByText('Dê continuidade às obrigações');
  }

  garantiaJudicialLink() {
    return this.page.getByRole('link', {
      name: 'Garantia Judicial',
      exact: true,
    });
  }

  productPage() {
    return this.page.locator('#page-product');
  }

  productTitle() {
    return this.page.locator('h1');
  }

  productDescriptionHeading() {
    return this.page.getByRole('heading', {
      name: 'O que é o seguro Pottencial',
    });
  }

  seguroGarantiaHeading() {
    return this.page.getByRole('heading', {
      name: 'Seguro Garantia',
      exact: true,
    });
  }

  seguroGarantiaJudicialHeading() {
    return this.page.getByRole('heading', {
      name: 'Seguro Garantia Judicial',
    });
  }

  seguroGarantiaJudicialDescription() {
    return this.page.getByText('Com o seguro Pottencial');
  }

  // Methods

  async accessHomePage() {
    await this.page.goto('/');
  }

  async validateHomeLoaded() {
    await expect(this.logoButton()).toBeVisible();

    await expect(this.homePage()).toContainText('O seguro ideal para você');
    await expect(this.homePage()).toContainText('Encontre o seguro para você');

    await expect(this.homeMainHeading()).toBeVisible();

    await expect(this.productsSection()).toContainText(
      'Qual Pottencial você precisa?'
    );

    await expect(this.homePage()).toContainText(
      'Ser Pottencial é revolucionar o mercado de seguros!'
    );
  }

  async validateMainMenu() {
    await expect(this.paraVoceButton()).toBeVisible();
    await expect(this.mainHeader()).toContainText('PARA VOCÊ');

    await expect(this.paraSuaEmpresaButton()).toBeVisible();
    await expect(this.mainHeader()).toContainText('PARA SUA EMPRESA');

    await expect(this.sobreNosLink()).toBeVisible();
    await expect(this.mainHeader()).toContainText('SOBRE NÓS');

    await expect(this.sinistrosLink()).toBeVisible();
    await expect(this.mainHeader()).toContainText('SINISTROS');

    await expect(this.consultarApoliceLink()).toBeVisible();
    await expect(this.mainHeader()).toContainText('CONSULTAR APÓLICE');

    await expect(this.agendaEsgButton()).toBeVisible();
    await expect(this.mainHeader()).toContainText('AGENDA ESG');

    await expect(this.ajudaButton()).toBeVisible();
    await expect(this.mainHeader()).toContainText('AJUDA');

    await expect(this.cadastroLink()).toBeVisible();
    await expect(this.mainHeader()).toContainText('CADASTRE-SE');

    await expect(this.loginButton()).toBeVisible();
    await expect(this.mainHeader()).toContainText('FAZER LOGIN');
  }

  async validateGarantiaCard() {
    await expect(this.garantiaHeading()).toBeVisible();

    await expect(this.productsSection()).toContainText('Garantia');

    await expect(this.garantiaText()).toBeVisible();

    await expect(this.productsSection()).toContainText(
      'Garanta o cumprimento de uma obrigação contratual. Substitua outras formas de caução.'
    );
  }

  async accessGarantiaPage() {
    await this.garantiaLink().click();
  }

  async validateGarantiaPage() {
    await expect(this.seguroGarantiaHeading()).toBeVisible();

    await expect(this.productTitle()).toContainText('Seguro Garantia');

    await expect(this.productDescriptionHeading()).toBeVisible();

    await expect(this.productPage()).toContainText(
      'O que é o seguro Pottencial Garantia?'
    );
  }

  async validateGarantiaJudicialCard() {
    await expect(this.garantiaJudicialHeading()).toBeVisible();

    await expect(this.productsSection()).toContainText('Garantia Judicial');

    await expect(this.garantiaJudicialText()).toBeVisible();

    await expect(this.productsSection()).toContainText(
      'Dê continuidade às obrigações judiciais sem a descapitalizar o patrimônio das empresas.'
    );
  }

  async accessGarantiaJudicialPage() {
    await this.garantiaJudicialLink().click();
  }

  async validateGarantiaJudicialPage() {
    await expect(this.seguroGarantiaJudicialHeading()).toBeVisible();

    await expect(this.productTitle()).toContainText(
      'Seguro Garantia Judicial'
    );

    await expect(this.productDescriptionHeading()).toBeVisible();

    await expect(this.productPage()).toContainText(
      'O que é o seguro Pottencial Garantia Judicial?'
    );

    await expect(this.seguroGarantiaJudicialDescription()).toBeVisible();

    await expect(this.productPage()).toContainText(
      'Com o seguro Pottencial Garantia Judicial é possível dar continuidade às obrigações judiciais sem a necessidade de descapitalizar o patrimônio das empresas, otimizando custos e melhorando o fluxo de caixa, em substituição dos depósitos judiciais em dinheiro, penhora de bens e fianças bancárias.'
    );
  }
}