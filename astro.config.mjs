// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: 'server',
  integrations: [
    tailwind(),
  ],
  adapter: vercel(
    {
      webAnalytics: {
          enabled:true,
      },
    }
  ),
});