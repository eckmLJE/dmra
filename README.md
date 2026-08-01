# Eastham Tennis & Pickleball

Static site for the Duck Meadow Recreation Association, which runs the outdoor
tennis courts on Widgeon Drive and the pickleball courts on Ireland Way in
Eastham, Massachusetts. Built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com).

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
  assets/photos/  Source photographs, optimized at build time
  components/     Header, Footer, OfficerList, PhotoGrid, FacilityDetail
  layouts/        Page shells
    BaseLayout    HTML document, <head> metadata, header and footer
    ProseLayout   BaseLayout plus typographic styling for Markdown pages
  pages/          One file per route (.astro or .md)
  styles/         global.css: Tailwind entry point and theme tokens
  consts.ts       Site and association details — see below
  photos.ts       The photo list, with alt text
```

## Editing content

Most things people actually need to change live in **`src/consts.ts`**, not in
the pages:

| What                                    | Constant                         |
| --------------------------------------- | -------------------------------- |
| Site name, description                  | `SITE_TITLE`, `SITE_DESCRIPTION` |
| Navigation menu                         | `NAV_LINKS`                      |
| Court locations, addresses and features | `FACILITIES`                     |
| Officer names, emails and phone numbers | `OFFICERS`                       |
| Dues and guest fee                      | `ANNUAL_DUES`, `GUEST_FEE`       |

Changing a price or a phone number there updates every page that shows it.

## Adding a page

Every file in `src/pages/` becomes a route. Markdown works out of the box, so a
page of plain prose needs no code at all:

```md
---
layout: ../layouts/ProseLayout.astro
title: Court Rules
description: How we share the courts.
---

Write the page content here in Markdown.
```

Saving that as `src/pages/rules.md` publishes it at `/rules/`. To show the page
in the site navigation, add it to `NAV_LINKS` in `src/consts.ts`.

## Adding photos

Drop the image into `src/assets/photos/`, then add an entry to `PHOTOS` in
`src/photos.ts` with a short description for screen readers and whether it shows
tennis or pickleball. It will appear on `/photos/` and on the matching court
page. Astro handles resizing and WebP conversion at build time — commit the
full-size original.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`. The build type-checks first, so a type error
fails the deploy rather than shipping.

**One-time setup:** in the repository, go to Settings → Pages and set _Source_
to **GitHub Actions**. Until that is done the build step succeeds but the
deploy step fails.

### Where the site is served from

Nothing in the source hard-codes the domain or directory. Two environment
variables drive it, and CI fills them in from the repository's Pages
configuration:

| Variable    | Meaning                                    | Unset          |
| ----------- | ------------------------------------------ | -------------- |
| `SITE_URL`  | Origin, used for canonical and social URLs | localhost:4321 |
| `BASE_PATH` | Subdirectory the site is served from       | domain root    |

A GitHub Pages project site is served from a subdirectory, so internal links
must be prefixed. Use the `url()` helper from `src/consts.ts` for every internal
link rather than writing `href="/photos/"` directly:

```astro
<a href={url('/photos/')}>Photos</a>
```

When the association points a real domain at the site, set `SITE_URL` to it,
leave `BASE_PATH` unset, and every link collapses back to the domain root with
no other change. See `.env.example`.

## Conventions

- TypeScript runs on Astro's `strictest` preset with several additional
  compiler checks enabled — see `tsconfig.json`.
- `npm run build` type-checks before building, so type errors fail the build.
- Prettier (with the Astro and Tailwind plugins) owns formatting; the Tailwind
  plugin sorts utility classes automatically.
