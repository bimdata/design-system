<template>
  <main class="article variables">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <p>
        To be able to use all these variables listed below, please import this
        code into your project:
      </p>
      <Code language="css">
        @import "@/assets/scss/_BIMDataVariables.scss";
      </Code>
      <div class="m-y-12">
        <h6 class="bimdata-h6">Colors variables summary</h6>
        <BIMDataTable :rows="variablesColorSummary"></BIMDataTable>
        <p>
          To see all colors and how use it
          <router-link to="/guidelines/colors" class="color-primary"
            >click here</router-link
          >.
        </p>
      </div>
      <div class="m-y-12">
        <h6 class="bimdata-h6">Font-size variables summary</h6>
        <BIMDataTable :rows="variablesFontsizeSummary"></BIMDataTable>
      </div>
      <div class="m-y-12">
        <h6 class="bimdata-h6">Spacing variables summary</h6>
        <BIMDataTable :rows="variablesSpacingSummary"></BIMDataTable>
        <p>
          To see all spacing class and how use it
          <router-link to="/guidelines/spacing" class="color-primary"
            >click here</router-link
          >.
        </p>
      </div>
      <div class="m-y-12">
        <h6 class="bimdata-h6">Fonts variables summary</h6>
        <BIMDataTable :rows="variablesFontSummary"></BIMDataTable>
        <p>
          To see all fonts uses in BIMData and how use it
          <router-link to="/guidelines/typography" class="color-primary"
            >click here</router-link
          >.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import Code from "../../Elements/Code/Code.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

export default {
  components: {
    Code,
    BIMDataTable,
  },
  data() {
    return {
      variablesColorSummary: [
        ["SCSS Variable Name", "CSS Variable Name", "Output value"],
        ["$color-primary", "--color-primary", "rgba(47, 55, 74, 1);"],
        ["$color-secondary", "--color-secondary", "rgba(249, 199, 44, 1);"],
        ["$color-tertiary", "--color-tertiary", "rgba(216, 216, 216, 1);"],
        [
          "$color-tertiary-lightest",
          "--color-tertiary-lightest",
          "rgba(247, 247, 247, 1);",
        ],
        [
          "$color-tertiary-dark",
          "--color-tertiary-dark",
          "rgba(123, 123, 123, 1);",
        ],
        [
          "$color-tertiary-darkest",
          "--color-tertiary-darkest",
          "rgba(96, 96, 96, 1);",
        ],
        ["$color-white", "--color-white", "rgba(255, 255, 255, 1);"],
        ["$color-black", "--color-black", "rgba(0, 0, 0, 1);"],
        ["$color-neutral", "--color-neutral", "rgba(32, 93, 189, 1);"],
        ["$color-success", "--color-success", "rgba(0, 175, 80, 1);"],
        ["$color-disabled", "--color-disabled", "rgba(189, 189, 189, 1);"],
        ["$color-warning", "--color-warning", "rgba(255, 145, 0, 1);"],
        ["$color-high", "--color-high", "rgba(255, 61, 30, 1);"],
      ],
      variablesFontsizeSummary: [
        ["SCSS Variable Name", "CSS Variable Name", "Output value"],
        ["$font-size", "--font-size", "14px;"],
      ],
      variablesSpacingSummary: [
        ["SCSS Variable Name", "CSS Variable Name", "Output value"],
        ["$spacing-unit", "--spacing-unit", "12px;"],
        ["$size-btn-options", "--size-btn-options", "45px;"],
      ],
      variablesFontSummary: [
        ["SCSS Variable Name", "CSS Variable Name", "Output value"],
        ["$primary-font", "--primary-font", "'robotoregular';"],
        ["$primary-font-medium", "--primary-font-medium", "'robotomedium';"],
        ["$primary-font-bold", "--primary-font-bold", "'robotobold';"],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/_BIMDataVariables.scss";

@import "../../../../assets/scss/utilities/_colors.scss";

@import "./_Variables.scss";
</style>
