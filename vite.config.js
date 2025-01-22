import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
console.log("Vite Config Loaded");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
