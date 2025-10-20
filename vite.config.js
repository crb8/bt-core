// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // ✅ seu boot real:
      input: { boot: 'src/boot/index.js' },
      output: {
        entryFileNames: 'bt-boot.v2.js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name][extname]',
        format: 'iife',
        name: 'BTBoot'
      }
    }
  }
});
