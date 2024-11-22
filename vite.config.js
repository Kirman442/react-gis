import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/gis/" : "/",
  build: {
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
