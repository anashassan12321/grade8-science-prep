import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/grade8-science-prep/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        math: resolve(__dirname, 'math.html'),
        english: resolve(__dirname, 'english.html'),
        biology: resolve(__dirname, 'biology.html'),
        chemistry: resolve(__dirname, 'chemistry.html'),
        physics: resolve(__dirname, 'physics.html'),
        urdu: resolve(__dirname, 'urdu.html')
      }
    }
  }
})
