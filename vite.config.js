import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mission: resolve(__dirname, 'mission.html'),
        timeline: resolve(__dirname, 'timeline.html'),
      },
    },
  },
})