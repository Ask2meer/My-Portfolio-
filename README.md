# Meer Abdullah Jawed — Portfolio (Next.js)

This is your original portfolio (`index.html` + `style.css` + `main.js`) converted into a
Next.js 14 App Router project. The visual design, layout, copy, and behavior are unchanged —
same theme toggle, live PKT clock, scroll-spy floating dock, and dashboard/experience/tech
sections — just rebuilt with React components instead of plain DOM scripting.

## Project structure

```
app/
  layout.js       Root layout: fonts (next/font), metadata, Font Awesome CDN link
  page.js         Renders the single-page app
  globals.css     Your original style.css (unchanged, just points at next/font variables)
components/
  PortfolioApp.js Main client component: theme toggle, live clock host, scroll-spy, dock nav
  LiveClock.js    Self-contained PKT clock (client component)
  DashboardCard.js, ExperienceCard.js, TechCategoryCard.js   Presentational pieces
data/
  content.js      All dashboard/experience/tech-stack text, so editing content never
                   touches markup — update this file to change copy
public/images/    avatar.jpeg + the 4 dashboard screenshots
```

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Things worth knowing

- **Editing content** (job bullets, dashboard descriptions, tech pills): edit `data/content.js`
  only — the components just map over these arrays.
- **Theme**: still uses `localStorage` exactly like the original `main.js`, so it works the
  same way once deployed (this is a full app, not a Claude.ai artifact, so `localStorage` is fine here).
- **CV download button**: still just shows an alert placeholder like the original. Swap
  `handleCvDownload` in `components/PortfolioApp.js` for a real `<a href="/resume.pdf" download>`
  once you have a PDF to link.
- **LinkedIn link**: currently points at `https://linkedin.com` (placeholder, same as the
  original file) — update the two occurrences in `PortfolioApp.js` with your real profile URL.
- **Deploying**: this is a standard Next.js app, so it deploys as-is to Vercel, Netlify, or any
  Node host.
