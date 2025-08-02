import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://h24-code-challenge.free.nf',
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
