import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*'],
  server: {
    proxy: {
      '/api': {
        target: 'https://talktaka.site',
        // target: 'http://localhost:8000',
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});