import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [{
    name: 'dicomModel',
    file: 'dist/index.js',
    format: 'umd',
    sourcemap: true,
  }, {
    name: 'dicomModel',
    file: 'dist/index.min.js',
    format: 'umd',
    plugins: [terser()],
  }],
  plugins: [
    sourcemaps(),
    typescript(),
  ],
}
