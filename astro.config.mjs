// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: 'server',
  site: 'https://www.geekeando.net',
  integrations: [tailwind(), sitemap(),icon()],
  adapter: vercel(
    {
      webAnalytics: {
          enabled:true,
      },
    }
  ),
  build: {
    serverEntry: '.vercel/output/functions/_render.func/dist/server/entry.mjs',
  },
  markdown: {
    syntaxHighlight: 'shiki', // prism o highlight.js
    remarkPlugins: [], // Agrega aquí plugins adicionales si los necesitas
    rehypePlugins: [], // Si quieres manipular HTML generado
  },
});