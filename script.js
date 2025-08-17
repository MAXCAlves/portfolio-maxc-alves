// Header Scroll Effect
class HeaderManager {
  constructor() {
    this.header = document.getElementById('header');
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

document.addEventListener('DOMContentLoaded', () => {
  new HeaderManager();
});

// Smooth Scrolling
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}