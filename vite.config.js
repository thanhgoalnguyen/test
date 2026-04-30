import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'esbuild', // Nén JS siêu nhanh
    cssMinify: true,   // Nén CSS thành 1 dòng
    rollupOptions: {
      output: {
        // Gom các file lẻ thành tên cố định hoặc có hash
	assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('/');
          const fileName = info[info.length - 1]; // Lấy tên file cuối cùng
          
          // Kiểm tra nếu là các định dạng ảnh
          if (/\.(avif|png|jpe?g|svg|gif|webp)$/.test(fileName)) {
            // Nếu bạn muốn giữ cấu trúc folder thủ công
            // Ví dụ: assets/image/alliance/target.avif
            return `assets/[name][extname]`; 
          }
          
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
});