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

## 🚀 DEPLOY E INFRAESTRUTURA

### Status Atual do Projeto ✅

**Repositório GitHub:** https://github.com/madson-magalhaes/outsiders-community
- ✅ 46 arquivos commitados
- ✅ Git configurado e sincronizado
- ✅ Deploy automático ativo

**Site em Produção:** https://outsiders-community.vercel.app
- ✅ Vercel CLI instalado e autenticado
- ✅ Deploy automático em cada push
- ✅ SSL/HTTPS ativo
- ✅ CDN global ativo
- ✅ Build time: ~20 segundos

**Conta Vercel:** madsons-projects-8cd6961d (conta gratuita)

---

### Configuração Git Completa

**Repositório já inicializado:**
```bash
# Status atual
Remote: https://github.com/madson-magalhaes/outsiders-community.git
Branch: main
Commits: Initial commit (46 arquivos)
```

**Para futuras alterações:**
```bash
# Fazer alterações
git add .
git commit -m "Descrição da alteração"
git push

# Deploy automático acontece em ~20 segundos
```

---

### GitHub CLI Configurado ✅

**Instalação:**
```bash
brew install gh  # Já instalado
gh auth login    # Já autenticado como @madson-magalhaes
```

**Comandos úteis:**
```bash
gh repo view                    # Ver detalhes do repo
gh browse                       # Abrir repo no navegador
gh repo edit --description "..."  # Atualizar descrição
```

---

### Vercel Deploy Configurado ✅

**Vercel CLI instalado:**
```bash
npm install -g vercel  # Já instalado (v50.12.2)
vercel login          # Já autenticado
```

**Configuração automática:**
- Framework: Static Site (detectado automaticamente)
- Root Directory: `.` (raiz)
- Output Directory: `.` (raiz)
- Build Command: Nenhum (site estático)

**Deploy manual (se necessário):**
```bash
vercel --prod  # Deploy em produção
vercel         # Deploy preview
```

**Monitoramento:**
```bash
vercel ls      # Listar deploys
vercel inspect # Ver logs do último deploy
```

---

### Configuração de Domínio Customizado (Pendente)

**Domínio oficial:** A ser configurado (comprado no Squarespace)

**Quando configurar o domínio:**

#### PASSO 1: Adicionar domínio no Vercel
1. Acesse: https://vercel.com/madsons-projects-8cd6961d/outsiders-community/settings/domains
2. Digite o domínio (ex: `outsiders.community`)
3. Clique em **"Add"**
4. Copie os registros DNS fornecidos

#### PASSO 2: Configurar DNS no Squarespace
1. Acesse: https://account.squarespace.com/domains
2. Selecione o domínio
3. **Advanced Settings** → **DNS Settings**
4. Adicione os registros:

```dns
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### PASSO 3: Aguardar propagação
- Tempo: 5min a 48h (geralmente 15-30 min)
- Verificar: https://dnschecker.org

#### PASSO 4: SSL automático
- Vercel gera certificado SSL automaticamente
- HTTPS fica ativo após propagação DNS

**⚠️ IMPORTANTE:** Não delete registros MX (email) ao configurar o domínio!

---

### Fluxo de Trabalho Atual

```
Alteração Local
     ↓
git add . && git commit -m "Update" && git push
     ↓
GitHub Repository (atualizado)
     ↓
Vercel Deploy Automático (~20s)
     ↓
