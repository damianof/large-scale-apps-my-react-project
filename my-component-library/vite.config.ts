import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './src/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: "MyComponentLib",
      fileName: (format) => `my-component-lib.${format}.js`,
    },
    rollupOptions: {
      // React should not be bundled with the cmoponent library
      // tell vite that this is an external dependency
      external: ['react'],
      output: {
        // To expose global variables for use in the UMD builds
        // for external dependencies
        globals: {
          vue: 'React'
        }
      }
    }
  }
})
