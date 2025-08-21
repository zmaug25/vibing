import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api/autofill': {
        target: 'http://localhost:8787',
        changeOrigin: true,
      },
    },
  },
});


