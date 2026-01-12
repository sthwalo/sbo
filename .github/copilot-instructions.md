# Copilot Instructions for SboBlessed Consulting Website

## Architecture Overview
This is a vanilla TypeScript website built with Vite, featuring History API routing and no external frameworks. The app renders static HTML strings for a consulting website focused on skills development and training services in South Africa. All "pages" are client-side rendered functions that update the DOM without page reloads - the `src/pages/` folder contains page generators, not separate HTML files.

## Core Patterns
- **Component Structure**: All UI components are pure functions in `src/components/` that accept typed props and return HTML strings. Example: `createHero(props: HeroProps): string`
- **Page Rendering**: Pages in `src/pages/` are functions returning HTML strings, composed from components. Routing handled by `src/router.ts` with History API (pushState/popstate).
- **Data Management**: Static data defined in `src/data/content.ts` with TypeScript interfaces (e.g., `Service`, `ContactInfo`). No state management or APIs.
- **SEO Metadata**: Each route in `src/router.ts` includes title and description that update document metadata dynamically for search engines.
- **Styling**: CSS custom properties in `src/styles.css` for consistent theming, spacing, and colors. Colors defined in `src/data/brand.ts`:
  - Primary: `#17b7c6` (teal/cyan from logo)
  - Primary Dark: `#0f9aa3` (darker teal)
  - Accent: `#b7d233` (lime-green accent)
  - Background: `#ffffff`
  - Text: `#333333`
  - Muted: `#666666`
  - Card Background: `#f8f9fa`
  - Footer Background: `#333333`
  - Border: `rgba(0,0,0,0.08)`. Classes follow BEM-like conventions.

## Development Workflow
- **Start Development**: `npm run dev` (Vite dev server)
- **Build**: `npm run build` (runs TypeScript compilation then Vite build to `dist/`)
- **Preview**: `npm run preview` (serves built files)
- **TypeScript**: Strict mode enabled with unused variable checks. Target ES2020, modules as ESNext.


## Collaboration Protocol

### ⚠️ CRITICAL COLLABORATION REQUIREMENTS

**MANDATORY WORKFLOW**: We work together as a team. Do NOT jump into actions without explicit agreement.

#### 1. Phased Task Execution and Agreement
- **One Task at a Time**: Proceed through the project one task at a time, based on the established project task plan [md](../docs/tasks)
- **Mutual Agreement Required**: Mutual agreement on a task's scope and expected outcome is required before implementation begins
- **Pause and Explain**: If either of us needs clarification or a pause during execution, we commit to stopping and explaining the context thoroughly
- **Shared Ownership**: Both parties must understand and agree on what will be done before proceeding

#### 2. Code Implementation and Verification
- **Adherence to Architecture**: All code changes and configuration updates must adhere to the suggestions and architectural decisions defined in this document
- **Rigorous Testing**: Use rigorous testing practices and verify fixes/implementations together before marking a task as complete
- **Shared Quality**: Verify together before proceeding to the next stage - this ensures shared ownership of the solution's integrity
- **No Premature Commits**: Do not commit or push code until user explicitly confirms the fix works

#### 3. Thorough Analysis and Documentation
- **Analysis First**: Before implementing any solution, commit to analyzing all related files, dependencies, and potential downstream impacts
- **Shared Understanding**: This analysis phase is crucial for ensuring we both have a shared understanding of:
  - **What** needs to be changed
  - **Where** those changes occur
  - **Why** they are necessary
  - **How** they impact the rest of the system
- **Document Key Decisions**: Document architectural decisions and significant changes in appropriate locations

#### Question-Answering Protocol
1. **When Asked a Question**: First analyze the question, provide observations and analysis of the provided information
2. **Outline Approach**: Present your proposed solution or investigation plan clearly
3. **Wait for Agreement**: Only proceed with implementation or further actions after explicit user confirmation
4. **Collaborative Decision Making**: Consider user suggestions and feedback before taking any action

#### Investigation vs Implementation
- **Investigations Allowed**: Database queries, code analysis, file searches, and exploratory queries can be performed proactively to gather information
- **Implementation Requires Agreement**: Code changes, database modifications, or system alterations must wait for explicit user approval
- **No Direct Database CRUD**: Do not perform direct database operations (INSERT, UPDATE, DELETE). Instead, write application code that handles these tasks through proper service/repository patterns

#### Communication Standards
- **Clear Explanations**: Always explain WHAT you plan to do, WHY, and HOW before proceeding
- **User Confirmation Required**: Wait for explicit statements like "yes, proceed" or "that approach looks good" before implementing
- **Joint Problem Solving**: Work together to identify root causes and develop solutions
- **Transparency**: If uncertain about any aspect, ask for clarification rather than making assumptions

#### **USER VERIFICATION** (CRITICAL - DO NOT SKIP)
**🚨 STOP - DO NOT COMMIT OR PUSH UNTIL USER CONFIRMS FIX WORKS 🚨**

After making code changes:
- ✅ Explain **WHAT** you changed (which files, which methods)
- ✅ Explain **WHY** you changed it (what problem does it solve)
- ✅ Explain **HOW** to test the fix (specific steps user should follow)
- ✅ Wait for user to **RUN THE APPLICATION** and verify the fix works
- ✅ Wait for user to **EXPLICITLY CONFIRM** "the fix works" or "ready to commit"
- ❌ **DO NOT** Make code changes without user review
- ❌ **DO NOT** commit changes until user confirms
- ❌ **DO NOT** assume the fix works just because it compiles
- ❌ **DO NOT** rush to commit and push


## Key Files
- `src/app.ts`: Initializes app structure (header, footer, router)
- `src/router.ts`: History API routing with route definitions, titles, and SEO descriptions
- `src/data/content.ts`: All site content and data structures
- `src/components/`: Reusable UI components (Hero, Section, ServiceCard, etc.)
- `src/pages/`: Route-specific page functions

## Conventions
- Component functions prefixed with `create` (e.g., `createSection`)
- Page functions suffixed with `Page` (e.g., `HomePage`)
- Clean URLs for navigation (e.g., `href="/contact"`)
- CSS vars for theming (e.g., `--color-primary: #17b7c6`)
- No dynamic imports or lazy loading; all code bundled by Vite

## Adding Content
1. Update data in `src/data/content.ts` with new interfaces if needed
2. Create/modify components in `src/components/` for new UI patterns
3. Add routes in `src/router.ts` and corresponding page in `src/pages/`
4. Ensure responsive design with existing CSS classes

## Deployment
Static site generated to `dist/` - deploy to any static hosting (e.g., GitHub Pages, Netlify). No server-side rendering or backend required.</content>
<parameter name="filePath">/Users/sthwalo/sbo/.github/copilot-instructions.md