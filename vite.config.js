import {defineConfig} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: true
    })
  ],
  server: {
    https: false,
    host: '0.0.0.0',
    port:5174,
    open: true
  },
})
