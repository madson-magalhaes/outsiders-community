// ========================================
// SCROLL ANIMATIONS
// ========================================

class ScrollAnimations {
    constructor() {
        this.revealElements = document.querySelectorAll('.reveal');
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        devLog('Scroll Animations initialized');
    }
    
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, CONFIG.SCROLL_REVEAL_DELAY);
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        
        this.revealElements.forEach(el => observer.observe(el));
    }
}

// Inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ScrollAnimations());
} else {
    new ScrollAnimations();
}
