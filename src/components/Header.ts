import { companyInfo } from '../data/content';
import { navigateToRoute } from '../router';

export function createHeader(): string {
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { 
      path: '/approach', 
      label: 'Our Approach', 
      submenu: [
        { path: '/approach', label: 'Overview' },
        { path: '/wellness', label: 'Wellness' }
      ]
    },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return `
    <header class="site-header" role="banner">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a href="/" aria-label="Home">
              <img src="/sbo.jpeg" alt="${companyInfo.name} Logo" class="logo-image">
              <span class="logo-text" style="display: none;">${companyInfo.name}</span>
            </a>
          </div>
          <button class="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav class="main-nav" role="navigation" aria-label="Main navigation">
            <ul>
              ${routes.map(route => route.submenu ? `
                <li class="dropdown">
                  <a href="${route.path}" class="nav-link dropdown-toggle">${route.label}</a>
                  <ul class="submenu">
                    ${route.submenu.map(sub => `<li><a href="${sub.path}" class="nav-link">${sub.label}</a></li>`).join('')}
                  </ul>
                </li>
              ` : `
                <li><a href="${route.path}" class="nav-link">${route.label}</a></li>
              `).join('')}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  `;
}

export function initMobileMenu(): void {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', (!isExpanded).toString());
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.site-header')) {
      nav.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }
  });

  const navLinks = nav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });

  // Handle submenu toggle on mobile
  const dropdownToggles = nav.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = toggle.closest('.dropdown');
        dropdown?.classList.toggle('submenu-open');
      }
    });
  });

  // Handle SPA navigation
  initNavHandlers();
}

export function initNavHandlers(): void {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('.nav-link') as HTMLAnchorElement;
    
    if (link && link.href.startsWith(window.location.origin)) {
      e.preventDefault();
      const path = link.getAttribute('href') || '/';
      navigateToRoute(path);
    }
  });
}
