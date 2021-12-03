import { terser } from "rollup-plugin-terser";
import vue2 from "rollup-plugin-vue2";
import vue3 from "rollup-plugin-vue3";
import css from "rollup-plugin-css-only";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

module.exports = [
  ...getSingleComponentConfigurations(),
  ...getSingleSmartComponentConfigurations(),
  {
    input: ["src/BIMDataComponents/index.js"],
    output: {
      dir: "dist/js/BIMDataComponents",
      format: "es",
    },
    plugins: [
      replace({
        "~@/assets": "node_modules/@bimdata/design-system/dist",
        delimiters: ["", ""],
      }),
      css({
        output: "dist/css/design-system.css",
      }),
      copy({
        targets: [
          { src: "src/assets/fonts", dest: "dist" },
          { src: "src/assets/scss", dest: "dist" },
          {
            src: "src/assets/css/_BIMDataFonts.css",
            dest: "dist/css",
            rename: "fonts.css",
          },
          {
            src: "src/assets/scss/_BIMDataFonts.scss",
            dest: "dist/scss",
            transform: contents =>
              contents
                .toString()
                .replace(
                  /~@\/assets/g,
                  "node_modules/@bimdata/design-system/dist"
                ),
          },
        ],
      }),
      vue2({
        template: { isProduction: true },
        css: false,
      }),
      image(),
      terser(),
    ],
  },
];

function getSingleSmartComponentConfigurations() {
  const componentNames = ["BIMDataFileManager"];

  // Build Vue 2.x compatible components
  return [
    ...componentNames.map(componentName => ({
      input: [
        `src/BIMDataSmartComponents/${componentName}/${componentName}.vue`,
      ],
      output: {
        file: `dist/js/BIMDataSmartComponents/${componentName}.js`,
        format: "esm",
      },
      plugins: [
        replace({
          "~@/assets": "node_modules/@bimdata/design-system/dist",
          delimiters: ["", ""],
        }),
        vue2({
          template: { isProduction: true },
        }),
        resolve({ browser: true, preferBuiltins: false }),
        commonjs(),
        image(),
        terser(),
      ],
    })),
  ];
}

function getSingleComponentConfigurations() {
  const componentNames = [
    "BIMDataBigSpinner",
    "BIMDataButton",
    "BIMDataCard",
    "BIMDataCheckbox",
    "BIMDataDropdownList",
    "BIMDataDropdownMenu",
    "BIMDataFileIcon",
    "BIMDataIcon",
    "BIMDataIllustration",
    "BIMDataInput",
    "BIMDataLoading",
    "BIMDataNavigation",
    "BIMDataPaginatedList",
    "BIMDataPieSpinner",
    "BIMDataRadio",
    "BIMDataResponsiveGrid",
    "BIMDataSearch",
    "BIMDataSelect",
    "BIMDataSpinner",
    "BIMDataTable",
    "BIMDataTabs",
    "BIMDataText",
    "BIMDataTextarea",
    "BIMDataToggle",
    "BIMDataTooltip",
  ];

  return [
    // Build Vue 2.x compatible components
    ...componentNames.map(componentName => ({
      input: [`src/BIMDataComponents/${componentName}/${componentName}.vue`],
      output: {
        file: `dist/js/BIMDataComponents/${componentName}.js`,
        format: "esm",
      },
      plugins: [
        replace({
          "~@/assets": "node_modules/@bimdata/design-system/dist",
          delimiters: ["", ""],
        }),
        vue2({
          template: { isProduction: true },
        }),
        image(),
        terser(),
      ],
    })),
    // Build Vue 3.x compatible components
    ...componentNames.map(componentName => ({
      input: [`src/BIMDataComponents/${componentName}/${componentName}.vue`],
      output: {
        file: `dist/js/BIMDataComponents/vue3/${componentName}.js`,
        format: "esm",
      },
      plugins: [
        alias({
          entries: [
            {
              find: /BIMDataDirectives\//,
              replacement: "BIMDataDirectives/vue3/",
            },
          ],
        }),
        replace({
          "~@/assets": "node_modules/@bimdata/design-system/dist",
          delimiters: ["", ""],
        }),
        vue3({
          template: { isProduction: true },
          preprocessStyles: true,
        }),
        postcss(),
        image(),
        terser(),
      ],
    })),
  ];
}
