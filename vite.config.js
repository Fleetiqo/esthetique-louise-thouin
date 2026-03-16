import { defineConfig } from 'vite'

export default defineConfig({
  base: '/esthetique-louise-thouin/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
