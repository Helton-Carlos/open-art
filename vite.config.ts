import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: "@/", replacement: "/src" },
      { find: "@/assets", replacement: "/src/assets" }, 
      { find: "@/server", replacement: "/src/server" },
      { find: "@/assets", replacement: "/src/assets" },
      { find: "@/store", replacement: "/src/store" },
      { find: "@/components", replacement: "/src/components" },
    ],
  },
})
