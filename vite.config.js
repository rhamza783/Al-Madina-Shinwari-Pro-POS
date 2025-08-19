import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from '@vite-pwa/plugin';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo-512x512.png'],
      manifest: {
        name: 'Al-Madina Shinwari POS',
        short_name: 'POS',
        description: 'Offline-ready POS for Al-Madina Restaurant',
        theme_color: '#2c3e50',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'logo-512x512.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
});
