import {defineConfig} from 'vite'
import preact from '@preact/preset-vite'
import markdown from 'vite-plugin-md';
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      preact(),
      markdown()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
