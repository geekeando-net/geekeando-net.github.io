// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
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
      edgeMiddleware: false,
      includeFiles: [
        './src/lib/email/templates.ts',
        './src/lib/email/transporter.ts'
      ],
      excludeFiles: ['**/*.test.ts'] // Excluye tests
    }
  ),
  markdown: {
    syntaxHighlight: 'shiki', // prism o highlight.js
    remarkPlugins: [], // Agrega aquí plugins adicionales si los necesitas
    rehypePlugins: [], // Si quieres manipular HTML generado
  },
  vite: {
    ssr: {
      // Fuerza la resolución correcta de dependencias
      noExternal: ['@astrojs/vercel']
    },
    resolve: {
      alias: {
        '@': '/src'  // Aliases para imports más limpios
      }
    }
  }
});