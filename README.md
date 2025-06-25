# manufazxv 🌐

Uma **landing page** desenvolvida com **React + Vite + TypeScript + Bootstrap**, contendo navegação suave entre seções, ícone "Voltar ao Topo" e formulário de contato integrado ao EmailJS.

---

## Contribuindo

Contribuições são bem-vindas! Confira o guia de [contribuição](CONTRIBUTING.md) para saber como ajudar.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

## 🎯 Visão geral do projeto

- Estrutura modular com componentes.
- Navegação interna entre seções por scroll suave.
- Ícone de seta no canto inferior para retorno rápido ao topo da página.

---

## 🛠️ Tecnologias

- **React 18** + **TypeScript**
- **Vite** — bundler rápido e moderno
- **Bootstrap 5** — estrutura CSS
- **Bootstrap Icons** — ícones SVG

---

## 🚀 Como usar localmente

### 1. Clone o repositório
```bash
git clone https://github.com/miltoncsjunior/manufazxv.git
cd manufazxv
```

### 2. Instale as dependências
```bash
npm install
```
- O app será aberto em `http://localhost:5173/`.
- O Vite irá monitorar alterações e recarregar automaticamente o navegador.
-
### 3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

### 4. Build do projeto
Para criar uma versão otimizada para produção, execute:
```bash
npm run build
```
- Isso irá gerar os arquivos otimizados na pasta `dist`.
- Você pode verificar o conteúdo da pasta `dist` para ver os arquivos estáticos prontos para serem servidos.
- O Vite irá gerar um arquivo `index.html` e outros recursos necessários para o funcionamento

### 5. Teste localmente a build
Para testar a build localmente, você pode usar o comando:
```bash
npm run preview
```
- Isso irá iniciar um servidor local que serve os arquivos da pasta `dist`, permitindo que você veja como o site se comporta em produção.
- Acesse `http://localhost:4173/` para visualizar a versão de produção.

### 6. Publicando no GitHub Pages

Para publicar este projeto no GitHub Pages, siga os passos abaixo:

1. **Build do projeto**

   No terminal, execute:
   ```sh
   npm run build
   ```

2. **Deploy para o GitHub Pages**

   Execute o comando:
   ```sh
   npm run deploy
   ```

   Isso irá publicar o conteúdo da pasta `dist` na branch `gh-pages` do seu repositório.

3. **Acesse seu site**

   Após alguns minutos, acesse:
   ```
   https://seu-usuario.github.io/manufazxv
   ```

> **Observação:**
> O endereço do site está configurado na propriedade `homepage` do arquivo `package.json`.
> Certifique-se de que o repositório está público e que o GitHub Pages está configurado para servir a branch `gh-pages`.

