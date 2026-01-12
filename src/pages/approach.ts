import { createHero } from '../components/Hero';
import { createSection } from '../components/Section';
import { ourApproach } from '../data/content';

export function ApproachPage(): string {
  return `
    <main>
      ${createHero({
        title: 'Our Approach',
        subtitle: 'Strategic, Compliant, and Results-Driven',
        variant: 'secondary'
      })}

      ${createSection({
        title: 'Partnership-Driven Solutions',
        content: `
          <p class="lead">We partner closely with our clients to deliver skills development solutions that are practical, compliant, and aligned with national development goals.</p>
          <p>Our approach is built on collaboration, expertise, and a deep understanding of SETA requirements and skills development best practices.</p>
        `,
        variant: 'light'
      })}

      ${createSection({
        title: 'Our Process',
        content: `
          <div class="approach-steps">
            ${ourApproach.map((step, index) => `
              <div class="approach-step">
                <div class="step-number">${index + 1}</div>
                <h3>${step}</h3>
              </div>
            `).join('')}
          </div>
        `,
        variant: 'accent'
      })}

      ${createSection({
        title: 'Key Principles',
        content: `
          <div class="principles-grid">
            <div class="principle-card">
              <h3>Compliance First</h3>
              <p>Every solution we deliver meets SETA and QCTO requirements, ensuring your organisation remains compliant and audit-ready.</p>
            </div>
            <div class="principle-card">
              <h3>Quality Assurance</h3>
              <p>All training is delivered by qualified, registered professionals with proper assessment and moderation processes.</p>
            </div>
            <div class="principle-card">
              <h3>Measurable Impact</h3>
              <p>We focus on outcomes that matter, delivering tangible results and demonstrable return on investment.</p>
            </div>
            <div class="principle-card">
              <h3>Inclusive Development</h3>
              <p>We are committed to inclusive skills development, ensuring accessibility and opportunity for all.</p>
            </div>
          </div>
        `,
        variant: 'light'
      })}

      ${createSection({
        title: 'Holistic Wellness Support',
        content: `
          <p class="lead">Beyond skills training, we support employee wellness to create healthier, more productive workplaces.</p>
          <p>Our comprehensive wellness programs complement our training initiatives, addressing the physical and mental health needs of your workforce.</p>
          <a href="/wellness" class="btn btn-secondary">Learn About Wellness Services</a>
        `,
        variant: 'accent'
      })}

      ${createSection({
        title: 'Experience the SboBlessed Difference',
        content: `
          <p class="lead">Our solutions are not one-size-fits-all. We take the time to understand your unique needs, challenges, and goals.</p>
          <div class="cta-group">
            <a href="/contact" class="btn btn-primary">Start Your Journey</a>
            <a href="/services" class="btn btn-outline">Explore Our Services</a>
          </div>
        `,
        variant: 'dark',
        className: 'cta-section'
      })}
    </main>
  `;
}
