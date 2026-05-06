# Gude Naveen Kumar — Portfolio

A personal portfolio website for Gude Naveen Kumar, an ECE student specializing in embedded systems, IoT, and AI.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio (port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, framer-motion, lucide-react, react-icons
- Fonts: Space Grotesk + JetBrains Mono (Google Fonts)
- API: Express 5 (api-server)
- DB: PostgreSQL + Drizzle ORM (not used by portfolio)

## Where things live

- `artifacts/portfolio/src/App.tsx` — root app (no router, single page)
- `artifacts/portfolio/src/components/` — all portfolio sections (Navbar, Hero, About, Education, Skills, Projects, Services, Contact, Footer)
- `artifacts/portfolio/src/index.css` — dark theme (neon green #00ff88 accent, Space Grotesk font)
- `lib/api-spec/openapi.yaml` — API contract (health check only)

## Architecture decisions

- Single-page portfolio with smooth-scroll navigation — no React Router, just native scrollIntoView
- Particle canvas animation in Hero renders via raw Canvas API for performance
- Scroll-triggered fade-in animations use IntersectionObserver (CSS classes: fade-in-up, fade-in)
- Dark theme baked into :root (no light/dark toggle needed for a portfolio)
- No backend — contact form simulates submission with a loading state and success message

## Product

Full personal portfolio for Gude Naveen Kumar with sections: Hero, About, Education (timeline), Skills (progress bars with icons), Projects (4 cards), What I Can Do (services), Contact (form + social links), Footer.

## User preferences

- Dark modern UI — black/dark gray background, neon green (#00ff88) accents
- Space Grotesk for headings, JetBrains Mono for labels/code
- No emojis

## Gotchas

- `SiMatlaboctave` does not exist in react-icons/si — use BarChart2 from lucide-react for MATLAB
- CSS @import url() for Google Fonts must be the first line in index.css (before @import "tailwindcss")

## Pointers

- See the `pnpm-workspace` skill for workspace structure
- See the `react-vite` skill for frontend conventions
