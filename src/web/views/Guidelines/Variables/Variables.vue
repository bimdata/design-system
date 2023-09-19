<template>
  <main class="article variables">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        Variables
      </BIMDataText>
      <BIMDataText margin="12px 0">
        To be able to use all these variables listed below, please import this
        code into your project:
      </BIMDataText>
      <Code language="css">
        <pre>
          @import "@design-system/src/assets/css/variables.css";
        </pre>
      </Code>

      <BIMDataText component="h4" color="color-primary" margin="18px 0">
        Colors variables
      </BIMDataText>
      <BIMDataTable :rowHeight="36" :columns="columns" :rows="colorVariables" />
      <BIMDataText margin="12px 0">
        To see all colors and how use it
        <router-link to="/guidelines-utilities/colors" class="bimdata-link">
          click here
        </router-link>
      </BIMDataText>

      <BIMDataText component="h4" color="color-primary" margin="18px 0">
        Box Shadow variables
      </BIMDataText>
      <BIMDataTable
        :rowHeight="36"
        :columns="columns"
        :rows="boxShadowVariables"
      />

      <BIMDataText component="h4" color="color-primary" margin="18px 0">
        Spacing variables
      </BIMDataText>
      <BIMDataTable
        :rowHeight="36"
        :columns="columns"
        :rows="spacingVariables"
      />
      <BIMDataText margin="10px 0 15px">
        To see all spacing class and how use it
        <router-link to="/guidelines-utilities/spacing" class="bimdata-link">
          click here
        </router-link>
      </BIMDataText>

      <BIMDataText component="h4" color="color-primary" margin="18px 0">
        Fonts variables
      </BIMDataText>
      <BIMDataTable :rowHeight="36" :columns="columns" :rows="fontVariables" />
      <BIMDataText margin="10px 0 15px">
        To see all fonts uses in BIMData and how use it
        <router-link to="/guidelines-utilities/typography" class="bimdata-link">
          click here
        </router-link>
      </BIMDataText>
    </div>
  </main>
</template>

<script>
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import Code from "../../Elements/Code/Code.vue";

export default {
  components: {
    BIMDataTable,
    BIMDataText,
    Code,
  },
  data() {
    return {
      columns: [
        { id: "name", label: "CSS Variable Name", width: "300px" },
        { id: "value", label: "Output value" },
      ],
      colorVariables: [
        ["--color-primary", "rgba(47, 55, 74, 1)"],
        ["--color-primary-light", "rgba(67, 78, 105, 1)"],
        ["--color-primary-lighter", "rgba(248, 249, 250, 1)"],
        ["--color-primary-dark", "rgba(27, 32, 43, 1)"],
        ["--color-secondary", "rgba(249, 199, 44, 1)"],
        ["--color-secondary-light", "rgba(250, 212, 94, 1)"],
        ["--color-secondary-lighter", "rgba(255, 252, 242, 1)"],
        ["--color-secondary-dark", "rgba(235, 180, 7, 1)"],
        ["--color-white", "rgba(255, 255, 255, 1)"],
        ["--color-silver", "rgba(216, 216, 216, 1)"],
        ["--color-silver-light", "rgba(247, 247, 247, 1)"],
        ["--color-silver-dark", "rgba(189, 189, 189, 1)"],
        ["--color-granite", "rgba(96, 96, 96, 1)"],
        ["--color-granite-light", "rgba(122, 122, 122, 1)"],
        ["--color-black", "rgba(0, 0, 0, 1)"],
        ["--color-black-lighter", "rgba(0, 0, 0, 0.1)"],
        ["--color-success", "rgba(0, 175, 80, 1)"],
        ["--color-success-light", "rgba(0, 200, 92, 1)"],
        ["--color-success-lighter", "rgba(226, 255, 239, 1)"],
        ["--color-success-dark", "rgba(0, 149, 68, 1)"],
        ["--color-warning", "rgba(255, 145, 0, 1)"],
        ["--color-warning-light", "rgba(255, 167, 51, 1)"],
        ["--color-warning-lighter", "rgba(255, 233, 204, 1)"],
        ["--color-warning-dark", "rgba(204, 116, 0, 1)"],
        ["--color-high", "rgba(255, 61, 30, 1)"],
        ["--color-high-light", "rgba(255, 104, 81, 1)"],
        ["--color-high-lighter", "rgba(255, 237, 234, 1)"],
        ["--color-high-dark", "rgba(234, 31, 0, 1)"],
        ["--color-neutral", "rgba(32, 93, 189, 1)"],
        ["--color-neutral-light", "rgba(51, 117, 221, 1)"],
        ["--color-neutral-lighter", "rgba(240, 245, 255, 1)"],
        ["--color-neutral-dark", "rgba(25, 72, 145, 1)"],
        ["--color-text", "rgba(47, 55, 74, 1)"],
      ],
      boxShadowVariables: [
        ["--box-shadow", "0px 2px 10px rgba(0, 0, 0, 0.1)"],
        ["--box-shadow-dark", "0 2px 10px 0 rgba(0, 0, 0, 0.3)"],
      ],
      spacingVariables: [
        ["--spacing-unit", "12px"],
        ["--size-btn-options", "45px"],
      ],
      fontVariables: [
        ["--primary-font", "'roboto', sans-serif"],
        ["--font-size", "14px"],
      ],
    };
  },
};
</script>
