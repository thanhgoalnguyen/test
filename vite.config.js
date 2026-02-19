import { defineConfig } from 'vite';

export default defineConfig({
	base: './',
	build: {
		minify: 'esbuild',
		cssMinify: true,
		rollupOptions: {
		output: {
			assetFileNames: 'assets/[name].[ext]', 
			chunkFileNames: 'assets/[name].js',
			entryFileNames: 'assets/[name].js',
		},
		},
	},
});