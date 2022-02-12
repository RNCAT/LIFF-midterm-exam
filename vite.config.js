import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pluginVueEnv from 'vite-plugin-vue-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pluginVueEnv()],
})
