import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  site: 'https://www.geekeando.net',
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: { 
        custom: ['src/assets/icons/*'],
      },
    }),
  ],
  adapter: vercel({
    webAnalytics: { enabled: true },
    functionPerRoute: false,
  }),
  vite: {
    ssr: {
      noExternal: [
        '@astrojs/vercel',
        'astro-icon',
        'react',
        'react-dom',
      ],
    },
    plugins: [
      // Solución clave para módulos virtuales
      {
        name: 'fix-virtual-modules',
        resolveId(id) {
          if (id.startsWith('virtual:')) {
            return '\0' + id;
          }
        },
      },
    ],
  },
});