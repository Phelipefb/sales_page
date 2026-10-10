# Econverse — Teste Front-End

Página de e-commerce desenvolvida como teste técnico para a vaga de Desenvolvedor Front-End da Econverse. O projeto reproduz o layout disponibilizado no Figma, consome a lista oficial de produtos e apresenta os detalhes do item selecionado em um modal.

[![Ver projeto online](https://img.shields.io/badge/VER%20PROJETO%20ONLINE-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sales-page-git-main-phelipebassi.vercel.app/)

## Tecnologias

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-1-CC6699?style=flat-square&logo=sass&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=flat-square&logo=vercel&logoColor=white)

## Funcionalidades

- Cabeçalho com benefícios, busca, ações e navegação
- Banner principal de ofertas
- Navegação visual por categorias e marcas
- Vitrines consumindo a API oficial de produtos
- Carrosséis com controles de navegação
- Modal com imagem, nome, descrição, preço e quantidade
- Banners de parceiros
- Formulário de newsletter
- Rodapé institucional

## Pré-requisitos

Antes de começar, instale:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) 20.19+ ou 22.12+
- npm, incluído na instalação do Node.js

Também é necessário acesso à internet para carregar a API de produtos e as fontes externas. As versões mínimas do Node.js seguem os requisitos do Vite 8.

## Instalação

Clone o repositório e acesse a pasta:

```bash
git clone https://github.com/Phelipefb/sales_page.git
cd sales_page
```

Instale exatamente as dependências registradas no `package-lock.json`:

```bash
npm ci
```

## Executar em desenvolvimento

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

O servidor de desenvolvimento encaminha as requisições da API para o domínio da Econverse, evitando bloqueios de CORS.

## Validar o projeto

Execute a análise estática:

```bash
npm run lint
```

Gere a build de produção:

```bash
npm run build
```

Depois do build, teste localmente os arquivos gerados:

```bash
npm run preview
```

A URL será exibida no terminal, normalmente `http://localhost:4173`.

O projeto não possui uma suíte de testes automatizados. A validação disponível é composta por ESLint, compilação TypeScript, build do Vite e testes manuais.

## Roteiro de teste manual

Com a aplicação aberta:

1. Confirme o carregamento da lista de produtos.
2. Navegue pelas vitrines utilizando as setas laterais.
3. Clique em `COMPRAR` em um produto.
4. Verifique se o modal apresenta o produto selecionado.
5. Teste os controles de aumento e diminuição da quantidade.
6. Confirme que a quantidade mínima permanece em `01`.
7. Feche o modal e abra outro produto.
8. Confirme que a quantidade retorna para `01`.
9. Verifique o layout em uma janela de 1440 px e zoom de 100%.

## Scripts disponíveis

| Comando | Finalidade |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run lint` | Executa a análise estática do código |
| `npm run build` | Valida o TypeScript e gera a build em `dist` |
| `npm run preview` | Serve localmente a build gerada |

## API de produtos

Os produtos são carregados do JSON público fornecido pela Econverse:

```text
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

No desenvolvimento e no preview, o proxy do Vite encaminha as requisições iniciadas em `/teste-front-end`. Na publicação, a mesma rota é encaminhada pela Vercel por meio do arquivo `vercel.json`.

## Layout

O projeto foi desenvolvido com base no layout desktop do Figma, cuja largura de referência é 1440 px. A implementação considera tipografia, cores, espaçamentos, dimensões, componentes e o modal de produto definidos no design.

## Organização

```text
src/
├── components/
├── services/
├── types/
├── utils/
├── App.tsx
├── index.css
└── main.tsx
```

Cada componente visual possui seu próprio arquivo de estilos Sass.

## Observações

- Não foram utilizadas bibliotecas de componentes de interface.
- A estrutura utiliza HTML semântico.
- O projeto contém metadados básicos de SEO.
- A referência fornecida no Figma contempla apenas o layout desktop.
