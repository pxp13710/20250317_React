import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  // 빌드 후 서버로 확인시 세팅
  preview: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  // 단축키 등록 - 절대패스(참조를 src로 부터 참조)
  resolve: {
    alias: {
      '@components': '/src/components',
      '@css': '/src/css',
      '@pages': '/src/pages',
      '@router': '/src/router',
      '@assets': '/src/assets',
      '@stores': '/src/stores',
    },
    extensions: ['js', '.jsx', 'ts', 'tsx']
  },
  define: {
    __VERSION__: JSON.stringify('1.0.0'),
  }
})
