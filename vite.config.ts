import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works from any sub-path (e.g. GitHub Pages /rika-cv/).
  base: './',
  plugins: [react(), tailwindcss()],
  server: { port: 2739, strictPort: true },
})
