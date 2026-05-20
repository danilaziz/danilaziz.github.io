import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "app",
  publicDir: "public",
  plugins: [react()],
  base: "/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsDir: "assets",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  server: {
    host: "127.0.0.1",
  },
  preview: {
    host: "127.0.0.1",
  },
});
