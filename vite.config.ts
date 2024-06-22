import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pomodoro-web/",
  plugins: [vue()],
  test: {
    environment: "jsdom",
  },
})
