import { createHero } from '../components/Hero';
import { createSection, createListSection } from '../components/Section';
import { wellnessServices } from '../data/content';

export function WellnessPage(): string {
  return `
    <main>
      ${createHero({
        title: 'Employee Wellness & Health Screening',
        subtitle: 'Building healthier, more productive workforces',
        variant: 'secondary'
      })}

      ${createSection({
        title: 'Our Approach to Employee Wellness',
        content: `
          <p class="lead">${wellnessServices.intro}</p>
        `,
        variant: 'light'
      })}

      ${createSection({
        title: wellnessServices.flyInProgram.title,
        content: `
          <p class="lead">${wellnessServices.flyInProgram.description}</p>
          <p>Our wellness days are carefully planned and customised to suit your organisation's size, industry, and specific health priorities.</p>
        `,
        variant: 'accent'
      })}

      ${createListSection('Healthcare Professionals We Bring On-Site', wellnessServices.professionals, 'light')}

      ${createListSection('Health Screenings Offered', wellnessServices.screenings, 'accent')}

      ${createSection({
        title: 'Post-Screening Wellness Report',
        content: `
          <p class="lead">A key value of our service is the comprehensive wellness report provided after each wellness intervention.</p>
          <p>Once screenings are completed, SboBlessed compiles and submits a confidential, aggregated report to your organisation, giving you meaningful insights into the overall health status of your workforce.</p>
          <h3>The report helps you:</h3>
          <ul class="feature-list">
            ${wellnessServices.reportBenefits.map(benefit => `<li>${benefit}</li>`).join('')}
          </ul>
          <p><em>Individual employee data remains confidential at all times.</em></p>
        `,
        variant: 'light'
      })}

      ${createListSection('Why Invest in Employee Wellness?', wellnessServices.investmentBenefits, 'accent')}

      ${createSection({
        title: 'Customised for Your Organisation',
        content: `
          <p class="lead">Every organisation is unique. We work closely with your leadership and HR teams to design tailored wellness solutions aligned with your business goals, workforce demographics, and budget.</p>
          <div class="cta-group">
            <a href="/contact" class="btn btn-primary">Schedule a Wellness Programme</a>
            <a href="/services" class="btn btn-outline">View Our Other Services</a>
          </div>
        `,
        variant: 'dark',
        className: 'cta-section'
      })}
    </main>
  `;
}
