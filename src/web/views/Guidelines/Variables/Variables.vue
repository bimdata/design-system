<template>
  <main class="article variables">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <BIMDataText margin="10px 0 15px"
        >To be able to use all these variables listed below, please import this
        code into your project:</BIMDataText
      >
      <Code language="css">
        @import "@/assets/scss/_BIMDataVariables.scss";
      </Code>
      <div class="m-y-12">
        <BIMDataText component="h6" color="color-primary"
          >Colors variables summary</BIMDataText
        >
        <BIMDataTable
          :rowHeight="36"
          :columns="variablesColorSummary[0]"
          :rows="variablesColorSummary.slice(1)"
        />
        <BIMDataText margin="10px 0 15px">
          To see all colors and how use it
          <router-link to="/guidelines-utilities/colors" class="bimdata-link"
            >click here</router-link
          >.</BIMDataText
        >
      </div>
      <div class="m-y-12">
        <BIMDataText component="h6" color="color-primary"
          >Font-size variables summary</BIMDataText
        >
        <BIMDataTable
          :rowHeight="36"
          :columns="variablesFontsizeSummary[0]"
          :rows="variablesFontsizeSummary.slice(1)"
        />
      </div>
      <div class="m-y-12">
        <BIMDataText component="h6" color="color-primary"
          >Spacing variables summary</BIMDataText
        >
        <BIMDataTable
          :rowHeight="36"
          :columns="variablesSpacingSummary[0]"
          :rows="variablesSpacingSummary.slice(1)"
        />
        <BIMDataText margin="10px 0 15px">
          To see all spacing class and how use it
          <router-link to="/guidelines-utilities/spacing" class="bimdata-link"
            >click here</router-link
          >.</BIMDataText
        >
      </div>
      <div class="m-y-12">
        <BIMDataText component="h6" color="color-primary"
          >Fonts variables summary</BIMDataText
        >
        <BIMDataTable
          :rowHeight="36"
          :columns="variablesFontSummary[0]"
          :rows="variablesFontSummary.slice(1)"
        />
        <BIMDataText margin="10px 0 15px">
          To see all fonts uses in BIMData and how use it
          <router-link
            to="/guidelines-utilities/typography"
            class="bimdata-link"
            >click here</router-link
          >.</BIMDataText
        >
      </div>
    </div>
  </main>
</template>

<script>
import Code from "../../Elements/Code/Code.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    Code,
    BIMDataTable,
    BIMDataText,
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
</style>
