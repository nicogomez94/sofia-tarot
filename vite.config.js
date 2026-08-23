import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        format: "iife",
        entryFileNames: "assets/site.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: (assetInfo) => assetInfo.name?.endsWith(".css") ? "assets/site.css" : "assets/[name][extname]",
      },
    },
  },
});
