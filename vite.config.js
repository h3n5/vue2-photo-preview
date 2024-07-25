import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
// import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import pkg from './package.json';
export default defineConfig({
  build: {
    lib: {
      name: 'vue2PhotoPreview',
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `${pkg.name}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          dir: pkg.main.split('/')[0],
          entryFileNames: pkg.main.split('/')[1],
          format: 'umd',
          name: pkg.name,
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
        {
          dir: pkg.main.split('/')[0],
          entryFileNames: pkg.main.split('/')[1],
          format: 'es',
          exports: 'named',
        },
      ],
    },
    sourcemap: true,
  },
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
