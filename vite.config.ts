import preactRefresh from '@prefresh/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: ''
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
    
  },
  
  plugins: [preactRefresh()]
})
