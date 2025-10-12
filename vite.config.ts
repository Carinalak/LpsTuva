import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
      VitePWA({
      registerType: 'autoUpdate', // Uppdaterar automatiskt när ny version finns
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt'], // valfria statiska filer
      manifest: {
        name: "Memoryspel",
        short_name: "Memory",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" }
        ]
      }
    })
  
  
  ],
  base: '/',
})