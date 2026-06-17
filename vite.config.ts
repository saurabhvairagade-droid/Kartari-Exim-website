import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from '@prerenderer/rollup-plugin';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
        },
      },
      plugins: [
        prerender({
          routes: [
            '/',
            '/products/soybean-meal',
            '/products/spices',
            '/products/vegetables',
            '/products/fruits',
            '/products/basmati-rice',
            '/products/gourmet-processed-foods',
            '/products/dehydrated-onion-flakes',
            '/blog',
            '/blog/soybean-meal-vs-soya-doc',
            '/blog/soybean-meal-protein-content-guide',
            '/blog/import-soybean-meal-from-india',
            '/blog/soya-doc-adulteration-india',
            '/blog/non-gmo-soybean-meal-india',
            '/blog/top-5-countries-importing-soybean-meal-india',
            '/blog/soybean-meal-prices-rising-india-2026'
          ],
          renderer: '@prerenderer/renderer-puppeteer',
          rendererOptions: {
            renderAfterDocumentEvent: 'custom-render-trigger',
          },
        }),
      ],
    },
  },
});
