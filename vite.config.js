import { defineConfig } from 'vite'
import { resolve } from 'path'

// Use relative base so the build works on BOTH Cloudflare Pages (project root)
// AND GitHub Pages (project sub-path). Asset paths are emitted as
// "./assets/..." which the browser resolves relative to the HTML file's URL.
export default defineConfig({
  base: './',
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
