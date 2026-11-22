# Tara's Little Universe ✦

A dreamy, animated, frontend-only website: *a world of science, smiles and friendship.*

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build
```

## Deploy on Vercel
1. Push this folder to a GitHub repo (or run `npx vercel` in this folder).
2. Import it in Vercel. Settings are detected automatically (also set in `vercel.json`):
   - **Framework:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Environment variables:** none

## Stack
React 18, Vite, Framer Motion, Lucide React, custom CSS, original inline SVG illustrations,
a small canvas starfield and particle engine (no extra animation libraries), and self-hosted fonts via `@fontsource`
(Fraunces, Caveat, Manrope), so no external font requests.

## Structure
```
src/
  App.jsx  main.jsx  styles.css  ui.jsx (toast + hidden stars)  fx.js (confetti/sparkles)  Starfield.jsx
  art/index.jsx          all SVG illustrations (girl, cat, astronaut, panda, DNA, flasks, planet...)
  data/content.js        ALL copy: edit messages, facts and jar notes here
  sections/              Hero, Reminders, Science, Facts, Friendship, Jar, Final, Footer
```

## Things to try
5 hidden ✦ stars (counter in the nav), flip the science cards, open the envelopes, pull notes from the jar, 
tap the "You're Special" bubble, and the final experiment buttons.

Animations respect `prefers-reduced-motion`.
