import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: '/',
  site: 'https://toughnuttocrack.it',
  build: {
    assets: '_assets',
  },
});
