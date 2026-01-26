import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'esbuild', // Nén JS siêu nhanh
    cssMinify: true,   // Nén CSS thành 1 dòng
    rollupOptions: {
      output: {
        // Gom các file lẻ thành tên cố định hoặc có hash
        assetFileNames: 'assets/[name].[ext]', 
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
});