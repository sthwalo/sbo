export interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'primary' | 'secondary';
}

export function createHero(props: HeroProps): string {
  const variant = props.variant || 'primary';

  return `
    <section class="hero hero-${variant}" role="banner">
      <img src="/background.jpeg" alt="Hero background" class="hero-bg-image" aria-hidden="true" />
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">${props.title}</h1>
          ${props.subtitle ? `<p class="hero-subtitle">${props.subtitle}</p>` : ''}
          ${props.ctaText && props.ctaLink ? `
            <div class="hero-cta">
              <a href="${props.ctaLink}" class="btn btn-primary">${props.ctaText}</a>
            </div>
          ` : ''}
        </div>
      </div>
    </section>
  `;
}
