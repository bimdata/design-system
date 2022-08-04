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
  ...getDirectivesConfiguration(),
  ...getSingleComponentConfigurations(),
  ...getSingleSmartComponentConfigurations(),
  ...getAllComponentsBundleConfiguration(),
];

function getDirectivesConfiguration() {
  return [
    {
      // vue2
      input: ["src/BIMDataDirectives/index.js"],
      plugins: [terser()],
      output: {
        dir: "dist/js/BIMDataDirectives",
        format: "es",
      },
    },
    {
      // vue3
      input: ["src/BIMDataDirectives/vue3/index.js"],
      plugins: [terser()],
      output: {
        dir: "dist/js/BIMDataDirectives/vue3",
        format: "es",
      },
    },
  ];
}

// build ALL COMPONENTS
function getAllComponentsBundleConfiguration() {
  return [
    {
      // Vue 2
      input: ["src/BIMDataComponents/index.js"],
      output: {
        dir: "dist/js/BIMDataComponents",
        format: "es",
      },
      plugins: [
        replace({
          "~@/assets": "node_modules/@bimdata/design-system/dist",
          delimiters: ["", ""],
          preventAssignment: true,
        }),
        css({
          output: "dist/css/design-system.css",
        }),
        copy({
          targets: [
            {
              src: "src/assets/fonts",
              dest: "dist",
            },
            {
              src: "src/assets/scss",
              dest: "dist",
            },
            {
              src: "src/BIMDataComponents/BIMDataColorSelector/colors.js",
              dest: "dist",
            },
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
        resolve({
          browser: true,
          preferBuiltins: false,
          resolveOnly: ["@sum.cumo/vue-datepicker"],
        }),
        image(),
        terser(),
      ],
    },
    {
      // Vue 3
      input: ["src/BIMDataComponents/index.js"],
      output: {
        dir: "dist/js/BIMDataComponents/vue3",
        format: "es",
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
          preventAssignment: true,
        }),
        vue3({
          template: { isProduction: true },
          preprocessStyles: true,
        }),
        resolve({
          browser: true,
          preferBuiltins: false,
          resolveOnly: ["@sum.cumo/vue-datepicker"],
        }),
        postcss(),
        image(),
        terser(),
      ],
    },
  ];
}

// build SMART COMPONENTS
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
          preventAssignment: true,
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
    "BIMDataCarousel",
    "BIMDataCheckbox",
    "BIMDataColorSelector",
    "BIMDataDatePicker",
    "BIMDataDropdownList",
    "BIMDataDropdownMenu",
    "BIMDataFileIcon",
    "BIMDataIcon",
    "BIMDataIllustration",
    "BIMDataInput",
    "BIMDataLoading",
    "BIMDataModelPreview",
    "BIMDataMultiplePieChart",
    "BIMDataNavigation",
    "BIMDataPaginatedList",
    "BIMDataPieSpinner",
    "BIMDataRadio",
    "BIMDataResponsiveGrid",
    "BIMDataSafeZoneModal",
    "BIMDataSearch",
    "BIMDataSearchAutocomplete",
    "BIMDataSelect",
    "BIMDataSimplePieChart",
    "BIMDataSpinner",
    "BIMDataTable",
    "BIMDataTabs",
    "BIMDataText",
    "BIMDataTextarea",
    "BIMDataTextbox",
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
          preventAssignment: true,
        }),
        vue2({
          template: { isProduction: true },
        }),
        resolve({
          browser: true,
          preferBuiltins: false,
          resolveOnly: ["@sum.cumo/vue-datepicker"],
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
          preventAssignment: true,
        }),
        vue3({
          template: { isProduction: true },
          preprocessStyles: true,
        }),
        resolve({
          browser: true,
          preferBuiltins: false,
          resolveOnly: ["@sum.cumo/vue-datepicker"],
        }),
        postcss(),
        image(),
        terser(),
      ],
    })),
  ];
}
