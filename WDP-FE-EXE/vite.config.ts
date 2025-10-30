import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': 'https://exe2-evservice.onrender.com/',
    },
    headers: {
      // ⚠️ Đây là phần bạn cần thêm
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    },
  },
})
