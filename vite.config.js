import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'esbuild', // Nén JS siêu nhanh
    cssMinify: true,   // Nén CSS thành 1 dòng
    rollupOptions: {
      output: {
        // Gom các file lẻ thành tên cố định hoặc có hash
		assetFileNames: (assetInfo) => {
          let name = assetInfo.name;
          // Giữ nguyên cấu trúc thư mục cho ảnh
          if (/\.(avif|png|jpe?g|svg|gif)$/.test(name)) {
            return `assets/[name][extname]`; 
          }
          // Các file khác (css, font...) thì để mặc định
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
});