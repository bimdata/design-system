<template>
  <main class="article typography">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <div class="typography-size m-y-12">
        <BIMDataText component="h3" color="color-primary" margin="15px 0 10px"
          >Font size</BIMDataText
        >
        <div class="m-b-24">
          <BIMDataText
            >If you use
            <router-link class="bimdata-link" to="../components/text"
              >&lt;BIMDataText&gt;</router-link
            >
            component, you have the possibility of having pre-defined titles
            :</BIMDataText
          >
        </div>
        <BIMDataTable
          :rowHeight="36"
          :columns="sizeClass[0]"
          :rows="sizeClass.slice(1)"
        />
      </div>
      <div class="typography-weight m-y-12">
        <BIMDataText component="h3" color="color-primary" margin="15px 0 10px"
          >Font weights</BIMDataText
        >
        <div class="m-b-24">
          <BIMDataText>Use this css classes in html class :</BIMDataText>
          <BIMDataTable
            :rowHeight="36"
            :columns="weightClass[0]"
            :rows="weightClass.slice(1)"
          />
          <Code language="scss">
            <pre>
              @import "node_modules/@bimdata/design-system/dist/scss/utilities/text.scss"
            </pre>
          </Code>
        </div>
        <div class="m-t-24">
          <BIMDataText
            >Use this scss variables like a 'font-family' property
            :</BIMDataText
          >
          <BIMDataTable
            :rowHeight="36"
            :columns="weightUtilities[0]"
            :rows="weightUtilities.slice(1)"
          />
          <Code language="scss">
            <pre>
              @import "node_modules/@bimdata/design-system/dist/scss/BIMDataVariables.scss"
            </pre>
          </Code>
        </div>
      </div>

      <div class="typography-use m-y-12">
        <BIMDataText component="h3" color="color-primary" margin="15px 0 10px"
          >How to further customize font-size</BIMDataText
        >
        <div class="m-b-24">
          <BIMDataText
            >If the size options set above are not enought to customize the font
            size, you can use this mixin to customize font-size in
            'em'.</BIMDataText
          >
        </div>
        <div class="typography-use__content">
          <Code language="scss">
            <pre>
              @import "node_modules/@bimdata/design-system/dist/scss/mixins/font-size.scss"
            </pre>
          </Code>
          <Code language="scss">
            <pre>
              font-size: calculateEm(12px);
            </pre>
          </Code>
        </div>
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
      sizeClass: [
        ["Component", "Size (px / em)", "Line-height (px / em)"],
        ["h1", "30px / 2.1em", "36px / 2.6em"],
        ["h2", "26px / 1.9em", "30px / 2.1em"],
        ["h3", "24px / 1.7em", "26px / 1.9em"],
        ["h4", "20px / 1.4em", "24px / 1.7em"],
        ["h5", "16px / 1.1em", "20px / 1.4em"],
        ["p", "14px / 1em", "18px / 1.3em"],
      ],
      weightClass: [
        ["Class Name", "Output value"],
        ["primary-font", "font-family: 'robotoregular', sans-serif;"],
        ["primary-font-medium", "font-family: 'robotomedium', sans-serif;"],
        ["primary-font-bold", "font-family: 'robotobold', sans-serif;"],
      ],
      weightUtilities: [
        ["Font weight utility class", "Output value"],
        ["$primary-font", "'robotoregular', sans-serif"],
        ["$primary-font-medium", "'robotomedium', sans-serif"],
        ["$primary-font-bold", "'robotobold', sans-serif"],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/css/_BIMDataVariables.css";

@import "./_Typography.scss";
</style>
