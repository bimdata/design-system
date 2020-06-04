import { terser } from "rollup-plugin-terser";
import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import copy from "rollup-plugin-copy";

export default {
  input: "src/BIMDataComponents/index.js",
  output: [
    {
      file: "dist/js/design-system.esm.js",
      format: "es",
    },
    {
      name: "design-system",
      file: "dist/js/design-system.js",
      format: "umd",
    },
  ],
  plugins: [
    copy({
      targets: [
        { src: "public/*", dest: "dist" },
        { src: "src/assets/fonts", dest: "dist" },
        { src: "src/design-system/assets/img", dest: "dist" },
      ],
    }),
    vue({ template: { isProduction: true } }),
    css({
      output: "dist/css/design-system.css",
    }),
    terser(),
  ],
};
