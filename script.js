// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Dynamic navbar background on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
    
    // Hide/show navbar on scroll
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Code block syntax highlighting animation
const codeBlocks = document.querySelectorAll('.code-content, .code-block-content');

codeBlocks.forEach(block => {
    const lines = block.querySelectorAll('div');
    lines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-20px)';
        line.style.transition = `all 0.3s ease ${index * 0.1}s`;
    });
});

// Animate code blocks when they come into view
const codeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const lines = entry.target.querySelectorAll('div');
            lines.forEach(line => {
                line.style.opacity = '1';
                line.style.transform = 'translateX(0)';
            });
        }
    });
}, { threshold: 0.3 });

codeBlocks.forEach(block => {
    codeObserver.observe(block);
});

// Interactive logo
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });
});

// Typing animation for hero code example
const codeExample = document.querySelector('.code-example .code-content');
const originalContent = codeExample.innerHTML;

// function typeWriterEffect() {
//     codeExample.innerHTML = '';
//     let index = 0;
//     const content = originalContent;
    
//     function addChar() {
//         if (index < content.length) {
//             codeExample.innerHTML = content.slice(0, index + 1);
//             index++;
//             setTimeout(addChar, 20);
//         }
//     }
    
//     setTimeout(addChar, 1000);
// }

// Trigger typing animation after page load
window.addEventListener('load', () => {
    setTimeout(typeWriterEffect, 2000);
});

// Feature card hover effects
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const bgAnimation = document.querySelector('.bg-animation');
    bgAnimation.style.transform = `translateY(${rate}px)`;
});

// Mobile menu toggle (for future enhancement)
// const createMobileMenu = () => {
//     const navContainer = document.querySelector('.nav-container');
//     const navLinks = document.querySelector('.nav-links');
    
//     if (window.innerWidth <= 768) {
//         const menuButton = document.createElement('button');
//         menuButton.innerHTML = '☰';
//         menuButton.style.cssText = `
//             background: none;
//             border: none;
//             color: var(--text-primary);
//             font-size: 1.5rem;
//             cursor: pointer;
//             display: block;
//         `;
        
//         if (!document.querySelector('.mobile-menu-btn')) {
//             menuButton.classList.add('mobile-menu-btn');
//             navContainer.appendChild(menuButton);
//         }
//     }
// };

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Add floating particles effect
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: rgba(99, 102, 241, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        animation: floatUp ${5 + Math.random() * 5}s linear forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 10000);
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create particles periodically
setInterval(createParticle, 2000);

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg: Show special message
        const message = document.createElement('div');
        message.innerHTML = '🎉 You found the easter egg! JhayScript loves retro gamers! 🎮';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--gradient-1);
            color: white;
            padding: 2rem;
            border-radius: 16px;
            z-index: 10000;
            font-size: 1.2rem;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
        
        konamiCode = [];
    }
});
