import { defineConfig } from 'vite'
import { resolve } from 'path'

// Performance-tuned build:
//  - target: es2020 (drop legacy syntax → smaller output)
//  - esbuild minify with aggressive options (drops console.*, debugger)
//  - cssMinify with esbuild (fast + small)
//  - cssCodeSplit: lets the browser cache shared CSS once
//  - assetsInlineLimit: 0 (small assets stay separate so they're cacheable)
//  - Use relative base so the build works on Cloudflare Pages AND GitHub Pages
export default defineConfig({
  base: './',
  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssCodeSplit: true,
    cssMinify: 'esbuild',
    assetsInlineLimit: 0,
    reportCompressedSize: false,
    esbuild: {
      // Aggressive lossless minification
      drop: ['debugger'],
      legalComments: 'none',
      target: 'es2020'
    },
    rollupOptions: {
      output: {
        // Reuse the shared data chunk across pages for better caching
        manualChunks: undefined  // let Rollup auto-split
      },
      input: {
        main: resolve(__dirname, 'index.html'),
        math: resolve(__dirname, 'math.html'),
        biology: resolve(__dirname, 'biology.html'),
        chemistry: resolve(__dirname, 'chemistry.html'),
        physics: resolve(__dirname, 'physics.html'),
        test: resolve(__dirname, 'test.html')
      }
    }
  },
  esbuild: {
    legalComments: 'none',
    target: 'es2020'
  }
})
