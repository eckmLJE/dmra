import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

/*
 * Where the site is deployed is read from the environment rather than pinned
 * here, so the same source builds for a domain root and for a subdirectory
 * (which is how GitHub Pages serves a project site). See `.env.example`.
 *
 * `base` feeds `import.meta.env.BASE_URL`, which the `url()` helper in
 * src/consts.ts uses to prefix every internal link.
 */
const site = process.env['SITE_URL'] ?? 'http://localhost:4321';
const base = process.env['BASE_PATH'] ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
