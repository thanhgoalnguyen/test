import { defineConfig } from 'vite';

export default defineConfig({
	// base: '/hikari/',git 
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