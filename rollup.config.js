import { terser } from "rollup-plugin-terser";
import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";

export default {
  input: "src/BIMDataComponents/index.js",
  output: [
    {
      file: "dist/design-system.esm.js",
      format: "es",
    },
    {
      name: "design-system",
      file: "dist/design-system.js",
      format: "umd",
    },
  ],
  plugins: [
    vue({ template: { isProduction: true } }),
    css(),
    terser(),
  ],
};
