/**
 * SpotlightEffect Class
 * Creates a flashlight/spotlight effect that reveals the Saturn image under the Avatar
 * based on mouse movement.
 */

class SpotlightEffect {
    constructor() {
        this.container = document.querySelector('.image-hover-section');
        this.baseImage = document.querySelector('.avatar-image');
        this.revealImage = document.querySelector('.saturno-image');
        this.overlay = document.querySelector('.mystic-overlay');

        if (!this.container || !this.baseImage || !this.revealImage) {
            console.log('⚡ Spotlight: Elements not found');
            return;
        }

        this.init();
    }

    init() {
        console.log('⚡ Spotlight: Initializing...');

        // Ensure initial state
        this.revealImage.style.opacity = '1'; // It needs to be visible but masked
        this.revealImage.style.maskImage = 'radial-gradient(circle 300px at var(--x, 50%) var(--y, 50%), black 0%, transparent 100%)';
        this.revealImage.style.webkitMaskImage = 'radial-gradient(circle 300px at var(--x, 50%) var(--y, 50%), black 0%, transparent 100%)';

        // Set initial variable values to center
        this.container.style.setProperty('--x', '50%');
        this.container.style.setProperty('--y', '50%');

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.container.addEventListener('mousemove', (e) => this.updateSpotlight(e));

        // Touch support
        this.container.addEventListener('touchmove', (e) => {
            e.preventDefault(); // Prevent scroll while using effect
            const touch = e.touches[0];
            this.updateSpotlight(touch);
        }, { passive: false });
    }

    updateSpotlight(e) {
        const rect = this.container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.container.style.setProperty('--x', `${x}px`);
        this.container.style.setProperty('--y', `${y}px`);

        // Also update the mask on the reveal image directly if needed, 
        // but CSS variables are cleaner.
        // The CSS will handle the masking via the variables.
    }
}

// Auto-init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.spotlightEffect = new SpotlightEffect();
    });
} else {
    window.spotlightEffect = new SpotlightEffect();
}
