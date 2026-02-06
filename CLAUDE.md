# CLAUDE.MD - Outsiders Community v2.1

> Referência completa para implementação do site em sessões futuras.

---

## 🎯 VISÃO GERAL

**Outsiders Community** - Site institucional dark mode com tema místico/esotérico.

### Objetivos
- Dark mode completo (tema místico)
- Elementos interativos premium (spotlight, partículas, scroll reveal)
- Design inspirado em Lando Norris (landonorris.com)
- Arquitetura modular
- Performance >90 Lighthouse, 60fps
- Totalmente responsivo (mobile-first)

### Conceito Visual
- **Tema:** Místico, dark, esotérico, premium
- **Cores:** Carvão profundo (#38373C), laranja vibrante (#FB6117), dourado saturno (#F5D696), creme (#F8F0DD)
- **Fontes:** Abegnale (títulos), PT Mono (corpo/código), Roboto (suporte)

---

## 🛠 STACK TÉCNICA

- HTML5 Semântico
- CSS3 Modular (8 arquivos)
- JavaScript ES6+ Vanilla (7 módulos)
- **Versão:** 2.1.0 (Fevereiro 2026)

**Sem frameworks, sem jQuery, sem bundlers** - Vanilla puro para performance máxima.

**Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=PT+Mono&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

**Fonte Local:**
- Abegnale.ttf (em assets/fonts/)

---

## 📁 ESTRUTURA DE PASTAS

```
outsiders-community/
├── index.html
├── README.md
├── CLAUDE.md
├── .env
├── .gitignore
├── assets/
│   ├── images/
│   │   ├── logo/logo.png, outsiders.png, banner_X.png
│   │   ├── hero/avatar.png, saturno.png
│   │   └── cards/outsider0-8.png (9 cards)
│   └── fonts/Abegnale.ttf
├── css/
│   ├── 01-variables.css    # Design tokens
│   ├── 02-reset.css        # Reset CSS
│   ├── 03-base.css         # Estilos base
│   ├── 04-components.css   # Componentes reutilizáveis
│   ├── 05-sections.css     # Estilos por seção
│   ├── 06-animations.css   # Keyframes
│   ├── 07-responsive.css   # Media queries
│   └── main.css            # Import all
└── js/
    ├── config.js           # Configurações globais
    ├── utils.js            # Helpers
    ├── navigation.js       # Menu & scroll
    ├── spotlight.js        # Efeito spotlight
    ├── animations.js       # Scroll reveal
    ├── particles.js        # Canvas particles
    └── main.js             # Inicialização
```

---

## 🎨 CSS MODULAR

### Filosofia
Cada arquivo = 1 responsabilidade.

### Arquivos CSS

**01-variables.css** - Centraliza todas as variáveis:
- Cores (5 cores principais: out-orange, out-sand, out-cream, out-gold, out-charcoal)
- Tipografia (3 fontes + 6 tamanhos fluid)
- Espaçamentos (xs a xxl)
- Transições (fast a very-slow)
- Z-index, shadows, glows, borders

**02-reset.css** - Reset moderno de browsers

**03-base.css** - Estilos globais (body, container, tipografia base)

**04-components.css** - Classes reutilizáveis:
`.reveal`, `.gradient-text`, `.glass-effect`, `.hover-glow-border`, `.shimmer`, `.pulse`, `.float`

**05-sections.css** - Estilos por seção HTML (navbar, hero, image-hover, cards, footer)

**06-animations.css** - Todos os @keyframes (fadeInUp, float, pulse, glow-rotate, etc)

**07-responsive.css** - Media queries (480px, 768px, 1024px, 1440px+)

**main.css** - Imports na ordem correta

---

## ⚡ JAVASCRIPT MODULAR

### Filosofia
Cada arquivo = 1 classe com responsabilidade única.

### Arquivos JS

**config.js** - Objeto CONFIG com todas as configurações:
```javascript
const CONFIG = {
    ANIMATION_DURATION: 800,
    PARTICLE_COUNT: 200,
    SPOTLIGHT_RADIUS: 200,
    SPOTLIGHT_GLOW: 100,
    DEV_MODE: true,
    BREAKPOINTS: {mobile: 480, tablet: 768, desktop: 1024},
    LINKS: {
        comunidade: "https://x.com/outsiderpapini",
        consultoria: "...",
        outstore: "https://cryptoshirts.io/collections/outsiders",
        newsletter: "...",
        join: "..."
    }
};
```

**utils.js** - Helpers: `debounce`, `throttle`, `isInViewport`, `formatTime`, `getScreenSize`, `lazyLoadImages`

**navigation.js** - `class Navigation` - Menu desktop/mobile, smooth scroll

**spotlight.js** - `class SpotlightEffect` - Efeito circular que segue mouse revelando Saturno via CSS mask

**animations.js** - `class ScrollAnimations` - Reveal on scroll com Intersection Observer

**particles.js** - `class ParticleEffect` + `class Particle` - Canvas com 200 estrelas animadas

**main.js** - `class OutsidersWebsite` - Orquestra tudo

---

## 🎭 ELEMENTOS INTERATIVOS v2.1

### 1. SPOTLIGHT EFFECT (Avatar ↔ Saturno)
**Seção:** `#discover`

**Técnica:** Spotlight circular segue mouse, revela Saturno gradualmente via CSS mask.

**HTML:**
```html
<section class="image-hover-section" id="discover">
    <div class="image-container">
        <img src="avatar.png" class="avatar-image">
        <img src="saturno.png" class="saturno-image">
    </div>
</section>
```

**CSS:** Avatar sempre visível (z-index: 1), Saturno com mask (z-index: 2), cursor customizado dourado

**JS:** `updateSpotlight()` atualiza mask dinamicamente

**Config:** `SPOTLIGHT_RADIUS`, `SPOTLIGHT_GLOW`

---

### 2. CARDS GRID (9 Pilares)
**Seção:** `#pilares`

**Estrutura:** 9 cards em grid responsivo (3 colunas desktop, 1 coluna mobile)

**Layout:**
- Desktop: Grid 3 colunas com gap
- Tablet: Grid 2 colunas
- Mobile: 1 coluna centralizada

**Cards:**
0. Outsider0
1. A Origem
2. Geopolítica Profunda
3. Simbolismo Oculto
4. Análise Macro Outsider
5. Bitcoin & Liberdade
6. Proteção Obsessiva
7. Comunidade Rebelde
8. Card 8

**Implementação:** Simples com `<img>` + lazy loading, sem flip 3D

---

### 3. PARTÍCULAS ANIMADAS
**Seção:** `#hero`

**Canvas:** `<canvas id="particlesCanvas"></canvas>`

**Sistema:** 200 estrelas com twinkle effect, movimento aleatório, wrap around

**Config:** `PARTICLE_COUNT = 200`

---

## 🎨 DESIGN SYSTEM

### Cores Principais
```css
/* Backgrounds */
--out-charcoal: #38373C
--out-charcoal-light: #38373C

/* Textos */
--out-cream: #F8F0DD
--out-sand: #F8E2B7
--out-gold: #F5D696

/* Acentos */
--out-orange: #FB6117

/* Neutros */
--ghost-white: #E8E8E8
--dim-white: #A0A0A0
```

### Tipografia
```css
--fs-hero: clamp(2.5rem, 6vw, 5rem)
--fs-h1: clamp(2rem, 4vw, 3.5rem)
--fs-h2: clamp(1.5rem, 3vw, 2.5rem)
--fs-body: clamp(1rem, 1.5vw, 1.125rem)
```

### Uso das Fontes
- **Abegnale** → Títulos (h1, h2, .hero-headline)
- **PT Mono** → Corpo (body, p, código)
- **Roboto** → Suporte (navegação, botões)

### Espaçamentos
```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 2rem      /* 32px */
--spacing-lg: 4rem      /* 64px */
--spacing-xl: 6rem      /* 96px */
--spacing-xxl: 8rem     /* 128px */
```

### Transições
```css
--transition-fast: 0.2s ease
--transition-normal: 0.3s ease
--transition-slow: 0.5s ease
--transition-very-slow: 0.8s ease
```

### Glows
```css
--glow-mystic: 0 0 20px rgba(251, 97, 23, 0.5), ...  /* Orange */
--glow-saturn: 0 0 15px rgba(245, 214, 150, 0.5), ... /* Gold */
--glow-cyan: 0 0 15px rgba(248, 226, 183, 0.5), ...   /* Sand */
```

---

## 📄 SEÇÕES DO SITE

1. **NAVIGATION** (`#navbar`) - Logo, links, menu mobile, glassmorphism
2. **HERO** (`#hero`) - Partículas, logo animado, headline gradient
3. **IMAGE HOVER** (`#discover`) - Spotlight effect Avatar↔Saturno
4. **COPY SECTION** (`#manifesto`) - Manifesto, citação
5. **CARDS GRID** (`#pilares`) - Grid 9 cards dos pilares
6. **FOOTER** - Logo grayscale, tagline, copyright

---

## 🚀 ROTEIRO RÁPIDO

### FASE 1: SETUP (30min)
Criar estrutura de pastas + arquivos vazios

### FASE 2: HTML (1h)
Head completo + body estruturado + scripts

### FASE 3: CSS (2-3h)
8 arquivos CSS na ordem (01-variables → 07-responsive)

### FASE 4: JS (2-3h)
7 arquivos JS (config → main)

### FASE 5: ASSETS (1h)
Logo, imagens hero, 9 cards

### FASE 6: TESTES (1h)
Chrome, Firefox, Safari, Mobile, Lighthouse >90

### FASE 7: DEPLOY
Vercel/Netlify + domínio + SSL

---

## ✅ CHECKLIST ESSENCIAL

### HTML
- [x] Válido W3C
- [x] Semântico (header, nav, section, footer)
- [x] Meta tags (SEO, Open Graph, Twitter)
- [x] Alt text, ARIA labels

### CSS
- [x] Válido CSS Validator
- [x] Variáveis consistentes
- [x] Responsivo (480px, 768px, 1024px+)

### JavaScript
- [x] Sem erros console
- [x] Cross-browser
- [x] Performance otimizada

### Performance
- [ ] Lighthouse >90 (Performance, Accessibility, SEO)
- [ ] Page load <3s (4G)
- [ ] First Contentful Paint <1.8s

### Funcionalidades
- [x] Navegação smooth scroll
- [x] Menu mobile
- [x] Spotlight effect funcionando
- [x] Cards grid responsivo
- [x] Partículas animadas
- [x] Scroll reveal

---

## 🛠 COMANDOS ÚTEIS

### Dev Local
```bash
python3 -m http.server 8000
# Acessar: http://localhost:8000
```

### Git
```bash
git init
git add .
git commit -m "Initial commit - Outsiders Community v2.1"
git remote add origin <url>
git push -u origin main
```

### Deploy Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 📝 NOTAS IMPORTANTES

### Assets Necessários
- Logo (logo.png, outsiders.png)
- Avatar (avatar.png)
- Saturno (saturno.png)
- 9 cards (outsider0.png até outsider8.png)
- Fonte Abegnale (Abegnale.ttf)

### Links
Links navegação (OutStore, Membros, etc) configurados em `js/config.js` → `CONFIG.LINKS`

### Performance
- CSS modular: ~1.560 linhas
- JS vanilla: ~598 linhas
- Bundle total: <200kb (sem assets)
- Target: <2s load, Lighthouse >90

---

## 📋 MUDANÇAS v2.1

### Removido da v2.0
- ❌ **Background Audio System** - Removido
- ❌ **Cards 3D Flip** - Substituído por grid simples
- ❌ **Auto-Flip Mobile** - Não necessário
- ❌ **Media Loader** - Removido

### Mantido
- ✅ Spotlight Effect
- ✅ Partículas Animadas
- ✅ Scroll Reveal
- ✅ Navegação Mobile
- ✅ Grid Responsivo

### Performance v2.1
- Bundle JS: -200 bytes (remoção de módulos desnecessários)
- Lighthouse: Mantém >90
- Load time: <2s

### Compatibilidade
- ✅ Chrome 88+, Firefox 91+, Safari 14+, Edge 88+
- ⚠️ IE11: Degradação graciosa

---

## 🔗 ESTRUTURA DE LINKS (CONFIG.LINKS)

```javascript
LINKS: {
    comunidade: "https://x.com/outsiderpapini",
    consultoria: "https://www.youtube.com/...",
    outstore: "https://cryptoshirts.io/collections/outsiders",
    newsletter: "https://www.youtube.com/...",
    join: "https://x.com/outsiderpapini"
}
```

Todos os links são configuráveis em `js/config.js` e aplicados automaticamente no `main.js`.

---

**"A elite se comunica por sinais. Este arquivo é o nosso código." 🔮**

**Versão:** 2.1.0 | **Status:** Implementado ✅ | **Última atualização:** Fev 2026
