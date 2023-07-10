import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  productionSourceMap: false,
  drop_console: true,
  drop_debugger: true,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: false,
    https: false,
    hot: true,
    port:4353,
    proxy: {
      '/api': {
        target: 'http://192.168.1.10:3198/',
        //'target':'http://tyworld-win.com',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/cu': {
        target: 'http://192.168.1.10:9998/',
        //'target':'http://tyworld-win.com',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cu/, '')
      }
    }
  },
  build: {  
    minify: 'terser',
    terserOptions: {
        compress: {
            drop_console: true,
            drop_debugger: true,
        },
    },
   chunkSizeWarningLimit: 1600,
},
})
