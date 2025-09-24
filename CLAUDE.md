# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro, React, and TypeScript. It's a static site configured for deployment to GitHub Pages, featuring:

- **Static Site Generation**: Configured with `output: 'static'` in astro.config.mjs
- **Hybrid Architecture**: Mix of Astro components (.astro) and React components (.tsx) with strategic client-side hydration
- **Site URL**: https://about.cameronpickle.com

## Development Commands

**Package Manager**: This project uses `bun` as the package manager (confirmed by bun.lock file and GitHub workflow)

| Command | Purpose |
|---------|---------|
| `bun install` | Install dependencies |
| `bun dev` or `bun start` | Start development server at localhost:4321 |
| `bun run build` | Build for production (includes astro check and env setup) |
| `bun run preview` | Preview production build locally |
| `bun run check` | Run Astro check for errors |
| `bun run type-check` | Run TypeScript type checking without emit |

## Architecture

### Component Strategy
- **Astro Components** (.astro): Used for static content (Layout, About, Contact)
- **React Components** (.tsx): Used for interactive content with animations (Hero, WorkHistory, Projects)
- **Client Hydration**: Strategic use of `client:load` and `client:visible` directives

### File Structure
```
src/
├── components/          # Mix of .astro and .tsx components
├── layouts/             # Base layout components
├── pages/               # Route-based pages (index.astro is main page)
├── styles/              # Global CSS and Tailwind config
├── types/               # TypeScript type definitions
└── env.d.ts            # Environment type declarations
```

### Path Aliases
TypeScript path mapping configured for clean imports:
- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/layouts/*` → `./src/layouts/*`
- `@/pages/*` → `./src/pages/*`
- `@/types/*` → `./src/types/*`

### Key Integrations
- **React**: For interactive components with Framer Motion animations
- **Tailwind CSS**: With `applyBaseStyles: true` for global styling
- **TypeScript**: Strict mode enabled with comprehensive type checking

### Environment Configuration
- **Development**: `.env.development`
- **Production**: `.env.production` (copied to `.env` during build)
- Environment variables accessible via `import.meta.env.PUBLIC_*` pattern

### Single Page Application
The entire portfolio is served from `src/pages/index.astro` with smooth scrolling navigation between sections implemented via vanilla JavaScript.

## Deployment

Automated deployment to GitHub Pages via `.github/workflows/deploy.yaml`:
- Triggers on push to `main` branch
- Uses Bun for dependency management and building
- Deploys `./dist` folder to GitHub Pages
- Environment: `github-pages` with proper permissions setup