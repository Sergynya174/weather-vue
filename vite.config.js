import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const base = process.env.NODE_ENV === "production" ? "/vue-weather/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [vue()],
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
