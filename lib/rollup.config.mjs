import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json' assert { type: "json" };

export default [
  {
    input: 'src/index.ts',
    plugins: [
      peerDepsExternal(),
      typescript(),
    ],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ]
  }
];
