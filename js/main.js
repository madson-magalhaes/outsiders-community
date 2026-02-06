// ========================================
// MAIN - Inicialização e Orquestração
// ========================================

class OutsidersWebsite {
    constructor() {
        this.init();
    }

    init() {
        devLog('Outsiders Community Website initializing...');

        // Lazy load images
        lazyLoadImages();

        // Log device info
        devLog('Screen size:', getScreenSize());
        devLog('Viewport:', window.innerWidth + 'x' + window.innerHeight);

        // Setup global event listeners
        this.setupGlobalListeners();

        // Performance monitoring
        if (CONFIG.DEV_MODE) {
            this.monitorPerformance();
        }

        devLog('Website fully initialized');
    }

    setupGlobalListeners() {
        // Log resize events
        window.addEventListener('resize', debounce(() => {
            devLog('Window resized:', window.innerWidth + 'x' + window.innerHeight);
        }, 500));

        // Setup Internal/External Links
        this.updateLinks();
    }

    updateLinks() {
        // Mapeamento: seletor CSS -> chave no CONFIG.LINKS
        const linkMap = {
            'a[href="#comunidade"]': 'comunidade',
            'a[href="#consultoria"]': 'consultoria',
            'a[href="#outstore"]': 'outstore',
            'a[href="#newsletter"]': 'newsletter',
            'a[href="#join"]': 'join'
        };

        Object.entries(linkMap).forEach(([selector, configKey]) => {
            const url = CONFIG.LINKS[configKey];
            if (url) {
                document.querySelectorAll(selector).forEach(el => {
                    el.href = url;
                    el.target = "_blank"; // Abrir em nova aba
                    el.rel = "noopener noreferrer"; // Segurança
                    devLog(`Updated link: ${selector} -> ${url}`);
                });
            }
        });

        // Handle generic external links
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            if (link.hostname !== window.location.hostname) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    monitorPerformance() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    devLog('Page Load Time:', (perfData.loadEventEnd - perfData.loadEventStart) + 'ms');
                    devLog('DOM Content Loaded:', (perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart) + 'ms');
                }
            }, 0);
        });
    }
}

// Inicializar tudo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new OutsidersWebsite());
} else {
    new OutsidersWebsite();
}

// Easter egg no console
console.log('%cOutsiders Community', 'color: #B8860B; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px rgba(184, 134, 11, 0.5);');
console.log('%cA elite se comunica por sinais. Você está vendo além da Matrix?', 'color: #6B46C1; font-size: 14px; font-style: italic;');
console.log('%cWebsite by Claude Code 🚀', 'color: #00D9FF; font-size: 12px;');
