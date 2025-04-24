import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.geekeando.net',
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
    functionPerRoute: false,
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
      noExternal: ['@resvg/resvg-js', 'sharp']
    },
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