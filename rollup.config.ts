import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import vue from 'rollup-plugin-vue2';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name,
      exports: 'named',
      sourcemap: true,
      globals: {
        vue: 'Vue',
      },
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    vue(),
    postcss({
      extract: 'index.css',
      plugins: [autoprefixer()],
    }),
    typescript({
      compilerOptions: { lib: ['es5', 'es6', 'dom'], target: 'es5' },
    }),
    commonjs(),
    nodeResolve(),
    external(),
  ],
};
