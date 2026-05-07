## FreeDomainHub — Build Plan

A discovery platform where users search a project name and get free domain/subdomain suggestions from popular providers (Vercel, Netlify, Cloudflare Pages, GitHub Pages, InfinityFree, DuckDNS, FreeDNS, AwardSpace).

### Pages & Routes
- `/` (index) — Hero, Search, Results, Popular Providers, Features, Testimonials, FAQ, Email capture, Footer (single landing page; sections scroll on home as requested)
- `/providers` — Full provider directory
- `/about` — Mission + product rules disclaimer
- Each route gets its own `head()` metadata (title, description, og tags)

### Component Architecture (`src/components/`)
- `Header.tsx` — sticky glass nav with logo + links
- `Hero.tsx` — headline, subheadline, integrated `SearchBar`
- `SearchBar.tsx` — input + "Search Free Domains" button (controls global search state via URL search params)
- `ResultsGrid.tsx` — renders 6–10 `ResultCard`s based on slugified query
- `ResultCard.tsx` — provider name, example format (e.g. `myapp.vercel.app`), status badge, description, "Use This" + "Visit Provider" + copy button
- `FilterBar.tsx` — filter by category (Hosting, Static Site, Subdomain, Easy Setup); sort by Easiest Setup / Most Popular
- `PopularProviders.tsx` — logos/cards row
- `Features.tsx` — 3–4 feature tiles
- `Testimonials.tsx` — startup-style quote cards
- `FAQ.tsx` — shadcn Accordion
- `EmailCapture.tsx` — newsletter form (client-side only; toast on submit)
- `Footer.tsx` — description, legal links, social placeholders

### Data Layer
- `src/data/providers.ts` — typed array of 8 providers:
  ```ts
  { id, name, formatTemplate, category, popularity, setupEase, description, signupUrl, badges }
  ```
- `src/lib/generateSuggestions.ts` — pure function: takes raw query → slugifies (lowercase, strip non-alnum, trim) → maps each provider's `formatTemplate` (e.g. `{name}.vercel.app`, `{name}.github.io`) → returns suggestion list. Filtering/sorting applied here.

### Search State
- Use TanStack Router search params with `zodValidator` + `fallback`:
  - `q: string`, `category: enum`, `sort: enum`
- `SearchBar` and `FilterBar` update via `navigate({ search: prev => ... })`
- `ResultsGrid` reads from `useSearch` and renders memoized suggestions
- Empty state (no `q`): friendly prompt + sample chips ("Try `myapp`, `taskly`, `nova`")

### Design System (`src/styles.css`)
- Dark theme as default (`<html class="dark">` in root shell)
- Define oklch tokens:
  - `--background` deep navy/near-black
  - `--primary` purple, `--accent` electric blue
  - `--gradient-primary`: purple→blue linear gradient
  - `--gradient-hero`: radial glow
  - `--shadow-glass`, `--shadow-glow`
  - Glass utility class: `.glass-card` (bg with alpha + backdrop-blur + subtle border)
- Typography: distinctive display font (e.g. Space Grotesk) + Inter body via Google Fonts link in `__root.tsx`
- Animations: fade-in, scale-in, subtle gradient shimmer on hero; hover lift on cards

### Product Rules Honored
- Status badges shown as **"Popular"**, **"Easy Setup"**, **"Free Tier"** — never fake real-time availability
- Small disclaimer near results: "Examples shown are suggested formats. Final availability is confirmed at the provider."
- "Use This" + "Visit Provider" both link to provider's official signup with `target="_blank" rel="noopener"`
- No registration claims anywhere

### Tech Notes
- TanStack Start + Router (existing template), shadcn/ui (Accordion, Button, Input, Badge, Card, Sonner for toasts), framer-motion for hero/card animations
- Mobile-first: single column → 2 col @ md → 3 col @ lg for result/feature grids
- Fully client-side; no backend needed for v1 (modular so providers list could later come from a server function)

### Out of Scope (v1)
- No real availability API calls
- No auth, no Lovable Cloud (pure static dataset)
- Email capture is UI-only (toast confirmation)
