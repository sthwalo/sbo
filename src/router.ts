import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { ServicesPage } from './pages/services';
import { WellnessPage } from './pages/serve';
import { ApproachPage } from './pages/approach';
import { ContactPage, initContactForm } from './pages/contact';
import { GalleryPage } from './pages/gallery';

interface Route {
  path: string;
  title: string;
  description?: string;
  render: () => string;
  onMount?: () => void;
}

const routes: Route[] = [
  {
    path: '/',
    title: 'Home - SboBlessed Consulting',
    description: 'Professional Skills Development and Training consultancy specialising in design, facilitation, and implementation of skills development solutions. SETA-aligned training, accredited provider, and inclusive skills development across South Africa.',
    render: HomePage
  },
  {
    path: '/about',
    title: 'About Us - SboBlessed Consulting',
    description: 'Learn about SboBlessed Consulting, an accredited training provider offering credit-bearing and non-credit-bearing programmes through physical and virtual platforms.',
    render: AboutPage
  },
  {
    path: '/services',
    title: 'Our Services - SboBlessed Consulting',
    description: 'Explore our skills development training services, accredited training programs, SDF services, workplace skills plans, and employee wellness solutions.',
    render: ServicesPage
  },
  {
    path: '/wellness',
    title: 'Employee Wellness Services - SboBlessed Consulting',
    description: 'Professional employee wellness services including health screenings, workplace wellness programs, and inclusive skills development for disability inclusion.',
    render: WellnessPage
  },
  {
    path: '/approach',
    title: 'Our Approach - SboBlessed Consulting',
    description: 'Discover our approach to skills development, focusing on outcomes-driven training, SETA compliance, and measurable results across South Africa.',
    render: ApproachPage
  },
  {
    path: '/gallery',
    title: 'Gallery - SboBlessed Consulting',
    description: 'Explore our gallery of events, training sessions, and wellness programs showcasing our skills development initiatives across South Africa.',
    render: GalleryPage
  },
  {
    path: '/contact',
    title: 'Contact Us - SboBlessed Consulting',
    description: 'Get in touch with SboBlessed Consulting for professional skills development and training services. Contact our accredited training providers today.',
    render: ContactPage,
    onMount: initContactForm
  }
];

function getRoute(path: string): Route {
  const route = routes.find(r => r.path === path);
  return route || routes[0];
}

export function navigateToRoute(path: string): void {
  const route = getRoute(path);

  document.title = route.title;

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  if (metaDescription && route.description) {
    metaDescription.content = route.description;
  }

  // Update URL without page reload
  if (window.location.pathname !== path) {
    window.history.pushState(null, route.title, path);
  }

  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.innerHTML = route.render();
  }

  if (route.onMount) {
    route.onMount();
  }

  window.scrollTo(0, 0);

  updateActiveNavLink(path);
}

function updateActiveNavLink(path: string): void {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

export function initRouter(): void {
  function handleRoute() {
    const path = window.location.pathname || '/';
    navigateToRoute(path);
  }

  window.addEventListener('popstate', handleRoute);
  window.addEventListener('load', handleRoute);

  handleRoute();
}
