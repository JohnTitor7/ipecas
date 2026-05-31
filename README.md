# i Peças

Site desenvolvido para consulta de peças de reposição para celulares, com foco em visualização de produtos, preços e disponibilidade.

O projeto foi criado para uma loja de peças de celular, permitindo que clientes consultem itens disponíveis e entrem em contato pelo WhatsApp para confirmar preço, estoque e atendimento.

## Deploy

Acesse o projeto publicado:

https://ipecas-weld.vercel.app/

## Funcionalidades

* Catálogo de produtos
* Busca por peça, marca, modelo ou categoria
* Cards com imagem, nome, modelo, preço e status de estoque
* Botão de consulta via WhatsApp
* Layout responsivo para desktop e celular
* Página administrativa em `/admin`
* Cadastro de produtos
* Edição de produtos
* Remoção de produtos
* Restauração dos produtos iniciais
* Armazenamento temporário com LocalStorage

## Tecnologias utilizadas

* React
* Vite
* JavaScript
* CSS
* React Router DOM
* Lucide React
* LocalStorage
* Vercel

## Objetivo do projeto

O objetivo do i Peças é funcionar como uma vitrine digital para consulta de produtos, sem carrinho de compras e sem checkout.

A proposta é que o cliente visualize os produtos disponíveis e entre em contato diretamente pelo WhatsApp para confirmar informações com a loja.

## Estrutura do projeto

```txt
src/
├── assets/
│   ├── products/
│   ├── hero-banner.png
│   ├── hero.png
│   └── logo-ipecas.png
├── components/
│   ├── AdminPanel.jsx
│   ├── AdminProductList.jsx
│   ├── Catalog.jsx
│   ├── CatalogSidebar.jsx
│   ├── Header.jsx
│   ├── Hero.css
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   └── ProductForm.jsx
├── data/
│   └── products.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Como executar localmente

Clone o repositório:

```bash
git clone https://github.com/JohnTitor7/ipecas.git
```

Acesse a pasta do projeto:

```bash
cd ipecas
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Acesse no navegador:

```txt
http://localhost:5173/
```

Painel administrativo:

```txt
http://localhost:5173/admin
```

## Status do projeto

Projeto em desenvolvimento.

A versão atual utiliza LocalStorage para simular o cadastro, edição e remoção de produtos. Futuramente, a ideia é conectar o painel administrativo a um banco de dados real.

## Próximos passos

* Implementar login para o painel administrativo
* Conectar com Firebase ou outro banco de dados
* Adicionar upload real de imagens
* Melhorar responsividade
* Padronizar imagens dos produtos
* Criar domínio personalizado

## Autor

Desenvolvido por Ryan Vieira.

GitHub: https://github.com/JohnTitor7
