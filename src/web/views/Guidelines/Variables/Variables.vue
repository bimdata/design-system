<template>
  <main class="article variables">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <BIMDataText margin="10px 0 15px"
        >To be able to use all these variables listed below, please import this
        code into your project:</BIMDataText
      >
      <Code language="css"> @import "@/assets/css/variables.css"; </Code>
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
          >Box-shadow variables summary</BIMDataText
        >
        <BIMDataTable
          :rowHeight="36"
          :columns="variablesBoxShadowSummary[0]"
          :rows="variablesBoxShadowSummary.slice(1)"
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
        ["$color-white", "--color-white", "rgba(255, 255, 255, 1);"],
        [
          "$color-silver-light",
          "--color-silver-light",
          "rgba(247, 247, 247, 1);",
        ],
        ["$color-silver", "--color-silver", "rgba(216, 216, 216, 1);"],
        [
          "$color-silver-dark",
          "--color-silver-dark",
          "rgba(189, 189, 189, 1);",
        ],
        [
          "$color-granite-light",
          "--color-granite-light",
          "rgba(122, 122, 122, 1);",
        ],
        ["$color-granite", "--color-granite", "rgba(96, 96, 96, 1);"],
        ["$color-black", "--color-black", "rgba(0, 0, 0, 1);"],
        ["$color-success", "--color-success", "rgba(0, 175, 80, 1);"],
        ["$color-warning", "--color-warning", "rgba(255, 145, 0, 1);"],
        ["$color-high", "--color-high", "rgba(255, 61, 30, 1);"],
      ],
      variablesFontsizeSummary: [
        ["SCSS Variable Name", "CSS Variable Name", "Output value"],
        ["$font-size", "--font-size", "14px;"],
      ],
      variablesBoxShadowSummary: [
        ["SCSS Variable Name", "CSS Variable Name", "Output value"],
        [
          "$box-shadow",
          "--box-shadow",
          "0px 2px 10px rgba($color-black, 0.1);",
        ],
      ],
      variablesSpacingSummary: [
        ["SCSS Variable Name", "CSS Variable Name", "Output value"],
        ["$spacing-unit", "--spacing-unit", "12px;"],
        ["$size-btn-options", "--size-btn-options", "45px;"],
      ],
      variablesFontSummary: [
        ["SCSS Variable Name", "CSS Variable Name", "Output value"],
        ["$primary-font", "--primary-font", "'roboto';"],
      ],
    };
  },
};
</script>
