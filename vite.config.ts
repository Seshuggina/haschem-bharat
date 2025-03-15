import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/haschem-bharat",
  plugins: [react(), tailwindcss(),],
  css: {
    postcss: "./postcss.config.js",
  },
});
