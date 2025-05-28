import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Forever/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
