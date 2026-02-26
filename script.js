// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll-triggered fade-in for cards and sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.research-card, .news-item, .director-card, .about-text, .about-image, .funder-logo-placeholder').forEach(el => {
  el.classList.add('fade-in-el');
  observer.observe(el);
});

// CSS for fade-in (injected via JS to keep HTML clean)
const style = document.createElement('style');
style.textContent = `
  .fade-in-el {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity .6s cubic-bezier(.22,1,.36,1), transform .6s cubic-bezier(.22,1,.36,1);
  }
  .fade-in-el.visible {
    opacity: 1;
    transform: none;
  }
  .research-card:nth-child(2) { transition-delay: .08s; }
  .research-card:nth-child(3) { transition-delay: .16s; }
  .research-card:nth-child(4) { transition-delay: .24s; }
  .research-card:nth-child(5) { transition-delay: .32s; }
  .research-card:nth-child(6) { transition-delay: .40s; }
`;
document.head.appendChild(style);
