import { join } from 'path'
import preactRefresh from '@prefresh/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '/@/': join(__dirname, 'src'),
  },
  build: {
    assetsDir: '',
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },

  plugins: [preactRefresh()],
})
