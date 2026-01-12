import { createHero } from '../components/Hero';
import { createSection, createListSection } from '../components/Section';
import { createServiceCard } from '../components/ServiceCard';
import { companyInfo, services, whyChooseUs } from '../data/content';

export function HomePage(): string {
  const featuredServices = services.slice(0, 3);

  return `
    <main>
      ${createHero({
        title: companyInfo.name,
        subtitle: companyInfo.tagline,
        ctaText: 'Get in Touch',
        ctaLink: '/contact',
        variant: 'primary'
      })}

      ${createSection({
        title: 'Who We Are',
        content: `
          <p class="lead">${companyInfo.description}</p>
          <p>We are an accredited training provider, offering both credit-bearing and non-credit-bearing programmes, delivered through physical (in-person) and virtual training platforms.</p>
          <div class="cta-group">
            <a href="/about" class="btn btn-secondary">Learn More About Us</a>
            <a href="/services" class="btn btn-outline">View Our Services</a>
          </div>
        `,
        variant: 'light'
      })}

      <section class="content-section section-accent">
        <div class="container">
          <h2 class="section-title">Featured Services</h2>
          <div class="services-grid-home">
            ${featuredServices.map(service => createServiceCard(service)).join('')}
          </div>
          <div class="text-center" style="margin-top: 2rem;">
            <a href="/services" class="btn btn-primary">View All Services</a>
          </div>
        </div>
      </section>

      ${createListSection('Why Choose SboBlessed Consulting?', whyChooseUs, 'light')}

      ${createSection({
        title: 'Ready to Transform Your Workforce?',
        content: `
          <p class="lead">Whether you are looking to train your workforce, access SETA funding, or implement inclusive skills development programmes, SboBlessed Consulting is your trusted partner.</p>
          <div class="cta-group">
            <a href="/contact" class="btn btn-primary">Contact Us Today</a>
          </div>
        `,
        variant: 'dark',
        className: 'cta-section'
      })}
    </main>
  `;
}
