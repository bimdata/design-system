import { terser } from "rollup-plugin-terser";
import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import copy from "rollup-plugin-copy";

module.exports = [
  ...getSingleComponentConfigurations(),
  {
    input: [
      "src/BIMDataComponents/index.js"
    ],
    output: {
      dir: 'dist/js/BIMDataComponents',
      format: 'es'
    },
    plugins: [
      del({ targets: 'dist/*' }),
      copy({
        targets: [
          { src: "src/assets/fonts", dest: "dist" },
          { src: "src/assets/scss", dest: "dist" },
        ],
      }),
      vue({
        template: { isProduction: true },
        css: false,
      }),
      css({
        output: "dist/css/design-system.css",
      }),
      terser(),
    ]
  },
];

function getSingleComponentConfigurations() {

  const componentNames = [
    "BIMDataButton",
    "BIMDataCard",
  ];

  return componentNames.map(componentName => ({
      input: [
        `src/BIMDataComponents/${componentName}/${componentName}.js`
      ],
      output: {
        file: `dist/js/BIMDataComponents/${componentName}.js`,
        format: 'es'
      },
      plugins: [
        vue({
          template: { isProduction: true },
        }),
        terser(),
      ]
  }));
}
