import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: false,
    emptyOutDir: false,
    rollupOptions: {
      input: {
        "bt-boot.v2": "src/boot/index.js",
        "bt-blocks.faq.v2": "src/blocks/faq.js",
        "bt-blocks.carousel.v2": "src/blocks/carousel.js"
      },
      output: {
        entryFileNames: "[name].[hash].js",
        assetFileNames: "assets/[name].[hash][extname]"
      }
    },
    outDir: "dist"
  }
});
