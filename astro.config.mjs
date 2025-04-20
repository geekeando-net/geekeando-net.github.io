import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    imageService: true,
    imagesConfig: {
      domains: [],
      sizes: [640, 750, 828, 1080, 1200, 1920],
      formats: ['image/webp'],
      minimumCacheTTL: 60
    },
    runtime: 'nodejs20.x',
    functionPerRoute: true,
    maxDuration: 60,
    edgeMiddleware: false
  }),
  integrations: [
    icon({
      iconDir: 'src/icons',
      include: {
        mdi: ['*']
      }
    }),
    tailwind(),
    sitemap()
  ],
  vite: {
    ssr: {
      external: ['@resvg/resvg-js']
    },
    plugins: [
      {
        name: 'fix-virtual-modules',
        resolveId(id) {
          if (id.startsWith('virtual:')) {
            return id.replace('virtual:', '\0virtual:');
          }
        }
      }
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': [
              'astro-icon',
              'nodemailer',
              'particles.js',
              'photoswipe',
              'preline',
              'swiper'
            ]
          }
        }
      }
    }
  }
});