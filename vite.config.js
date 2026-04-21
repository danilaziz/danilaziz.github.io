import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "app",
  publicDir: "public",
  plugins: [react()],
  base: "/",
  build: {
    outDir: "..",
    emptyOutDir: false,
    assetsDir: "assets",
  },
  server: {
    host: "127.0.0.1",
  },
  preview: {
    host: "127.0.0.1",
  },
});
