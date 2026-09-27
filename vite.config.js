import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Base must match the GitHub Pages URL: https://thuluxx.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
