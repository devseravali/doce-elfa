# Doce Elfa

Site institucional desenvolvido para a **Doce Elfa**, uma confeitaria artesanal. O projeto apresenta a marca, destaca produtos e opções de encomenda e reúne os principais canais de contato em uma página responsiva.

## Sobre o projeto

A proposta é oferecer uma presença digital simples e acolhedora para a confeitaria, facilitando o acesso ao cardápio, às informações sobre a marca e aos canais de atendimento.

O conteúdo do site é organizado em componentes React, enquanto informações que podem mudar com frequência — como links de contato e produtos — ficam centralizadas em arquivos próprios.

## Funcionalidades

- Apresentação da marca e da proposta da confeitaria.
- Seção de produtos com imagens e informações cadastradas no projeto.
- Galeria de imagens.
- Seções sobre a confeitaria e doces finos.
- Informações e links relacionados a delivery e encomendas.
- Acesso ao Instagram e aos canais de contato.
- Atalho flutuante para contato pelo WhatsApp.
- Layout adaptável a diferentes tamanhos de tela.

> Os produtos, imagens, links e informações exibidos dependem dos dados e materiais cadastrados pela proprietária.

## Tecnologias

- **React 18** — construção da interface.
- **TypeScript** — tipagem e organização do código.
- **Vite** — ambiente de desenvolvimento e build.
- **Styled Components** — estilização dos componentes.
- **ESLint** — análise estática e padronização do código.

## Como executar localmente

### Pré-requisitos

- Node.js
- npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/devseravali/doce-elfa.git
```

Entre na pasta do projeto:

```bash
cd doce-elfa
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir o projeto no navegador.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Executa a verificação de tipos e gera a versão de produção. |
| `npm run preview` | Disponibiliza localmente a versão gerada para pré-visualização. |
| `npm run lint` | Executa o ESLint nos arquivos da pasta `src`. |

## Estrutura do projeto

```
doce-elfa/
├── public/
│   └── images/          # Imagens e arquivos estáticos
├── src/
│   ├── components/      # Componentes e seções da página
│   ├── config/
│   │   └── site.ts      # Links, contatos e configurações do site
│   ├── data/
│   │   └── products.ts  # Dados dos produtos
│   ├── pages/
│   │   └── Home.tsx     # Página principal
│   ├── styles/          # Estilos globais e tema
│   ├── types/           # Tipos TypeScript
│   ├── main.tsx         # Ponto de entrada da aplicação
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Personalização e atualização de conteúdo

Algumas informações foram centralizadas para facilitar futuras atualizações:

- **Links e contatos:** edite `src/config/site.ts`.
- **Produtos e imagens:** edite `src/data/products.ts`.
- **Imagens estáticas:** adicione ou substitua arquivos em `public/images/`, ajustando os caminhos utilizados pelo site.

Antes de publicar alterações, confira se os links, imagens e informações comerciais estão atualizados.

## Publicação

O projeto utiliza Vite e pode ser compilado para publicação em uma hospedagem de sites estáticos.

Gere os arquivos de produção com:

```bash
npm run build
```

O resultado será criado na pasta `dist/`. Configure a hospedagem para publicar o conteúdo dessa pasta e considere o caminho-base correto caso o site seja servido em um subdiretório.

## Informações a validar antes da publicação

- Logotipo e identidade visual oficiais.
- Fotografias e conteúdo definitivo do cardápio.
- Categorias e produtos disponíveis.
- PDF de doces finos, se aplicável.
- Links de delivery e iFood.
- História e apresentação institucional da confeitaria.
- Endereço e horários de atendimento.
- Imagem de compartilhamento (`og:image`) e domínio definitivo.

---

Desenvolvido por [Dev Seravali](https://github.com/devseravali).