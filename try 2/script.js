// ==================== PRELOADER ====================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => preloader.classList.add('hidden'), 500);
});

// ==================== PARTICLES ====================
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
    particle.style.animationDuration = Math.random() * 10 + 8 + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particlesContainer.appendChild(particle);
}

// ==================== NAVBAR SCROLL ====================
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar background
    navbar.classList.toggle('scrolled', scrollY > 50);

    // Back to top button
    backToTop.classList.toggle('visible', scrollY > 500);

    // Active nav link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== HAMBURGER MENU ====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ==================== SCROLL REVEAL ====================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ==================== SKILL BARS ANIMATION ====================
const skillFills = document.querySelectorAll('.skill-fill');

const animateSkills = () => {
    skillFills.forEach(fill => {
        const rect = fill.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            fill.style.width = fill.getAttribute('data-width');
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ==================== CONTACT FORM ====================
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon. 🚀');
    e.target.reset();
});

// ==================== TYPED EFFECT (optional hover on name) ====================
const heroName = document.querySelector('.hero-name span');
if (heroName) {
    heroName.addEventListener('mouseenter', () => {
        heroName.style.transform = 'skewX(-3deg)';
    });
    heroName.addEventListener('mouseleave', () => {
        heroName.style.transform = 'skewX(0deg)';
    });
}