import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Used to build absolute URLs for canonical links and social metadata.
  site: 'https://easthampickleball.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
