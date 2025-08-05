import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,   // Allows LAN access (e.g., from mobile)
    port: 3000    // Optional; Vite defaults to this
  }
})
