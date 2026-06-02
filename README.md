# i Peças

Site desenvolvido para consulta de peças de reposição para celulares, com foco em visualização de produtos, preços, disponibilidade, categorias e contato rápido via WhatsApp.

O projeto foi criado para uma loja de peças de celular, funcionando como uma vitrine digital. A proposta é permitir que clientes consultem produtos disponíveis sem carrinho de compras e sem checkout, entrando em contato diretamente com a loja para confirmar preço, compatibilidade e disponibilidade.

## Deploy

Acesse o projeto publicado:

https://ipecas-weld.vercel.app/

## Repositório

GitHub:

https://github.com/JohnTitor7/ipecas

## Objetivo do projeto

O objetivo do i Peças é oferecer uma vitrine digital moderna para consulta de peças e acessórios de celular.

A aplicação permite visualizar produtos, consultar preços, verificar disponibilidade, filtrar por categoria, marca, estoque e faixa de preço, além de iniciar contato diretamente pelo WhatsApp.

O foco não é venda direta pelo site, mas sim consulta rápida, organização de catálogo e atendimento personalizado.

## Funcionalidades

* Catálogo de produtos
* Busca por peça, modelo, marca ou categoria
* Menu de categorias
* Página/listagem por categoria
* Filtros por marca, estoque e faixa de preço
* Cards de produtos com imagem, nome, modelo, preço e status de estoque
* Botão de consulta via WhatsApp
* Hero com carrossel de banners
* Transição suave entre banners
* Setas de navegação no banner
* Indicadores de banner ativo
* Seção de destaques com carrossel horizontal de produtos
* Rodapé profissional com informações da loja
* Detalhes visuais de circuito em vermelho no fundo do site
* Layout responsivo para desktop, tablet e celular
* Menu lateral de categorias no mobile
* Página administrativa protegida em `/admin`
* Login administrativo com Firebase Authentication
* Cadastro de produtos
* Edição de produtos
* Remoção de produtos
* Controle de quantidade em estoque
* Organização dos produtos por categoria e marca no painel administrativo
* Feedback de sucesso e erro no painel administrativo
* Loading em ações administrativas
* Produtos salvos online no Cloud Firestore
* Atualização em tempo real dos produtos
* Regras de segurança no Firestore permitindo escrita apenas para administrador autorizado
* Correção de rotas da Vercel com `vercel.json`
* Deploy na Vercel

## Tecnologias utilizadas

* React
* Vite
* JavaScript
* CSS
* React Router DOM
* Lucide React
* Firebase
* Firebase Authentication
* Cloud Firestore
* Vercel
* Git e GitHub

## Estrutura do projeto

