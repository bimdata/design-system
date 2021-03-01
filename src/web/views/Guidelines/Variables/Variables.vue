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
          <router-link to="/guidelines-utilities/colors" class="color-primary"
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
          <router-link to="/guidelines-utilities/spacing" class="color-primary"
            >click here</router-link
          >.
        </p>
      </div>
      <div class="m-y-12">
        <h6 class="bimdata-h6">Fonts variables summary</h6>
        <BIMDataTable :rows="variablesFontSummary"></BIMDataTable>
        <p>
          To see all fonts uses in BIMData and how use it
          <router-link to="/guidelines-utilities/typography" class="color-primary"
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
        ["CSS Variable Name", "Output value"],
        ["--color-primary", "rgba(47, 55, 74, 1);"],
        ["--color-secondary", "rgba(249, 199, 44, 1);"],
        ["--color-tertiary", "rgba(216, 216, 216, 1);"],
        [
          "--color-tertiary-lightest",
          "rgba(247, 247, 247, 1);",
        ],
        [
          "--color-tertiary-dark",
          "rgba(123, 123, 123, 1);",
        ],
        [
          "--color-tertiary-darkest",
          "rgba(96, 96, 96, 1);",
        ],
        ["var(--color-highlight)", "--color-highlight", "rgba(255, 255, 255, 1);"],
        ["--color-shadow", "rgba(0, 0, 0, 1);"],
        ["--color-neutral", "rgba(32, 93, 189, 1);"],
        ["--color-success", "rgba(0, 175, 80, 1);"],
        ["--color-disabled", "rgba(189, 189, 189, 1);"],
        ["--color-warning", "rgba(255, 145, 0, 1);"],
        ["--color-high", "rgba(255, 61, 30, 1);"],
      ],
      variablesFontsizeSummary: [
        ["CSS Variable Name", "Output value"],
        ["--font-size", "14px;"],
      ],
      variablesSpacingSummary: [
        ["CSS Variable Name", "Output value"],
        ["--spacing-unit", "12px;"],
      ],
      variablesFontSummary: [
        ["CSS Variable Name", "Output value"],
        ["--primary-font", "'robotoregular';"],
        ["--primary-font-medium", "'robotomedium';"],
        ["--primary-font-bold", "'robotobold';"],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/utilities/_colors.scss";

@import "./_Variables.scss";
</style>
