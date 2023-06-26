/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@api": path.resolve(__dirname, "./src/api"),
    },
  },
  envDir: "./env",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [
      "dotenv/config" /* Load variables from .env file */,
      "./tests/setup.js" /* Set up tet scripts */,
    ],
  },
});
