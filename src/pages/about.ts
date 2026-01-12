import { createHero } from '../components/Hero';
import { createSection, createListSection } from '../components/Section';
import { aboutContent, whyChooseUs, whoWeServe } from '../data/content';

export function AboutPage(): string {
  return `
    <main>
      ${createHero({
        title: 'About SboBlessed Consulting',
        subtitle: 'Professional Skills Development and Training Excellence',
        variant: 'secondary'
      })}

      ${createSection({
        title: 'Our Story',
        content: `
          <p class="lead">${aboutContent.intro}</p>
          <p>${aboutContent.accreditation}</p>
        `,
        variant: 'light'
      })}

      ${createListSection('Why Choose Us?', whyChooseUs, 'accent')}

      ${createListSection('Who We Serve', whoWeServe, 'light')}

      ${createSection({
        title: 'Our Commitment',
        content: `
          <p class="lead">At SboBlessed Consulting, we are committed to delivering high-quality, compliant, and impactful skills development solutions.</p>
          <p>Our solutions are practical, compliant, and aligned with national development goals. We partner closely with our clients to deliver measurable impact and sustainable transformation.</p>
          <div class="cta-group">
            <a href="/services" class="btn btn-primary">Explore Our Services</a>
            <a href="/contact" class="btn btn-outline">Get in Touch</a>
          </div>
        `,
        variant: 'dark',
        className: 'cta-section'
      })}
    </main>
  `;
}
