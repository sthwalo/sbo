export interface SectionProps {
  title?: string;
  content: string;
  className?: string;
  variant?: 'light' | 'dark' | 'accent';
}

export function createSection(props: SectionProps): string {
  const variant = props.variant || 'light';
  const className = props.className || '';

  return `
    <section class="content-section section-${variant} ${className}">
      <div class="container">
        ${props.title ? `<h2 class="section-title">${props.title}</h2>` : ''}
        <div class="section-content">
          ${props.content}
        </div>
      </div>
    </section>
  `;
}

export function createListSection(title: string, items: string[], variant?: 'light' | 'dark' | 'accent'): string {
  return createSection({
    title,
    content: `
      <ul class="feature-list">
        ${items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `,
    variant
  });
}
