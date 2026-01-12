import { createHero } from '../components/Hero';
import { createSection } from '../components/Section';
import { galleryEvents } from '../data/content';

export function GalleryPage(): string {
  return `
    <main>
      ${createHero({
        title: 'Our Gallery',
        subtitle: 'Capturing Moments of Learning and Growth',
        variant: 'secondary'
      })}

      ${galleryEvents.map(event => createSection({
        title: `${event.title} - ${event.date}`,
        content: `
          <p class="lead">${event.description}</p>
          <div class="gallery-grid">
            ${event.images.map(image => `
              <div class="gallery-item">
                <img src="${image.src}" alt="${image.alt}" loading="lazy">
                ${image.caption ? `<p class="gallery-caption">${image.caption}</p>` : ''}
              </div>
            `).join('')}
          </div>
        `,
        variant: event.id.includes('wellness') ? 'accent' : event.id.includes('inclusion') ? 'light' : 'dark'
      })).join('')}
    </main>
  `;
}