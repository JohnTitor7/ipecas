# i Peças

Site de catálogo para uma loja de peças de reposição para celulares.

O projeto foi desenvolvido com React e Vite, com o objetivo de permitir que clientes consultem produtos, preços, disponibilidade e entrem em contato pelo WhatsApp.

## Preview

Versão inicial do projeto em desenvolvimento.

## Funcionalidades

- Catálogo de produtos
- Busca por nome, marca ou categoria
- Exibição de preço e disponibilidade
- Cards de produtos com imagem
- Botão de contato via WhatsApp
- Painel administrativo inicial
- Cadastro de produtos pelo próprio site
- Persistência temporária com LocalStorage

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- HTML
- CSS
- LocalStorage

## Estrutura do projeto

```text
src/
├── assets/
│   ├── logo-ipecas.png
│   └── products/
├── components/
│   ├── AdminPanel.jsx
│   ├── Catalog.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   └── ProductCard.jsx
├── data/
│   └── products.js
├── App.jsx
└── main.jsx
```

## Como executar o projeto

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

```text
http://localhost:5173/
```

## Objetivo do projeto

Este projeto foi criado para atender uma necessidade real de uma loja de peças de celular: permitir que clientes consultem produtos, preços e disponibilidade de forma simples.

A ideia é evoluir o sistema para que o administrador consiga gerenciar os produtos sem precisar alterar código.

## Próximas melhorias

- Login para administrador
- Banco de dados com Firebase
- Upload de imagens pelo painel
- Edição e remoção de produtos
- Deploy online
- Melhorias de responsividade
- Separação dos estilos em arquivos próprios

## Status

Projeto em desenvolvimento.
