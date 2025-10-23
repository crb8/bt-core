import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: { boot: 'src/boot/index.js' },
      output: {
        format: 'es',
        entryFileNames: 'bt-boot.v2.js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name][extname]',
        inlineDynamicImports: false // ✅ Adicionar esta linha
      }
    }
  }
});