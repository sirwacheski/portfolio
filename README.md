# Elias Wacheski – Portfolio

A modern single-page portfolio built with React, TypeScript, Vite, and Tailwind CSS 4. It showcases About, Projects, Expertise, and Contact sections with a clean, responsive UI, smooth scrolling, SVG assets, and quick external links to LinkedIn and résumé.

## Features
- Responsive header with mobile menu and smooth in-page navigation.
- Hero section with call to scroll; About section with résumé download.
- Projects grid with external links and technology chips.
- Expertise section with marquee-style skill cards.
- Contact call-to-action that opens LinkedIn.
- Fast development workflow powered by Vite + Tailwind.

## Tech Stack
- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4 (+ @tailwindcss/vite)
- Icons: lucide-react, react-icons
- Animation/UX: react-fast-marquee, react-multi-carousel (styles imported in main)
- SVGs via vite-plugin-svgr
- Linting: ESLint + typescript-eslint

## Requirements
- Node.js 18+ (LTS recommended)
- Yarn (this repo includes yarn.lock)

## Getting Started
- Install dependencies: `yarn`
- Run dev server: `yarn dev`
- Build for production: `yarn build`
- Preview production build: `yarn preview`
- Lint: `yarn lint`

## Project Structure (key files)
- `app/Application.tsx` – Main UI and page sections (hero, about, projects, expertise, contact)
- `app/assets/*.svg` – Technology and brand icons (SVG)
- `global.css` – Tailwind CSS entry and globals
- `vite.config.ts` – Plugins and alias (`@` → `./app`)
- `index.html`, `main.tsx` – App bootstrap

## Customization
- Content: edit the `skills` and `projects` arrays in `app/Application.tsx`.
- Résumé: update the download link in the About section.
- Social: change the LinkedIn URL in the Contact section.
- Branding: replace SVGs in `app/assets` and adjust styles in `global.css`.

## Deployment
- Output is static; deploy the `dist` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).
- Typical settings: build command `yarn build`, output directory `dist`.
