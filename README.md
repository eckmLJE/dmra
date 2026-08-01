# DMRA

Static site for our local tennis and pickleball association, built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Requirements

Node.js 22.12 or newer.

## Getting started

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:4321.

## Scripts

| Command                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start the dev server with hot reloading           |
| `npm run build`        | Type-check, then build the static site to `dist/` |
| `npm run preview`      | Serve the production build locally                |
| `npm run check`        | Type-check only                                   |
| `npm run format`       | Format all files with Prettier                    |
| `npm run format:check` | Verify formatting without writing                 |

## Project structure

```
public/           Static assets copied verbatim into the build
src/
  components/     Reusable pieces of markup (Header, Footer)
  layouts/        Page shells
    BaseLayout    HTML document, <head> metadata, header and footer
    ProseLayout   BaseLayout plus typographic styling for Markdown pages
  pages/          One file per route (.astro or .md)
  styles/         global.css: Tailwind entry point and theme tokens
  consts.ts       Site title, description and navigation links
```

## Adding a page

Every file in `src/pages/` becomes a route. Markdown works out of the box, so a
page with no custom layout needs no code:

```md
---
layout: ../layouts/ProseLayout.astro
title: Court Locations
description: Where to find us.
---

Write the page content here in Markdown.
```

Saving that as `src/pages/courts.md` publishes it at `/courts/`. See
`src/pages/about.md` for a working example. To show the page in the site
navigation, add it to `NAV_LINKS` in `src/consts.ts`.

## Conventions

- TypeScript runs on Astro's `strictest` preset with several additional
  compiler checks enabled — see `tsconfig.json`.
- `npm run build` type-checks before building, so type errors fail the build.
- Prettier (with the Astro and Tailwind plugins) owns formatting; the Tailwind
  plugin sorts utility classes automatically.
