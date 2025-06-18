// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  outDir: './build',
  integrations: [
    react(),
    tailwind({
        applyBaseStyles: true, // Apply base styles globally
    })
  ],
  output: 'static', // For static site generation
  site: 'https://about.cameronpickle.com',
  
  // Optimize for production
  build: {
    inlineStylesheets: 'auto',
  },
  
  // SEO and performance optimizations
  compressHTML: true,
  
  // Enable experimental features if needed
  experimental: {
  }
});