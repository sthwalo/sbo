import { createHeader, initMobileMenu } from './components/Header';
import { createFooter } from './components/Footer';
import { initRouter } from './router';

export function initApp(): void {
  const root = document.getElementById('app');

  if (!root) {
    console.error('App root element not found');
    return;
  }

  const appStructure = `
    ${createHeader()}
    <div id="app"></div>
    ${createFooter()}
  `;

  document.body.innerHTML = appStructure;

  // Ensure meta tags use the deployed absolute origin for accurate social previews
  const origin = window.location.origin;
  function upsertMeta(attrName: string, attrValue: string, content: string) {
    let selector = `meta[${attrName}="${attrValue}"]`;
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.content = content;
  }

  // Set absolute URLs so social platforms can fetch the correct image and url
  upsertMeta('property', 'og:image', `${origin}/sbo.jpeg`);
  upsertMeta('name', 'twitter:image', `${origin}/sbo.jpeg`);
  upsertMeta('property', 'og:url', origin + window.location.pathname);

  initMobileMenu();
  initRouter();
}
