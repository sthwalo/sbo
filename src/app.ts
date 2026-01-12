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

  initMobileMenu();
  initRouter();
}
