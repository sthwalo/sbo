import { createHero } from '../components/Hero';
import { createSection } from '../components/Section';
import { contactInfo } from '../data/content';

export function ContactPage(): string {
  return `
    <main>
      ${createHero({
        title: 'Contact Us',
        subtitle: "Let's Build Skills Together",
        variant: 'secondary'
      })}

      ${createSection({
        title: 'Get in Touch',
        content: `
          <p class="lead">Whether you are looking to train your workforce, access SETA funding, or implement inclusive skills development programmes, we're here to help.</p>
        `,
        variant: 'light'
      })}

      <section class="content-section section-accent">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info-card">
              <h2>Contact Information</h2>
              <div class="contact-details">
                <div class="contact-item">
                  <h3>${contactInfo.role}</h3>
                  <p class="contact-name">${contactInfo.name}</p>
                </div>

                <div class="contact-item">
                  <h4>Phone</h4>
                  <p><a href="tel:${contactInfo.phone.replace(/\s/g, '')}" class="contact-link">${contactInfo.phone}</a></p>
                </div>

                <div class="contact-item">
                  <h4>Email</h4>
                  <p><a href="mailto:${contactInfo.email}" class="contact-link">${contactInfo.email}</a></p>
                </div>

                <div class="contact-item">
                  <h4>Address</h4>
                  <address>${contactInfo.address}</address>
                </div>
              </div>
            </div>

            <div class="contact-form-card">
              <h2>Send Us a Message</h2>
              <form class="contact-form" id="contactForm">
                <div class="form-group">
                  <label for="name">Full Name <span class="required">*</span></label>
                  <input type="text" id="name" name="name" required aria-required="true">
                </div>

                <div class="form-group">
                  <label for="email">Email Address <span class="required">*</span></label>
                  <input type="email" id="email" name="email" required aria-required="true">
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone">
                </div>

                <div class="form-group">
                  <label for="organisation">Organisation</label>
                  <input type="text" id="organisation" name="organisation">
                </div>

                <div class="form-group">
                  <label for="service">Service of Interest</label>
                  <select id="service" name="service">
                    <option value="">Select a service...</option>
                    <option value="skills-development">Skills Development Training</option>
                    <option value="accredited-training">Accredited Training</option>
                    <option value="sdf-services">SDF Services</option>
                    <option value="seta-support">SETA Programme Support</option>
                    <option value="assessment">Assessment & Moderation</option>
                    <option value="disability">Disability Skills Development</option>
                    <option value="wellness">Employee Wellness Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="message">Message <span class="required">*</span></label>
                  <textarea id="message" name="message" rows="5" required aria-required="true"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      ${createSection({
        title: 'Next Steps',
        content: `
          <div class="next-steps-grid">
            <div class="next-step">
              <h3>1. Get in Touch</h3>
              <p>Reach out via phone, email, or the contact form above.</p>
            </div>
            <div class="next-step">
              <h3>2. Consultation</h3>
              <p>We'll discuss your needs and explore suitable solutions.</p>
            </div>
            <div class="next-step">
              <h3>3. Tailored Proposal</h3>
              <p>Receive a customised proposal aligned with your goals.</p>
            </div>
            <div class="next-step">
              <h3>4. Implementation</h3>
              <p>We deliver professional, compliant skills development solutions.</p>
            </div>
          </div>
        `,
        variant: 'light'
      })}
    </main>
  `;
}

export function initContactForm(): void {
  const form = document.getElementById('contactForm') as HTMLFormElement;

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const subject = `Enquiry from ${data.name}`;
    const body = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Organisation: ${data.organisation || 'Not provided'}
Service of Interest: ${data.service || 'Not specified'}

Message:
${data.message}
    `.trim();

    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    alert('Your email client will open with the message. Please send the email to complete your enquiry.');
  });
}
