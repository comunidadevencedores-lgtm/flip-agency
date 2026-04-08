# FLIP — Marketing & Publicidade

Site institucional da FLIP, construído com **Next.js 14 (App Router)**, totalmente otimizado para SEO e performance.

---

## 🛹 Stack

- **Next.js 14** — App Router, SSR, SSG
- **TypeScript** — tipagem forte
- **CSS Modules** — estilos escopados sem dependência extra
- **Google Fonts** — Bebas Neue + Barlow (display + body)
- **Schema.org** — JSON-LD para rich results no Google

---

## 🚀 Começando

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/flip-agency.git
cd flip-agency

# Instale as dependências
npm install

# Rode em desenvolvimento
npm run dev
```

Acesse `http://localhost:3000`

### Build para produção

```bash
npm run build
npm start
```

---

## 📁 Estrutura

```
src/
├── app/                    # App Router (páginas)
│   ├── page.tsx            # Home
│   ├── portfolio/          # Portfólio & Cases
│   ├── sobre/              # Sobre a FLIP
│   ├── contato/            # Contato
│   ├── layout.tsx          # Layout raiz + SEO global
│   ├── sitemap.ts          # Sitemap automático
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, Services, Packages, About, PortfolioTabs, CtaBanner
│   └── ui/                 # Ticker, WhatsAppFloat
├── lib/
│   └── data.ts             # ⭐ EDITE AQUI — todos os dados do site
└── styles/
    └── globals.css         # Design system global
```

---

## ✏️ Como personalizar

### 1. Dados e conteúdo → `src/lib/data.ts`
Tudo centralizado em um arquivo:
- `SITE` — nome, URL, WhatsApp, e-mail, redes sociais
- `SERVICES` — lista de serviços
- `PACKAGES` — pacotes (Flip Start, Pro, Full)
- `CASES` — cases de sucesso
- `PORTFOLIO` — projetos do portfólio

### 2. WhatsApp
Troque o número em `src/lib/data.ts`:
```ts
whatsapp: '5544999999999', // DDD + número, sem + ou espaços
```

### 3. Imagens do portfólio
Coloque as imagens em `/public/images/` e referencie em `data.ts`:
```ts
thumbnail: '/images/nome-do-projeto.jpg',
```

### 4. URL do site (para SEO)
```ts
url: 'https://seudominio.com.br',
```

---

## 🌐 Deploy — Vercel (recomendado)

1. Suba o projeto no GitHub
2. Acesse [vercel.com](https://vercel.com) → Import Project
3. Conecte o repositório
4. Deploy automático ✅

**Domínio customizado:** Vá em Settings → Domains → Add Domain

---

## 🔍 SEO incluído

- ✅ Metadata completo por página (title, description, OG, Twitter)
- ✅ Schema.org JSON-LD (MarketingAgency)
- ✅ Sitemap.xml automático (`/sitemap.xml`)
- ✅ Robots.txt automático (`/robots.txt`)
- ✅ Canonical URLs
- ✅ Preconnect para Google Fonts
- ✅ Headers de segurança
- ✅ Imagens com `next/image` (AVIF/WebP)
- ✅ `compress: true` no next.config

---

## 📝 Checklist pré-lançamento

- [ ] Trocar número do WhatsApp em `data.ts`
- [ ] Trocar e-mail em `data.ts`
- [ ] Atualizar URL do site em `data.ts`
- [ ] Adicionar imagens reais em `/public/images/`
- [ ] Substituir cases/portfólio com dados reais
- [ ] Adicionar logo SVG/PNG em `/public/`
- [ ] Criar imagem OG em `/public/og-image.jpg` (1200x630)
- [ ] Configurar domínio na Vercel
- [ ] Verificar Google Search Console

---

Feito com 🛹 pela FLIP — Maringá, PR
