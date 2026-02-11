// ========================================
// CONFIGURAÇÕES GLOBAIS
// ========================================

const CONFIG = {
    // Animações
    ANIMATION_DURATION: 800,
    SCROLL_REVEAL_DELAY: 100,
    PARTICLE_COUNT: 200,

    // Áudio
    AUDIO_DEFAULT_VOLUME: 0.3,      // Volume inicial (0.0 a 1.0)
    AUDIO_AUTOSTART: true,          // Inicia automaticamente após primeira interação

    // Spotlight Effect
    SPOTLIGHT_RADIUS: 200,        // Tamanho do spotlight em pixels
    SPOTLIGHT_GLOW: 100,          // Tamanho do glow ao redor
    SPOTLIGHT_SMOOTH: true,       // Transição suave

    // Desenvolvimento
    DEV_MODE: true,
    DEBUG: true,  // Ativado para ver logs do áudio

    // Paths
    PATHS: {
        images: './assets/images/',
        audio: './assets/audio/',
        video: './assets/video/'
    },

    // Breakpoints (devem corresponder ao CSS)
    BREAKPOINTS: {
        mobile: 480,
        tablet: 768,
        desktop: 1024,
        wide: 1440
    },

    // LINKS EXTERNOS (Editado pelo usuário)
    LINKS: {
        comunidade: "https://lastlink.com/p/C7032E138?cp=SEGUIDOROUTSX", // Link para "Comunidade"
        consultoria: "https://x.com/outsiderpapini", // Link para "Consultoria"
        outstore: "https://cryptoshirts.io/collections/outsiders",     // Link para "OutStore"
        newsletter: "https://x.com/outsiderpapini", // Link para "Newsletter"
        join: "https://lastlink.com/p/C7032E138?cp=SEGUIDOROUTSX",       // Botão "Entrar na Ordem"

        telegram: "https://t.me/outsiderscommunity",
        discord: "https://discord.gg/outsiders",
        twitter: "https://twitter.com/outsiders_papini",
        youtube: "https://youtube.com/@outsiderpapini"
    }
};

// Função helper para log em dev mode
const devLog = (message, data = null) => {
    if (CONFIG.DEV_MODE && CONFIG.DEBUG) {
        console.log(`[DEV] ${message}`, data || '');
    }
};

// Export para outros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, devLog };
}
