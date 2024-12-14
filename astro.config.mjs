// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: 'static',
  integrations: [
    tailwind(),
  ],
  adapter: vercel(
    {
      webAnalytics: {
          enabled:true,
      },
      runtime: 'nodejs18.x'
    }
  ),
});