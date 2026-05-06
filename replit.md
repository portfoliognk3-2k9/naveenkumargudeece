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
- Fonts: Inter (Google Fonts)
- API: Express 5 (api-server)
- DB: PostgreSQL + Drizzle ORM (not used by portfolio)

## Where things live

- `artifacts/portfolio/src/App.tsx` — root app (no router, single page)
- `artifacts/portfolio/src/components/` — Navbar, Hero, About, Education, Skills, Projects, CollaborateCTA, Services, Contact, Footer
- `artifacts/portfolio/src/index.css` — light theme matching naveenkumargudeece.netlify.app (cyan #0bbcd4 primary, dark navy secondary, Inter font)
- `artifacts/portfolio/public/profile_photo.png` — Naveen's real profile photo (downloaded from Netlify site)
- `lib/api-spec/openapi.yaml` — API contract (health check only)

## Architecture decisions

- Single-page portfolio with smooth-scroll navigation — no React Router, just native scrollIntoView
- framer-motion for scroll-triggered entrance animations (whileInView / initial / animate)
- CSS marquee animation for the scrolling tech skills band below the hero
- Floating animated badges around profile photo (ESP32, AI, IoT) using framer-motion motion.div
- No AnimatePresence used (caused React hook conflicts) — mobile menu uses plain conditional rendering
- No backend — contact form simulates submission with loading state and success message

## Product

Full personal portfolio for Gude Naveen Kumar matching naveenkumargudeece.netlify.app design:
Hero (photo + floating badges + marquee), About, Education (timeline), Skills (progress bars), Projects (4 cards), "Want to collaborate?" CTA banner, What I Can Do (services), Contact (form + info), Footer.

## User preferences

- Design: white/light background, cyan (#0bbcd4 / hsl 190 90% 45%) accents, dark navy (#0f172a) text
- Font: Inter (not Space Grotesk)
- Matches naveenkumargudeece.netlify.app design exactly
- No emojis

## Gotchas

- `SiMatlaboctave` does not exist in react-icons/si — use BarChart2 from lucide-react for MATLAB
- CSS @import url() for Google Fonts must be the first line in index.css (before @import "tailwindcss")
- Do NOT use AnimatePresence from framer-motion — causes React hook conflicts in this workspace setup
- Profile photo served from `public/profile_photo.png` (not @assets) since it's a downloaded file

## Pointers

- See the `pnpm-workspace` skill for workspace structure
- See the `react-vite` skill for frontend conventions
