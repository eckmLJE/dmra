import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Update this once the production domain is confirmed. It is used to build
  // absolute URLs for canonical links, sitemaps and social metadata.
  site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
