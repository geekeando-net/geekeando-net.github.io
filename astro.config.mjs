import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { passthroughImageService } from 'astro/config';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://www.geekeando.net',
  output: 'server',
  image: isProduction ? undefined : { service: passthroughImageService() },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    runtime: 'nodejs20.x',
    functionPerRoute: false,
    maxDuration: 60,
    edgeMiddleware: false,
    ...(isProduction && {
      imageService: true,
      images: {
        sizes: [640, 768, 1024, 1280, 1536],
        domains: ['www.geekeando.net']
      }
    })
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