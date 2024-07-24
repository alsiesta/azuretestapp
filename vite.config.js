import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows the server to be accessible externally
    port: process.env.PORT || 5173 // Ensure this matches the port used
  }
})
