# SboBlessed Consulting Website

A professional website for SboBlessed Consulting, a skills development and training consultancy specializing in design, facilitation, and implementation of skills development solutions in South Africa.

## Overview

This is a vanilla TypeScript website built with Vite, featuring History API routing and no external frameworks. The site renders static HTML strings for a consulting website focused on skills development and training services.

## Architecture

- **Framework**: Vanilla TypeScript with Vite
- **Routing**: History API (pushState/popstate) for client-side navigation
- **Styling**: CSS custom properties with BEM-like conventions
- **Data**: Static TypeScript interfaces and data structures
- **Build**: Vite for fast development and optimized production builds

## Key Features

- Responsive design for all devices
- SEO-optimized with dynamic meta tags
- Accessible navigation and content
- Gallery showcasing training events and wellness programs
- Contact forms with validation
- Mobile-first responsive layout

## Project Structure

```
├── src/
│   ├── app.ts                 # Application initialization
│   ├── main.ts                # Entry point
│   ├── router.ts              # Client-side routing
│   ├── styles.css             # Global styles and CSS variables
│   ├── components/            # Reusable UI components
│   │   ├── Header.ts
│   │   ├── Hero.ts
│   │   ├── Section.ts
│   │   ├── ServiceCard.ts
│   │   └── Footer.ts
│   ├── pages/                 # Page generators
│   │   ├── home.ts
│   │   ├── about.ts
│   │   ├── services.ts
│   │   ├── approach.ts
│   │   ├── gallery.ts
│   │   ├── contact.ts
│   │   └── serve.ts (Wellness page)
│   └── data/                  # Static data and types
│       ├── content.ts
│       └── brand.ts
├── public/                    # Static assets
│   ├── gallery/               # Event images
│   └── sbo.jpeg               # Logo
├── docs/                      # Documentation
│   ├── architecture/
│   └── tasks/
├── dist/                      # Build output (generated)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sbo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

### Build Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production to `dist/` folder
- `npm run preview` - Preview production build locally

## Core Patterns

### Component Structure

All UI components are pure functions that accept typed props and return HTML strings:

```typescript
export function createHero(props: HeroProps): string {
  return `
    <section class="hero">
      <h1>${props.title}</h1>
      <!-- ... -->
    </section>
  `;
}
```

### Page Rendering

Pages are functions returning complete HTML strings, composed from components:

```typescript
export function HomePage(): string {
  return `
    <main>
      ${createHero(homeHeroProps)}
      ${createSection(homeContent)}
    </main>
  `;
}
```

### Data Management

Static data defined with TypeScript interfaces:

```typescript
export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}
```

### Routing

Client-side routing with History API:

```typescript
const routes: Route[] = [
  { path: '/', render: HomePage },
  { path: '/about', render: AboutPage },
  // ...
];
```

## Styling

- CSS custom properties for consistent theming
- Brand colors defined in `src/data/brand.ts`
- Responsive breakpoints and spacing variables
- BEM-like class naming conventions

### Color Palette

- Primary: `#17b7c6` (teal/cyan)
- Primary Dark: `#0f9aa3`
- Accent: `#b7d233` (lime-green)
- Background: `#ffffff`
- Text: `#333333`
- Muted: `#666666`

## Deployment

The site generates a static build in the `dist/` folder that can be deployed to any static hosting service:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder contents to:
   - GitHub Pages
   - Netlify
   - Vercel
   - AWS S3 + CloudFront
   - Any static web server

## Services Offered

- **Skills Development Training**: Credit-bearing and non-credit programs
- **Accredited Training Provider**: SETA and QCTO compliant
- **SDF Services**: Workplace Skills Plans and Annual Training Reports
- **SETA Programme Support**: Bursaries, Learnerships, Internships
- **Assessment & Moderation**: Qualified professionals
- **Disability Inclusion**: Specialized programs for persons with disabilities
- **Employee Wellness**: Health screenings and wellness programs

## Contact

**Sylvia Maseko-Mhlanga**  
Skills Development Facilitator  
Phone: 0824355370  
Email: sylvia@sboblessedconsulting.co.za  
Address: Suite 1018, 6 Waxbills street, Nelspruit 1200

## Contributing

1. Follow the established collaboration protocol in `.github/copilot-instructions.md`
2. Maintain TypeScript strict mode
3. Ensure responsive design
4. Test builds before committing
5. Update documentation as needed

## License

[Add license information here]