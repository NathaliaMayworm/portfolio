# Nathália Mayworm Kapps — Portfolio

Aplicação desenvolvida para apresentar meu perfil profissional, experiência e competências como Software Engineer focada em front-end. Construída como SPA em **React 18 + Vite + TypeScript + Tailwind CSS v4**, com Design System próprio em CSS-first via `@theme`, dark mode com persistência (`localStorage` + `prefers-color-scheme`), gerador de currículo em PDF ATS-friendly (jsPDF), animações declarativas com Framer Motion, scroll-spy nav e Open Graph + Twitter Cards otimizados.

## Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite 5** (build & dev server)
- **Tailwind CSS v4** (utility-first, theme via `@theme` CSS-first)
- **Framer Motion** (animações e transições)
- **lucide-react** (ícones)
- **jsPDF** (geração dinâmica do currículo em PDF, ATS-friendly)

## Como rodar

```bash
npm install
npm run dev
```

A aplicação fica disponível em `http://localhost:5173`.

### Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── components/      # Header, Hero, About, Skills, Experience, Contact, Footer + icons
├── data/            # Conteúdo (skills, experiências, navegação, socials, profile)
├── hooks/           # Hooks customizados (useScrollSpy)
├── styles/          # index.css com @theme + utilities customizadas
├── utils/           # generateResume.ts (gerador de PDF do currículo)
├── App.tsx
└── main.tsx
public/
├── favicon.svg
└── perfil-photo.jpeg
```

## Funcionalidades

- Hero com card animado de código (`profile.ts`) e CTA pra contato
- Sobre, Skills, Experiência e Contato — todas com animações `whileInView`
- Header com scroll-spy (link ativo destaca conforme a seção visível) e mobile menu animado
- Geração dinâmica de currículo em PDF (botão "Baixar currículo" no Hero)
- Glassmorphism, gradientes radiais e grid pattern no background
- Design responsivo (breakpoints customizados xs/md/lg/xl)
- Open Graph + Twitter Cards prontos pra preview em LinkedIn/redes

## Deploy

Recomendado **Vercel** ou **Netlify** — ambos detectam Vite automaticamente.

```bash
# Vercel CLI
npx vercel
```

ou conecte o repositório direto no dashboard do Vercel/Netlify e o deploy é automático a cada push.

## Licença

Código pessoal — sinta-se livre pra se inspirar, mas o conteúdo (textos, foto, experiências) é meu.
