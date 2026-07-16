# Bowl Digital

Site institucional da Bowl Digital, agência full service (dev + marketing) em Curitiba, PR. Construído com **Next.js 14 (App Router)**, totalmente otimizado para SEO e performance.

> Este projeto nasceu do template da FLIP Marketing & Publicidade (agência anterior do fundador) e foi rebrandado para a Bowl Digital: cores, tipografia, logo e todo o conteúdo institucional foram atualizados. A estrutura de código e o design system permanecem os mesmos......
 
## Stack

- **Next.js 14** (App Router) + TypeScript
- **CSS Modules** com design tokens centralizados (`src/styles/globals.css`)
- **Google Fonts** — Inter (única família tipográfica da marca)
- Conteúdo institucional centralizado em `src/lib/data.ts`

## Estrutura

```
src/
├── app/
│   ├── page.tsx             # Home
│   ├── sobre/                # Sobre a Bowl Digital
│   ├── portfolio/            # Portfólio & cases
│   ├── contato/               # Contato
│   ├── links/                 # Linktree (bio do Instagram)
│   └── layout.tsx             # Layout raiz + metadata/SEO/Schema.org
├── components/
│   ├── layout/                # Navbar, Footer
│   ├── sections/               # Hero, Services, About, Packages, PortfolioTabs, CtaBanner
│   └── ui/                     # Ticker, WhatsAppFloat
├── lib/
│   └── data.ts                 # SITE, SERVICES, PACKAGES, CASES, PORTFOLIO
└── styles/
    └── globals.css             # Tokens de cor, tipografia, botões, grid
```

## Cores da marca (`src/styles/globals.css`)

| Token | Hex | Uso |
|---|---|---|
| `--bowl-blue` | `#2952FF` | Cor de destaque principal |
| `--black` | `#0B0B0B` | Fundo escuro, texto |
| `--gray-100` | `#EAEAEA` | Fundo claro / cards |
| `--white` | `#FFFFFF` | Fundo claro, texto sobre escuro |

## ⚠️ Pendências antes de publicar

- [ ] Confirmar número de WhatsApp comercial em `src/lib/data.ts` (`SITE.whatsapp`)
- [ ] Confirmar e-mail comercial em `src/lib/data.ts` (`SITE.email`)
- [ ] Trocar `logo-bowl-digital.png` (recortado do brand guide) pelo arquivo oficial em alta resolução/SVG
- [ ] Adicionar screenshots reais dos projetos em `public/images/` (cases e portfólio referenciam caminhos que ainda não existem)
- [ ] Confirmar/registrar perfis de Instagram, LinkedIn e Facebook da Bowl Digital
- [ ] Revisar textos de `SERVICES`, `PACKAGES`, `CASES` e `PORTFOLIO` em `src/lib/data.ts`

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```
