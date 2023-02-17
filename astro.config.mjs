import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://andreavouk.com',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    }
  },
  integrations: [
    sitemap(),
    mdx(),
  ]
});
