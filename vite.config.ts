import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  build: {
    outDir: "docs",
  },
  plugins: [vue()],
  test: {
    environment: "jsdom",
  },
})
