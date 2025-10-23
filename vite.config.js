// vite.config.js (bt-core)
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0, // evita inline e 'import.meta.url' desnecessário
    rollupOptions: {
      input: { boot: 'src/boot/index.js' },
      output: {
        format: 'es',                 // <- módulo ES (resolve import.meta)
        entryFileNames: 'bt-boot.v2.js',  // <- nome fixo
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
});
