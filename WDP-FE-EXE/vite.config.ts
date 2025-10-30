import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
    headers: {
      // ⚠️ Đây là phần bạn cần thêm
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    },
  },
})
