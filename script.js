// Theme Management
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('themeToggle');
    this.themeIcon = document.getElementById('themeIcon');
    if (!this.themeToggle || !this.themeIcon) return;
    this.init();
  }
  init() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    this.setTheme(shouldBeDark);
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }
  setTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      this.themeIcon.className = 'bx bx-sun text-xl';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      this.themeIcon.className = 'bx bx-moon text-xl';
      localStorage.setItem('theme', 'light');
    }
  }
  toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    this.setTheme(!isDark);
  }
}

// Header Scroll Effect
class HeaderManager {
  constructor() {
    this.header = document.getElementById('header');
    if (!this.header) return;
    this.init();
  }
  init() {
    window.addEventListener('scroll', () => this.handleScroll());
  }
  handleScroll() {
    const isScrolled = window.scrollY > 50;
    this.header.classList.toggle('scrolled', isScrolled);
  }
}

// Mobile Menu
class MobileMenuManager {
  constructor() {
    this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
    this.mobileMenu = document.getElementById('mobileMenu');
    this.menuIcon = document.getElementById('menuIcon');
    if (!this.mobileMenuToggle || !this.mobileMenu || !this.menuIcon) return;
    this.isOpen = false;
    this.init();
  }
  init() {
    this.mobileMenuToggle.addEventListener('click', () => this.toggleMenu());
  }
  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.mobileMenu.classList.remove('hidden');
      this.menuIcon.className = 'bx bx-x text-2xl';
    } else {
      this.mobileMenu.classList.add('hidden');
      this.menuIcon.className = 'bx bx-menu text-2xl';
    }
  }
  closeMenu() {
    this.isOpen = false;
    this.mobileMenu.classList.add('hidden');
    this.menuIcon.className = 'bx bx-menu text-2xl';
  }
}

// Smooth Scrolling
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    if (window.mobileMenu) window.mobileMenu.closeMenu?.();
  }
}

// Back to Top
class BackToTopManager {
  constructor() {
    this.backToTopBtn = document.getElementById('backToTop');
    if (!this.backToTopBtn) return;
    this.init();
  }
  init() {
    window.addEventListener('scroll', () => this.handleScroll());
    this.backToTopBtn.addEventListener('click', () => this.scrollToTop());
  }
  handleScroll() {
    const isVisible = window.scrollY > 300;
    this.backToTopBtn.classList.toggle('visible', isVisible);
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Projects
class ProjectsManager {
  constructor() {
    this.projects = [
      {
        id: 1,
        title: 'Análise Preditiva de Vendas',
        description: 'Modelo de previsão para e-commerce com ML e visualização de resultados.',
        image: 'img/projeto1.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=300&auto=format&fit=crop',
        link: 'https://github.com/MAXCAlves',
        technologies: ['Python','Pandas','Scikit-Learn']
      },
      {
        id: 2,
        title: 'Chatbot Inteligente',
        description: 'Atendimento automatizado com NLP e integrações.',
        image: 'img/projeto2.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400&h=300&auto=format&fit=crop',
        link: 'https://github.com/MAXCAlves',
        technologies: ['TensorFlow','NLTK','APIs']
      },
      {
        id: 3,
        title: 'Detecção de Fraudes',
        description: 'Monitoramento de transações com redes neurais.',
        image: 'img/projeto3.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=400&h=300&auto=format&fit=crop',
        link: 'https://github.com/MAXCAlves',
        technologies: ['Keras','PyTorch','AWS']
      },
    ];
    this.init();
  }
  init() { this.renderProjects(); }
  renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = this.projects.map((p, i) => `
      <div class="project-card group" style="animation-delay:${i*0.1}s">
        <div class="relative overflow-hidden">
          <img src="${p.image}" alt="${p.title}" onerror="this.src='${p.fallbackImage}'">
          <div class="project-overlay"></div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-max-blue transition-colors duration-300">${p.title}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">${p.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${p.technologies.map(t => `<span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded-full">${t}</span>`).join('')}
          </div>
          <button class="project-button" onclick="window.open('${p.link}','_blank')">Ver Projeto</button>
        </div>
      </div>
    `).join('');
  }
}

// Social Links
class SocialLinksManager {
  constructor() {
    this.socialLinks = [
      { name:'LinkedIn', url:'https://www.linkedin.com/in/maximiliano-alves-050b8530b/', icon:'bxl-linkedin', class:'linkedin' },
      { name:'GitHub', url:'https://github.com/MAXCAlves', icon:'bxl-github', class:'github' },
      { name:'Currículo', url:'#', icon:'bx bx-file', class:'cv' }
    ];
    this.init();
  }
  init(){ this.renderSocialLinks(); }
  renderSocialLinks(){
    const el = document.getElementById('socialLinks');
    if (!el) return;
    el.innerHTML = this.socialLinks.map((s, i) => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-card ${s.class}" style="animation-delay:${i*0.1}s">
        <i class="bx ${s.icon} text-5xl mb-4"></i>
        <span class="font-semibold text-xl mb-2">${s.name}</span>
        <i class="bx bx-link-external opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
      </a>
    `).join('');
  }
}

// Animation Observer
class AnimationObserver {
  constructor() { this.init(); }
  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.style.animationPlayState = 'running'; });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-fade-slide-up').forEach(el => {
      el.style.animationPlayState = 'paused'; observer.observe(el);
    });
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  window.themeManager = new ThemeManager();
  window.headerManager = new HeaderManager();
  window.mobileMenu = new MobileMenuManager();
  window.backToTop = new BackToTopManager();
  window.projectsManager = new ProjectsManager();
  window.socialLinksManager = new SocialLinksManager();
  window.animationObserver = new AnimationObserver();
  window.scrollToSection = scrollToSection;

  // Smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Lazy images
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img').forEach(img => { img.loading = 'lazy'; });
  }
});

// Resize behavior
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && window.mobileMenu?.closeMenu) window.mobileMenu.closeMenu();
});

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && window.mobileMenu?.closeMenu) window.mobileMenu.closeMenu();
  if (e.ctrlKey && e.key === 'Home') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
});
