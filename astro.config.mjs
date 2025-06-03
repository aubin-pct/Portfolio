import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://aubin-pct.github.io/',
  base: 'Portfolio',
  integrations: [react()],
}) 