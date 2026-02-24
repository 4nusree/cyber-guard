import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client",
  server: {
    allowedHosts: true,
    host: "0.0.0.0",
    port: 5000,
    hmr: {
      clientPort: 443,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});