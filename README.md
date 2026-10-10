# Econverse — Teste Front-End

Página de e-commerce desenvolvida como teste técnico para a vaga de Desenvolvedor Front-End da Econverse.

O projeto reproduz o layout fornecido no Figma, apresenta uma vitrine de produtos consumida por API e permite visualizar os detalhes de cada produto em um modal.

## Tecnologias

- React
- TypeScript
- Vite
- Sass
- ESLint

## Funcionalidades

- Cabeçalho com benefícios, busca, ações e navegação
- Banner principal de ofertas
- Navegação visual por categorias
- Vitrines de produtos consumidas por API
- Carousel de produtos
- Modal com informações do produto selecionado
- Controle de quantidade no modal
- Banners de parceiros
- Navegação por marcas
- Formulário de newsletter
- Rodapé institucional

## Pré-requisitos

- Node.js 20.19 ou superior
- npm

## Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/Phelipefb/sales_page.git
cd sales_page
```

Instale as dependências:

```bash
npm install
```

## Executar o projeto

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível no endereço exibido pelo Vite, normalmente:

```text
http://localhost:5173
```

## Compilar o projeto

Gere a versão de produção:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `dist`.

## Visualizar a build

Depois de executar o build, inicie a visualização local:

```bash
npm run preview
```

## Validação

Execute a análise estática do código:

```bash
npm run lint
```

Para validar completamente a entrega:

```bash
npm run lint
npm run build
```

## Teste manual

Com o projeto em execução:

1. Confirme o carregamento da lista de produtos.
2. Navegue pelos produtos utilizando as setas da vitrine.
3. Clique no botão `COMPRAR` de um produto.
4. Confirme que o modal apresenta imagem, nome, descrição e preço do produto selecionado.
5. Teste os controles de aumento e diminuição de quantidade.
6. Confirme que a quantidade mínima permanece em `01`.
7. Feche o modal e abra outro produto.
8. Confirme que a quantidade retorna para `01`.

## API de produtos

Os produtos são carregados da API pública fornecida pela Econverse:

```text
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

Durante o desenvolvimento, o Vite encaminha as requisições iniciadas em `/teste-front-end` para o domínio da Econverse. Essa configuração evita problemas de CORS no ambiente local.

## Layout

O projeto foi desenvolvido com base no layout desktop disponibilizado no Figma, com largura de referência de 1440 pixels.

Foram respeitados:

- Tipografia
- Cores
- Espaçamentos
- Dimensões
- Componentes
- Modal de produto
- Hierarquia visual

## Organização

Os componentes estão separados por responsabilidade, cada um com seu respectivo arquivo de estilos.

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

## Observações

- Não foram utilizadas bibliotecas de componentes visuais.
- O projeto utiliza HTML semântico.
- Foram adicionadas informações básicas de SEO.
- A referência fornecida contempla apenas o layout desktop.
