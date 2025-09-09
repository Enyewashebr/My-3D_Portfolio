import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import React from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
  plugins: [React(), tailwindcss(), visualizer({ open: true })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["three", "gsap", "react"], // example
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
