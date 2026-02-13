// ========================================
// NAVEGAÇÃO E MENU
// ========================================

class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.mobileNav = document.getElementById('mobileNav');
        this.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

        this.init();
    }

    init() {
        this.setupSmoothScroll();
        this.setupMobileMenu();
        this.setupScrollEffect();
        devLog('Navigation initialized');
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                // Apenas para links âncora internos
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);

                    if (target) {
                        // Fecha menu mobile se estiver aberto
                        this.closeMobileMenu();

                        // Scroll suave
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    setupMobileMenu() {
        if (!this.mobileMenuToggle) return;

        this.mobileMenuToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (this.mobileNav.classList.contains('active') &&
                !this.mobileNav.contains(e.target) &&
                !this.mobileMenuToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        this.mobileNav.classList.toggle('active');
        this.mobileMenuToggle.classList.toggle('active');

        // Animar hamburger
        const lines = this.mobileMenuToggle.querySelectorAll('.hamburger-line');
        if (this.mobileNav.classList.contains('active')) {
            lines[0].style.transform = 'rotate(45deg) translateY(8px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    }

    closeMobileMenu() {
        this.mobileNav.classList.remove('active');
        this.mobileMenuToggle.classList.remove('active');

        const lines = this.mobileMenuToggle.querySelectorAll('.hamburger-line');
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
    }

    setupScrollEffect() {
        let lastScroll = 0;

        window.addEventListener('scroll', throttle(() => {
            const currentScroll = window.pageYOffset;

            // Adicionar backdrop blur quando scrollar
            // Scroll effect logic - Background is now permanently dark via CSS
            /*
            if (currentScroll > 100) {
                this.navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            } else {
                this.navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            }
            */

            lastScroll = currentScroll;
        }, 100));
    }
}

// Inicializar quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new Navigation());
} else {
    new Navigation();
}
