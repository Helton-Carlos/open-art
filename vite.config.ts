import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), VitePWA(), tailwindcss()],
  resolve: {
    alias: [
      { find: "@/", replacement: "/src" },
      { find: "@/assets", replacement: "/src/assets" },
      { find: "@/server", replacement: "/src/server" },
      { find: "@/assets", replacement: "/src/assets" },
      { find: "@/store", replacement: "/src/store" },
      { find: "@/utils", replacement: "/src/utils" },
      { find: "@/components", replacement: "/src/components" },
      { find: "@/boot", replacement: "/src/boot" },
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
