# Aidan Lowson's Blog

A personal blog built with the Astro framework. This repository contains the site source, content, and build configuration used to run and publish the blog at https://blog.aidanlowson.com.

## Quick Start

Prerequisites:

- Node.js (v18+ recommended)
- npm (or use pnpm/yarn if preferred)

Clone the repository and run the dev server:

```bash
git clone https://github.com/AidanLDev/doubleateam.git
cd doubleateam
npm install
npm run dev
```

Available scripts (from `package.json`):

- `npm run dev` — Start local dev server (default `localhost:3000`).
- `npm run build` — Build production site (clears `.astro`/`.dist` then runs `astro build`).
- `npm run preview` — Preview a local production build.
- `npm run clear:cache` — Remove build cache (`.astro` and `.dist`).

## Project Structure

- `src/` — Site source: components, pages, layouts, assets.
- `content/` — Markdown content for blog posts and pages.
- `public/` — Static assets served at root of the site (images, favicons).
- `astro.config.mjs` — Astro configuration and integrations.
- `package.json` — Scripts and dependencies.

## Development Notes

- This project uses Astro with integrations for Tailwind, MDX, sitemap generation, and image processing.
- Path aliases are configured in Vite (see `astro.config.mjs`) and map `@` prefixes to `src/` folders.

## Deployment

This is a static site and works well with hosts like Vercel, Netlify, or Cloudflare Pages. Typical deploy steps:

```bash
npm run build
# then deploy the generated output from the default `dist/` location depending on your host
```

If deploying to Vercel, connect the repository and set the build command to `npm run build`.

## Contributing

Contributions are welcome — see `CONTRIBUTING.md` for guidelines on setting up a local dev environment, branch and PR workflow, and the PR checklist.

## Reporting Issues / Feature Requests

Please use the issue templates when opening a bug report or feature request. They live in `.github/ISSUE_TEMPLATE/` and help us triage quickly.

## Code of Conduct

This project follows a code of conduct. Please read `CODE_OF_CONDUCT.md` for expectations and reporting details.

## Contact

For contributor questions or to report behaviour, contact: `dev@aidanlowson.com`.

---

If you'd like any additional sections (badges, CI status, license, or maintainers list), tell me and I will add them.
