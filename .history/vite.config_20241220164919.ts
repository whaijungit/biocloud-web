import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
        '/api': {
            changeOrigin: true,
            target: 'http://172.17.3.91:4000/'
        }
    }
  }
})