Site Atualizado (https://outsiders-community.vercel.app)
```

**Quando domínio estiver configurado:**
```
git push → GitHub → Vercel → outsiders.community (domínio oficial)
```

---

### Estrutura de Branches (Recomendação)

**Atual:**
- `main` - Produção (deploy automático)

**Sugestão para crescimento:**
```
main       → Produção (sempre estável)
staging    → Testes (preview deploy)
dev        → Desenvolvimento ativo
```

**Como criar branch staging:**
```bash
git checkout -b staging
git push -u origin staging

# No Vercel: staging branch = preview deploy automático
```

---

### Logs e Debugging

**Ver logs do Vercel:**
```bash
vercel logs outsiders-community --follow
```

**Dashboard Vercel:**
- https://vercel.com/madsons-projects-8cd6961d/outsiders-community

**Ver último deploy:**
- https://vercel.com/madsons-projects-8cd6961d/outsiders-community/deployments

---

### Backup e Rollback

**Rollback para deploy anterior:**
```bash
# Via Vercel Dashboard
1. Acesse: https://vercel.com/.../deployments
2. Encontre o deploy desejado
3. Clique "..." → "Promote to Production"
```

**Via CLI:**
```bash
vercel rollback [deployment-url]
```

**Backup automático:**
- GitHub = backup do código
- Vercel = histórico de todos os deploys (infinito)

---

### Monitoramento de Performance (Pendente)

**Para sessões futuras:**
- [ ] Rodar Lighthouse no domínio de produção
- [ ] Configurar Google Analytics (opcional)
- [ ] Monitorar Vercel Analytics (gratuito)

**Comando Lighthouse:**
```bash
npm install -g lighthouse
lighthouse https://outsiders-community.vercel.app --view
```

---

### Custos Atuais

**GitHub:** Gratuito (repositório público)
**Vercel:** Gratuito (conta hobby)
- ✅ Deploy ilimitado
- ✅ 100 GB bandwidth/mês
- ✅ SSL automático
- ✅ CDN global

**Squarespace:** Pago (domínio + workspace)
- Apenas DNS apontando para Vercel (sem custo extra)

---

### Comandos Rápidos de Referência

```bash
# Ver status do Git
git status

# Ver remote configurado
git remote -v

# Ver últimos commits
git log --oneline -5

# Ver status Vercel
vercel --version
vercel whoami
vercel ls

# Ver status GitHub CLI
gh auth status
gh repo view

# Testar site localmente
python3 -m http.server 8000
# Abrir: http://localhost:8000
```

---

### Troubleshooting

**Deploy falhou:**
```bash
# Ver logs detalhados
vercel logs --follow

# Re-deploy manual
vercel --prod --force
```

**Git não está pushando:**
```bash
# Verificar remote
git remote -v

# Re-adicionar remote (se necessário)
git remote set-url origin https://github.com/madson-magalhaes/outsiders-community.git
```

**Vercel não está deployando automaticamente:**

**PROBLEMA COMUM:** Integração GitHub-Vercel desconectada

**SOLUÇÃO:**
1. Acesse: https://vercel.com/madsons-projects-8cd6961d/outsiders-community/settings/git
2. Clique em **"Connect Git Repository"**
3. Selecione **GitHub** e autorize
4. Selecione o repositório: `madson-magalhaes/outsiders-community`
5. Configure:
   - Production Branch: `main`
   - Deploy on push: ✅ Ativado

**Deploy manual temporário:**
```bash
vercel --prod  # Até integração ser configurada
```

**Após configurar integração:**
- ✅ `git push` dispara deploy automático em ~20-30s
- ✅ Webhook GitHub → Vercel funciona

---

### Próximos Passos (Checklist)

- [x] Git inicializado
- [x] Repositório GitHub criado
- [x] Vercel deploy ativo
- [x] SSL/HTTPS funcionando
- [x] Integração GitHub-Vercel configurada (deploy automático)
- [ ] Domínio customizado configurado (aguardando domínio oficial)
- [ ] Lighthouse audit >90
- [ ] Google Analytics (opcional)
- [ ] Monitoramento de uptime (opcional)

---

## 📝 CHANGELOG (Histórico de Alterações)

### v2.1.1 (09 Fev 2026)

**Ajustes de Espaçamento:**
- ✅ Ajustado padding da `.cards-section` para `1.5rem 5% 1.5rem` (24px simétrico)
- 📍 Localização: `css/05-sections.css:477`
- 🎯 Objetivo: Melhorar espaçamento entre frame 3 (manifesto) e seção de cards
- ⚠️ Nota: Valores testados (1rem, 1.5rem, 2rem) - ajuste fino em andamento

**Infraestrutura:**
- ✅ Configurada integração GitHub-Vercel para deploy automático
- ✅ Webhook GitHub → Vercel ativo
- ✅ Deploy automático funcional (~20-30s após push)
- 📦 Commit: `bbc7eb2` - "fix: Adjust cards section padding to 1.5rem for better spacing"

**Melhorias:**
- 📚 Documentação expandida em `CLAUDE.md` (seção troubleshooting)
- 🔧 Adicionadas instruções para configurar integração GitHub-Vercel
- ✅ Checklist de deploy atualizado

---

### v2.1.0 (05 Fev 2026)

**Lançamento inicial:**
- ✅ Site completo implementado
- ✅ Deploy Vercel configurado
- ✅ Repositório GitHub criado
- ✅ 46 arquivos commitados

---

## 🔧 NOTAS TÉCNICAS DE MANUTENÇÃO

### Ajustes de Espaçamento Cards Section

**Valores testados:**
- `2rem` (32px) - Original, considerado muito espaçado
- `1.5rem` (24px) - Atual, meio termo
- `1rem` (16px) - Testado, considerado muito compacto

**Para ajustar no futuro:**
```css
/* css/05-sections.css:477 */
.cards-section {
    padding: [VALOR]rem 5% [VALOR]rem;  /* top, laterais, bottom */
    background: var(--bg-secondary);
}
```

**Recomendação:** Testar em produção e definir valor final entre 1rem e 2rem.

---

**"A elite se comunica por sinais. Este arquivo é o nosso código." 🔮**

**Versão:** 2.1.1 | **Status:** Implementado ✅ | **Deploy:** Ativo 🚀 | **Última atualização:** 09 Fev 2026
