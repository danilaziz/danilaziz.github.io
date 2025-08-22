import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ kalau repo = danilaziz.github.io → pakai base: '/'
// kalau repo lain misalnya portfolio → pakai base: '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: "/",
});
