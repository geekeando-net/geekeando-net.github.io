import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import icon from 'astro-icon';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    includeFiles: [
      'dist/**/*',
      'public/**/*',
      'src/**/*'
    ],
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    imageService: true,
    devImageService: 'sharp',
    imagesConfig: {
      sizes: [640, 750, 828, 1080, 1200, 1920],
      formats: ['image/webp'],
      minimumCacheTTL: 60,
    }
  }),
  integrations: [
    icon({
      include: { 
        custom: ['src/assets/icons/*.svg'] // Asegúrate que esta ruta sea correcta
      }
    })
  ],
  vite: {
    ssr: {
      noExternal: ['astro-icon'] // Fuerza a incluir en el bundle
    },
    plugins: [
      // Plugin clave para resolver módulos virtuales
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