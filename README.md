# i Peças

Site desenvolvido para consulta de peças de reposição para celulares, com foco em visualização de produtos, preços, disponibilidade e contato rápido via WhatsApp.

O projeto foi criado para uma loja de peças de celular, funcionando como uma vitrine digital. A proposta é permitir que clientes consultem os produtos disponíveis sem carrinho de compras e sem checkout, entrando em contato diretamente com a loja para confirmar informações.

## Deploy

Acesse o projeto publicado:

https://ipecas-weld.vercel.app/

## Repositório

GitHub:

https://github.com/JohnTitor7/ipecas

## Objetivo do projeto

O objetivo do i Peças é oferecer uma vitrine digital para consulta de peças e acessórios de celular.

A aplicação permite visualizar produtos, consultar preços, verificar disponibilidade e iniciar contato pelo WhatsApp. O foco não é venda direta pelo site, mas sim consulta rápida e atendimento personalizado.

## Funcionalidades

* Catálogo de produtos
* Busca por peça, modelo, marca ou categoria
* Menu de categorias
* Página/listagem por categoria
* Filtros por marca, estoque e faixa de preço
* Cards de produtos com imagem, nome, modelo, preço e status de estoque
* Botão de consulta via WhatsApp
* Layout responsivo para desktop e celular
* Menu lateral de categorias no mobile
* Página administrativa em `/admin`
* Cadastro de produtos
* Edição de produtos
* Remoção de produtos
* Restauração dos produtos iniciais
* Persistência temporária com LocalStorage
* Início da integração com Firebase para futuro back-end real

## Tecnologias utilizadas

* React
* Vite
* JavaScript
* CSS
* React Router DOM
* Lucide React
* LocalStorage
* Firebase
* Firestore
* Firebase Authentication
* Vercel

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
│   ├── CategoryPage.css
│   ├── CategoryPage.jsx
│   ├── Header.css
│   ├── Header.jsx
│   ├── Hero.css
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   └── ProductForm.jsx
├── data/
│   └── products.js
├── services/
│   ├── firebase.js
│   └── productService.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Principais componentes

### Header

Componente responsável pelo topo do site, contendo:

* Logo da loja
* Campo de busca
* Botão de contato via WhatsApp
* Menu de navegação por categorias

### Hero

Componente responsável pela área principal da home, contendo:

* Banner visual
* Menu de categorias lateral no desktop
* Menu lateral no mobile
* Blocos informativos sobre qualidade, preços e atendimento

### Catalog

Componente responsável pela seção de destaques, exibindo os produtos em formato de cards.

### CategoryPage

Componente responsável pela listagem de produtos por categoria, com filtros por:

* Marca
* Estoque
* Faixa de preço

### ProductCard

Componente responsável pela exibição individual de cada produto, contendo:

* Imagem
* Nome
* Modelo
* Preço
* Estoque
* Botão de consulta via WhatsApp

### AdminPanel

Componente responsável pelo painel administrativo, permitindo:

* Adicionar produtos
* Editar produtos
* Remover produtos
* Restaurar produtos iniciais

## Back-end

O projeto iniciou a integração com Firebase para substituir futuramente o uso de LocalStorage.

A estrutura atual já possui arquivos de serviço para conexão com:

* Firebase Authentication
* Cloud Firestore

Arquivos relacionados:

```txt
src/services/firebase.js
src/services/productService.js
```

A próxima etapa será proteger o painel administrativo com login e salvar os produtos diretamente no Firestore.

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

## Observação sobre os produtos

A versão atual ainda utiliza LocalStorage para armazenar alterações feitas pelo painel administrativo.

Caso os produtos exibidos não atualizem após alterações no arquivo `products.js`, limpe o armazenamento local do navegador executando no console:

```js
localStorage.removeItem("ipecas-products");
location.reload();
```

Ou utilize a opção de restaurar produtos iniciais dentro do painel administrativo.

## Status do projeto

Projeto em desenvolvimento.

A aplicação já possui layout responsivo, catálogo, listagem por categoria, filtros e painel administrativo funcional com armazenamento temporário.

A próxima etapa será finalizar a integração com Firebase para transformar o painel administrativo em uma área com login e banco de dados online.

## Próximos passos

* Criar tela de login para o painel administrativo
* Proteger a rota `/admin`
* Substituir LocalStorage por Firestore
* Salvar produtos no Firebase
* Melhorar regras de segurança do Firebase
* Adicionar upload real de imagens
* Padronizar imagens dos produtos
* Melhorar filtros e navegação por categoria
* Criar domínio personalizado
* Refinar responsividade em diferentes tamanhos de tela

## Autor

Desenvolvido por Ryan Vieira.

GitHub: https://github.com/JohnTitor7
