# Reverse Age AI Growth Engine

A responsive marketing operations frontend for Reverse Age Coach, serving busy professionals aged 35–60 in the UAE, GCC and internationally.

**Phase 1 prototype:** all dashboard metrics, chart trends and pipeline entries are synthetic demonstration data. No real customer information, keyword metrics or scientific citations are included. The existing website is not modified or connected. No publishing, messaging, scheduling or advertising actions are available.

## What you can explore

- Dashboard with illustrative growth cards, chart, content pipeline and onboarding checklist.
- Keywords, SEO Audit, Content Studio, Social Media, Leads, Advertising, Analytics and Settings navigation pages.
- Responsive desktop/mobile navigation, keyboard focus styles, skip link, descriptive chart alternative and semantic tables.
- English and Roman Urdu sample content titles. The other workspace pages explain planned workflows; their tools are not implemented.

## Local setup, step by step

1. Install **Node.js 24 LTS** (includes npm) and Git.
2. Clone the repository and enter its folder:
   ```bash
   git clone https://github.com/arshadazhar/reverse-age-growth-engine.git
   cd reverse-age-growth-engine
   ```
   If working in the prepared cloud environment, use the existing checkout at `/workspace/reverse-age-growth-engine`.
3. Install the exact locked dependencies:
   ```bash
   npm ci
   ```
4. Optionally copy the example settings:
   ```bash
   cp .env.example .env.local
   ```
   The current demo needs no environment variables or credentials. The API and database entries document future backend configuration only. Never commit `.env.local`. Values prefixed `NEXT_PUBLIC_` are visible in browser bundles.
5. Start development:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:3000` in your **local browser**. Stop with Ctrl+C. In a cloud task, use the environment's supported port preview if available; localhost refers to the cloud machine, not your own computer. No public preview has been deployed.

## Checks and production preview

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

Build before running `npm start`. Tests cover demo disclosures, navigation, mobile toggling, chart/table accessibility semantics and workspace definitions. They do not establish WCAG compliance or validate unbuilt integrations.

## Project layout

```text
app/                   Next.js App Router pages and responsive styles
components/shell.tsx   Shared navigation and workspace shell
lib/workspaces.ts      Typed page definitions and synthetic content
tests/                Vitest + Testing Library checks
docs/                 Architecture, roadmap and validation evidence
```

Frontend: Next.js App Router, React, TypeScript, Tailwind CSS v4, Lucide icons. No external fonts or image services are needed. Styling uses Tailwind utilities and shared component classes in `app/globals.css`.

## Backend direction

FastAPI and PostgreSQL are **designed, not implemented** in this phase. See [architecture](docs/ARCHITECTURE.md), [phased roadmap](docs/ROADMAP.md) and [validation results](docs/VALIDATION.md). There is no API server, database migration, authentication or persistence yet. No Docker or backend installation is required for this frontend.

## Safety boundaries

All live provider calls will belong on the backend. Require explicit approval before publishing, sending email or launching ads. Verify health claims against original scientific sources and obtain editorial review. Record purpose-specific consent before marketing communications. Never put provider tokens in public frontend configuration. No credentials belong in this repository.
