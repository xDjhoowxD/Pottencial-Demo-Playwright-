# Pottencial - Playwright Test Automation

Projeto de automação de testes end-to-end desenvolvido para o site da Pottencial utilizando Playwright com TypeScript.

O projeto segue o padrão Page Object Model (POM), promovendo melhor organização, reutilização de código e manutenção da suíte de testes.

---

# Tecnologias utilizadas

- Node.js
- Playwright
- TypeScript

---

# Padrões utilizados

- Page Object Model (POM)
- Estrutura modular
- Separação entre testes e páginas
- Evidências automáticas via screenshot
- HTML Report do Playwright

---

# Estrutura do projeto

```txt
project-root/
│
├── pages/
│   └── HomePage.ts
│
├── tests/
│   └── pottencial-home.spec.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# Instalação do projeto

## Clone o repositório

```bash
git clone <repository-url>
```

---

## Acesse a pasta do projeto

```bash
cd project-name
```

---

## Instale as dependências

```bash
npm install
```

---

## Instale os browsers do Playwright

```bash
npx playwright install
```

---

# Executando os testes

## Executar todos os testes

```bash
npx playwright test
```

---

## Executar em modo headed

```bash
npx playwright test --headed
```

---

## Executar um arquivo específico

```bash
npx playwright test tests/pottencial-home.spec.ts
```

---

## Executar um teste específico

```bash
npx playwright test -g "CT001"
```

---

# Relatórios

## Abrir relatório HTML

```bash
npx playwright show-report
```

---

# Evidências automáticas

O projeto possui captura automática de screenshots ao final de cada teste utilizando `afterEach`.

As imagens são anexadas automaticamente ao relatório HTML do Playwright utilizando o nome do próprio teste.

Exemplo:

- CT001 - Validar carregamento da Home
- CT002 - Validar menu principal

---

# Cenários automatizados

| ID | Cenário |
|---|---|
| CT001 | Validar carregamento da Home |
| CT002 | Validar menu principal |
| CT003 | Validar seguro Garantia |
| CT004 | Validar seguro Garantia Judicial |

---

# Page Object Model

O projeto utiliza o padrão POM para separar:

- elementos
- ações
- validações
- regras da página

Isso reduz duplicação de código e melhora a manutenção da suíte.

---

# Exemplo da estrutura Page Object

```ts
class HomePage {

  garantiaButton() {
    return this.page.getByRole('link', {
      name: 'Garantia',
      exact: true,
    });
  }

  async accessGarantiaPage() {
    await this.garantiaButton().click();
  }

}
```

---

# Exemplo de teste

```ts
test('CT003 - Validar seguro Garantia', async ({ page }) => {

  const homePage = new HomePage(page);

  await homePage.validateGarantiaCard();

  await homePage.accessGarantiaPage();

  await homePage.validateGarantiaPage();

});
```

---

# Boas práticas utilizadas

- Uso de locators semânticos (`getByRole`)
- Métodos reutilizáveis
- Assertions centralizadas
- Separação clara entre teste e regra de negócio
- Evidências automáticas
- Testes independentes

---

# Melhorias futuras

- Integração CI/CD
- Execução cross-browser
- Integração com Allure Report
- Testes de acessibilidade
- Testes responsivos
- Mock de APIs
- Fixtures customizadas
- Testes visuais

---

# Autor

Jhonatan da Silva Pereira

QA Engineer | Test Automation | Playwright | Cypress | Mobile | API Testing
