# Testes do formulário de contato

## Testes E2E (Playwright)

Os testes E2E abrem o site no navegador, rolam até a seção **#contato**, preenchem nome, e-mail, telefone e descrição, e verificam sucesso ou mensagens de erro.

### Comandos

- **`npm run test:e2e`** — roda os testes em modo headless (Chromium). O servidor de desenvolvimento é iniciado automaticamente (se não definir `E2E_SKIP_WEBSERVER=1`).
- **`npm run test:e2e:headed`** — roda com o navegador visível.
- **`npm run test:e2e:ui`** — abre a UI do Playwright para debugar e rodar testes.

Se o servidor não subir automaticamente (por exemplo em alguns ambientes Windows), inicie-o em um terminal e em outro rode os testes com **`E2E_SKIP_WEBSERVER=1`**. Se o Vite usar outra porta (ex.: 8081), defina **`E2E_BASE_URL`**:

```bash
# Terminal 1 (use a porta que o Vite mostrar, ex.: 8081)
npm run dev

# Terminal 2 (PowerShell) — ajuste a porta se necessário
$env:E2E_MOCK_API="1"; $env:E2E_SKIP_WEBSERVER="1"; $env:E2E_BASE_URL="http://localhost:8081"; npm run test:e2e
```

### Mock da API em CI

Para não chamar a API real do Supabase nos testes, use a variável de ambiente **`E2E_MOCK_API=1`**. Com ela, as requisições `POST` para a Edge Function são interceptadas e respondidas com sucesso (200).

Exemplo em CI (GitHub Actions):

```yaml
env:
  E2E_MOCK_API: "1"
run: npm run test:e2e
```

Localmente, sem `E2E_MOCK_API`, o teste de envio com sucesso fará uma chamada real; garanta que `.env` tenha `VITE_SUPABASE_ANON_KEY` válida se quiser testar contra a API.

### Cenários cobertos

1. **Exibição** — Os 4 campos (Nome completo, E-mail, Telefone, Descrição) e o botão de envio estão visíveis na seção de contato.
2. **Envio com sucesso** — Preenchimento com dados válidos (nome, e-mail, telefone 10 ou 11 dígitos, descrição opcional), envio e verificação da mensagem "Mensagem enviada!".
3. **Telefone inválido** — Telefone com menos de 10 dígitos exibe o toast "Telefone inválido".

## Testes de unidade (Vitest)

Os testes em `src/components/ContactForm.spec.tsx` continuam validando o contrato do formulário (campos obrigatórios, payload enviado ao `fetch` mockado). Rode com:

- **`npm run test`** — execução única.
- **`npm run test:watch`** — modo watch.
