import { defineConfig } from 'astro/config';
import tailwind  from '@astrojs/tailwind';
import sitemap   from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: 'static',
  base: '/',
  site: 'https://toughnuttocrack.it',
  build: {
    assets: '_assets',
  },
});
