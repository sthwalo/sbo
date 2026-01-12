import { createHero } from '../components/Hero';
import { createSection } from '../components/Section';
import { createServiceGrid } from '../components/ServiceCard';
import { services } from '../data/content';

export function ServicesPage(): string {
  return `
    <main>
      ${createHero({
        title: 'Our Services',
        subtitle: 'Comprehensive Skills Development Solutions',
        variant: 'secondary'
      })}

      ${createSection({
        title: 'What We Offer',
        content: `
          <p class="lead">SboBlessed Consulting provides a comprehensive range of skills development services designed to meet the unique needs of organisations, communities, and individuals across South Africa.</p>
          <p>All our programmes are aligned with SETA requirements and national skills development priorities, ensuring compliance, quality, and measurable outcomes.</p>
        `,
        variant: 'light'
      })}

      <section class="content-section section-accent">
        <div class="container">
          <h2 class="section-title">Our Core Services</h2>
          ${createServiceGrid(services)}
        </div>
      </section>

      ${createSection({
        title: 'Ready to Get Started?',
        content: `
          <p class="lead">Contact us today to discuss your skills development needs and discover how we can help you achieve your goals.</p>
          <div class="cta-group">
            <a href="/contact" class="btn btn-primary">Contact Us</a>
            <a href="/wellness" class="btn btn-outline">Learn About Our Wellness Services</a>
          </div>
        `,
        variant: 'dark',
        className: 'cta-section'
      })}
    </main>
  `;
}
