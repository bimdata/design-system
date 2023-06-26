import { terser } from "rollup-plugin-terser";
import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

module.exports = [
  ...getDirectivesConfiguration(),
  ...getSingleComponentConfigurations(),
  ...getSingleSmartComponentConfigurations(),
  ...getAllComponentsBundleConfiguration(),
];

function getDirectivesConfiguration() {
  return [
    {
      input: ["src/BIMDataDirectives/index.js"],
      plugins: [terser()],
      output: {
        dir: "dist/js/BIMDataDirectives",
        format: "es",
      },
      external: ["vue"],
    },
  ];
}

// build ALL COMPONENTS
function getAllComponentsBundleConfiguration() {
  return [
    {
      input: ["src/BIMDataComponents/index.js"],
      output: {
        dir: "dist/js/BIMDataComponents",
        format: "es",
      },
      external: ["vue"],
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
        vue({
          template: { isProduction: true },
          preprocessStyles: true,
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
        vue({
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
    "BIMDataMenu",
    "BIMDataMenuInline",
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
    "BIMDataPDFViewer",
  ];

  return [
    ...componentNames.map(componentName => ({
      input: [`src/BIMDataComponents/${componentName}/${componentName}.vue`],
      output: {
        file: `dist/js/BIMDataComponents/${componentName}.js`,
        format: "esm",
      },
      external: ["vue"],
      plugins: [
        replace({
          "~@/assets": "node_modules/@bimdata/design-system/dist",
          delimiters: ["", ""],
          preventAssignment: true,
        }),
        vue({
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
