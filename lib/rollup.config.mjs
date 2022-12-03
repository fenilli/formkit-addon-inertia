import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.js",
    plugins: [peerDepsExternal()],
    output: [
      { file: pkg.main, format: "cjs", sourcemap: true },
      { file: pkg.module, format: "es", sourcemap: true },
    ],
  },
];

