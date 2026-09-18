# Muhammad Furqan — Portfolio (v2)

Modern rebuild of the original portfolio: React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
npm run preview
```

## Structure
- `src/data/` — all real content (profile, projects, experience, education, certifications, awards, skills) as typed data
- `src/sections/` — one component per page section
- `src/components/` — shared UI (nav, footer, project modal, reveal-on-scroll wrapper, back-to-top, brand icons)
- `public/furqan-cv.pdf` — resume, linked from Hero and Contact
- `public/_redirects` — Netlify SPA fallback for the 404 route

## Known follow-ups (see chat for full list)
See the completion summary provided in chat for what's done and what's left (screenshots, JS-only project detail fields, bundle splitting, real contact backend, etc).
