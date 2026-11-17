# Debella Integrated Links Limited — Website

Static Next.js 16 + Tailwind 4 site (civil engineering, construction, consultancy, supply & general contracts). Deploys to GitHub Pages via `.github/workflows/pages.yml`.

- `npm install && npm run dev` — local dev
- `npm run build` — static export to `out/`
- Contact form opens a pre-filled email (mailto, with a Gmail fallback link); no backend needed.
- Company data lives in `src/lib/site.ts`. Logo and favicons were extracted from the company letterhead into `public/`.
