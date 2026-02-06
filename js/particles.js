// ========================================
// PARTICLE EFFECT - Background Stars
// ========================================

class ParticleEffect {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = CONFIG.PARTICLE_COUNT;
        
        this.init();
    }
    
    init() {
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', debounce(() => this.resize(), 250));
        
        devLog('Particle Effect initialized', this.particleCount + ' particles');
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new Particle(this.canvas.width, this.canvas.height));
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.update();
            particle.draw(this.ctx);
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

class Particle {
    constructor(canvasWidth, canvasHeight) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.radius = Math.random() * 2;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.02;
        this.vx = (Math.random() - 0.5) * 0.1;
        this.vy = (Math.random() - 0.5) * 0.1;
        this.maxOpacity = this.opacity;
    }
    
    update() {
        // Twinkle effect
        this.opacity += this.twinkleSpeed;
        if (this.opacity > this.maxOpacity || this.opacity < 0) {
            this.twinkleSpeed *= -1;
        }
        
        // Subtle movement
        this.x += this.vx;
        this.y += this.vy;
        
        // Wrap around edges
        if (this.x < 0) this.x = window.innerWidth;
        if (this.x > window.innerWidth) this.x = 0;
        if (this.y < 0) this.y = window.innerHeight;
        if (this.y > window.innerHeight) this.y = 0;
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, ' + this.opacity + ')';
        ctx.fill();
    }
}

// Inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ParticleEffect('particlesCanvas');
    });
} else {
    new ParticleEffect('particlesCanvas');
}
