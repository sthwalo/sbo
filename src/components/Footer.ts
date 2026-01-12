import { companyInfo, contactInfo } from '../data/content';

export function createFooter(): string {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>${companyInfo.name}</h3>
            <p>${companyInfo.tagline}</p>
          </div>

          <div class="footer-section">
            <h4>Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>

          <div class="footer-section">
            <h4>Contact Us</h4>
            <address>
              <p><strong>${contactInfo.role}</strong></p>
              <p>${contactInfo.name}</p>
              <p><a href="tel:${contactInfo.phone.replace(/\s/g, '')}">${contactInfo.phone}</a></p>
              <p><a href="mailto:${contactInfo.email}">${contactInfo.email}</a></p>
              <p>${contactInfo.address}</p>
            </address>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${currentYear} ${companyInfo.name}. All rights reserved. Powered by Sthwalo Holdings.</p>
        </div>
      </div>
    </footer>
  `;
}
