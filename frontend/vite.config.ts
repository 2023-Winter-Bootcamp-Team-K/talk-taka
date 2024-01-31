import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpg'],
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': {
        // target: 'https://talktaka.site',
        target: 'http://localhost:8000',
      },
    },
  },
});
