import { Service } from '../data/content';

export function createServiceCard(service: Service): string {
  return `
    <article class="service-card" id="${service.id}">
      <div class="service-card-header">
        <h3>${service.title}</h3>
      </div>
      <div class="service-card-body">
        <p class="service-description">${service.description}</p>
        ${service.details.length > 0 ? `
          <ul class="service-details">
            ${service.details.map(detail => `<li>${detail}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    </article>
  `;
}

export function createServiceGrid(services: Service[]): string {
  return `
    <section class="services-grid">
      ${services.map(service => createServiceCard(service)).join('')}
    </section>
  `;
}
