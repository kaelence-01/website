// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio principal en Vercel; www.kaelence.com redirige (308) aquí.
export default defineConfig({
  site: 'https://kaelence.com',
  integrations: [sitemap()],
});
