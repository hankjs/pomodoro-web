import { defineConfig } from 'vitest/config'

export default defineConfig({
  base: "",
  build: {
    outDir: "docs",
  },
  test: {
    environment: "jsdom",
  },
})
