import { defineConfig } from "vite";

export default {
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: { boot: 'src/boot.ts' }, // seu entry real
      output: {
        entryFileNames: 'bt-boot.v2.js',
        // se gerar CSS via JS, force nome também:
        assetFileNames: (info) => info.name === 'style' ? 'bt-boot.v2.css' : 'assets/[name][extname]'
      }
    }
  }
}