```txt
src/
├── assets/
│   ├── banners/
│   │   ├── banner-baterias.png
│   │   ├── banner-conectores.png
│   │   └── banner-telas.png
│   ├── products/
│   ├── hero-banner.png
│   ├── hero.png
│   └── logo-ipecas.png
├── components/
│   ├── AdminHeader.jsx
│   ├── AdminPanel.jsx
│   ├── AdminProductList.jsx
│   ├── Catalog.jsx
│   ├── CatalogSidebar.jsx
│   ├── CategoryPage.css
│   ├── CategoryPage.jsx
│   ├── Footer.jsx
│   ├── Header.css
│   ├── Header.jsx
│   ├── Hero.css
│   ├── Hero.jsx
│   ├── Login.jsx
│   ├── ProductCard.jsx
│   └── ProductForm.jsx
├── data/
│   └── products.js
├── services/
│   ├── firebase.js
│   └── productService.js
├── styles/
│   └── circuit-details.css
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

Arquivos principais na raiz:

```txt
index.html
package.json
package-lock.json
vite.config.js
vercel.json
README.md
```

## Principais componentes

### Header

Componente responsável pelo topo do site público, contendo:

* Logo da loja
* Campo de busca
* Botão de contato via WhatsApp
* Menu de navegação por categorias

### Hero

Componente responsável pela área principal da home, contendo:

* Carrossel de banners
* Transição suave entre banners
* Setas de navegação
* Indicadores de slide ativo
* Menu de categorias lateral no desktop
* Menu lateral no mobile
* Blocos informativos sobre qualidade, preços e atendimento

### Catalog

Componente responsável pela seção de destaques, exibindo produtos em formato de carrossel horizontal.

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

### Footer

Componente responsável pelo rodapé do site, contendo:

* Chamada para atendimento via WhatsApp
* Informações da loja
* Categorias
* Horário de atendimento
* Link para área administrativa
* Créditos do projeto

### Login

Componente responsável pela autenticação do painel administrativo usando Firebase Authentication.

### AdminHeader

Componente responsável pelo topo do painel administrativo, separado do cabeçalho público do site.

### AdminPanel

Componente responsável pelo painel administrativo, permitindo:

* Adicionar produtos
* Editar produtos
* Remover produtos
* Restaurar produtos iniciais
* Controlar quantidade em estoque
* Exibir mensagens de sucesso e erro
* Evitar múltiplos cliques durante ações com loading

### AdminProductList

Componente responsável por listar os produtos cadastrados no painel administrativo, organizando os itens por categoria e marca.

## Back-end

O projeto utiliza Firebase como back-end, com autenticação e banco de dados online.

### Firebase Authentication

A área administrativa em `/admin` é protegida por login com e-mail e senha.

Além disso, o acesso administrativo é validado por e-mail autorizado dentro da aplicação.

### Cloud Firestore

Os produtos são armazenados no Cloud Firestore, permitindo que alterações feitas no painel administrativo sejam refletidas no site público.

O sistema permite:

* Criar produtos
* Editar produtos
* Remover produtos
* Restaurar produtos iniciais
* Controlar quantidade em estoque
* Atualizar o catálogo em tempo real

### Regras de segurança

As regras do Firestore foram configuradas para permitir:

* Leitura pública dos produtos
* Escrita apenas para administrador autenticado e autorizado

Exemplo de regra utilizada:

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    function isAdmin() {
      return request.auth != null
        && request.auth.token.email in [
          "ryanv5944@gmail.com"
        ];
    }

    match /products/{productId} {
      allow read: if true;
      allow create, update, delete: if isAdmin();
    }
  }
}
```

## Rotas

```txt
/       → site público
/admin  → painel administrativo protegido por login
```

O projeto utiliza `React Router DOM`. Para evitar erro 404 ao acessar `/admin` diretamente na Vercel, foi criado o arquivo `vercel.json` com regra de rewrite para aplicações SPA.

Exemplo:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
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

## Configuração do Firebase

Para utilizar o projeto com Firebase, é necessário criar um projeto no Firebase e configurar:

* Firebase Authentication com e-mail/senha
* Cloud Firestore
* Regras de segurança do Firestore
* Arquivo de configuração Firebase em `src/services/firebase.js`

Exemplo de estrutura do arquivo:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

## Observação sobre imagens

No momento, alguns produtos possuem imagem cadastrada e outros ainda estão sem imagem.

Os produtos sem imagem são exibidos normalmente, permitindo que as imagens sejam adicionadas futuramente conforme forem encontradas ou produzidas.

O upload direto de imagens ainda não foi implementado, pois uma solução com Firebase Storage pode exigir ativação de plano com cobrança. Uma alternativa futura é utilizar Cloudinary ou outro serviço de hospedagem de imagens.

## Identidade visual

O projeto utiliza uma identidade visual baseada em:

* Fundo escuro
* Destaques em vermelho
* Elementos com aparência tecnológica
* Banners promocionais
* Detalhes sutis de circuito no fundo
* Layout inspirado em vitrines digitais profissionais

## Status do projeto

Projeto em desenvolvimento, com front-end e back-end Firebase funcionais.

A aplicação já possui:

* Site público responsivo
* Catálogo de produtos
* Listagem por categoria
* Filtros
* Carrossel de banners
* Carrossel de produtos em destaque
* Rodapé profissional
* Detalhes visuais de circuito
* Painel administrativo protegido
* Login com Firebase
* Produtos salvos no Firestore
* Controle de estoque por quantidade
* Regras de segurança no banco
* Deploy online na Vercel

## Próximos passos

* Adicionar upload real de imagens com Cloudinary ou Firebase Storage
* Melhorar padronização visual das imagens dos produtos
* Criar domínio personalizado
* Refinar responsividade em mais tamanhos de tela
* Melhorar filtros e ordenação dos produtos
* Adicionar busca avançada no painel administrativo
* Criar dashboard simples no painel administrativo
* Criar histórico de alterações no painel
* Adicionar página 404 personalizada
* Remover ou proteger melhor o botão de restaurar produtos iniciais em produção

## Autor

Desenvolvido por Ryan Vieira.

GitHub: https://github.com/JohnTitor7
