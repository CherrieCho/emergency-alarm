import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/safety-api': {
        target: 'https://www.safetydata.go.kr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/safety-api/, ''),
        secure: false,
      },
    },
  },
  build: {
    emptyOutDir: false, // ✅ dist 폴더 비우지 않음 (서버 코드 보호)
    outDir: 'dist',
  },
});
