// Theme Management
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('themeToggle');
    this.themeIcon = document.getElementById('themeIcon');
    this.init();
  }

  init() {
    if (!this.themeToggle || !this.themeIcon) return;
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

// Instanciar o gerenciador de tema
new ThemeManager();
