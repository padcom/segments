import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'segments',
      fileName: format => `segments.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue'
      ],
      output: {
        globals: {
          vue: 'vue'
        }
      }
    }
  }
})
