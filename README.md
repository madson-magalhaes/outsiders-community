# 🌌 Outsiders Community - Website Oficial

> A ordem de mentes rebeldes que recusaram o roteiro convencional

**Versão:** 2.1.0 (Optimized) | **Última atualização:** Fevereiro de 2026

## 📋 Sobre o Projeto

Site institucional da **Outsiders Community** com design dark místico, foco em performance e acessibilidade.

### ✨ Features v2.1

#### **Elementos Visuais**
- 🔦 **Spotlight Effect** - Revelação circular seguindo o mouse (Avatar ↔ Saturno)
- 🃏 **Grid Responsivo** - 9 Cards em layout otimizado (3 colunas Desktop / 1 coluna Mobile)
- ✨ **Partículas Animadas** - Estrelas flutuantes no hero
- 📱 **Mobile First** - Totalmente adaptado para todas as telas

#### **Arquitetura**
- ✅ CSS Modular e Limpo
- ✅ JavaScript Otimizado
- ✅ Configurações centralizadas (`js/config.js`)
- ✅ Performance extrema (Score 90+ Lighthouse)

#### **UX/UI**
- ✅ Design dark mode completo
- ✅ Navegação fluida
- ✅ SEO e acessibilidade (WCAG AA)
- ✅ Smooth animations

## 🛠 Stack Técnica

- **HTML5** - Estrutura semântica
- **CSS3 Modular** - Arquivos separados por responsabilidade
- **JavaScript Vanilla ES6+** - Leve e rápido
- **Google Fonts** - Cinzel, Cormorant Garamond, Space Grotesk, JetBrains Mono

## 📁 Estrutura do Projeto

```
outsiders-community/
├── index.html              # Página principal
├── .gitignore
├── README.md
│
├── assets/
│   ├── images/
│   │   ├── logo/          # Logo principal
│   │   ├── hero/          # Avatar e Saturno
│   │   └── cards/         # 9 cards dos pilares
│   └── fonts/             # Fontes locais
│
├── css/
│   ├── 01-variables.css   # Variáveis CSS
│   ├── 02-reset.css       # Reset CSS
│   ├── 03-base.css        # Estilos base
│   ├── 04-components.css  # Componentes reutilizáveis
│   ├── 05-sections.css    # Estilos por seção
│   ├── 06-animations.css  # Keyframes
│   ├── 07-responsive.css  # Media queries
│   └── main.css           # Import de todos
│
└── js/
    ├── config.js           # CONFIGURAÇÕES E LINKS (Edite aqui)
    ├── utils.js            # Funções utilitárias
    ├── navigation.js       # Menu e navegação
    ├── spotlight.js        # Efeito spotlight
    ├── animations.js       # Scroll reveal
    ├── particles.js        # Efeito de partículas
    └── main.js             # Inicialização
```

## 🚀 Como Executar Localmente

### Opção 1: Python (mais simples)
```bash
cd outsiders-community
python3 -m http.server 8000
```

### Opção 2: Node.js (Vercel)
```bash
npx vercel dev
```

## ⚙️ Configurações (Links Externos)

Todas as configurações e links importantes estão em `js/config.js`:

```javascript
// LINKS EXTERNOS (Editado pelo usuário)
LINKS: {
    comunidade: "...",
    consultoria: "...",
    outstore: "...",
    // ...
}
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Importe este repositório no Vercel.
2. **Importante:** Se o repositório contiver a pasta raiz e o site estiver dentro de `outsiders-community`, configure o **"Root Directory"** nas configurações do projeto no Vercel para `outsiders-community`.
3. Deploy!

## 🤝 Contribuindo

Este é um projeto proprietário da Outsiders Community.

## 📧 Contato

- Email: contato@outsiders.community
- Twitter: @outsiders_papini

---

**"A elite se comunica por sinais. Nós traduzimos em conhecimento."** 🔮

© 2026 Outsiders Community. Todos os direitos reservados.
