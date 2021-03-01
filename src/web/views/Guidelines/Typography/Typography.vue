<template>
  <main class="article typography">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
        <FontSize></FontSize>
      <div class="typography-size m-y-12">
        <h3 class="bimdata-h3">Font size</h3>
        <p>Use this css classes in html class :</p>
        <BIMDataTable :rows="sizeClass"></BIMDataTable>
         <Code language="scss">
          <pre>
            @import "node_modules/@bimdata/design-system/dist/scss/utilities/text.scss"
          </pre>
        </Code>
      </div>
      <div class="typography-weight m-y-12">
        <h3 class="bimdata-h3">Font weights</h3>
        <div class="m-b-24">
          <p>Use this css classes in html class :</p>
          <BIMDataTable class="m-t-12" :rows="weightClass"></BIMDataTable>
          <Code language="scss">
            <pre>
              @import "node_modules/@bimdata/design-system/dist/scss/utilities/text.scss"
            </pre>
          </Code>
        </div>
        <div class="m-t-24">
          <p>Use this css variables like a 'font-family' property :</p>
          <BIMDataTable :rows="weightUtilities"></BIMDataTable>
          <Code language="scss">
            <pre>
              @import "node_modules/@bimdata/design-system/dist/scss/BIMDataVariables.scss"
            </pre>
          </Code>
        </div>
      </div>

      <!-- <div class="typography-use m-y-12">
        <h3 class="bimdata-h3">How to further customize font-size</h3>
        <p>
          If the size options set above are not enought to customize the font size, you can use this mixin to customize font-size in 'em'.
        </p>
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
      </div> -->
    </div>
  </main>
</template>

<script>
import FontSize from "./FontSize/FontSize.vue";
import Code from "../../Elements/Code/Code.vue";

import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";


export default {
  components: {
    FontSize,
    Code,
    BIMDataTable
  },
  data(){
    return {
      sizeClass: [
        ["Class Name", "Size in px", "Output value"],
        ["bimdata-h1", "34px", "font-size: 2.42857em;"],
        ["bimdata-h2", "30px", "font-size: 2.14286em;"],
        ["bimdata-h3", "26px", "font-size: 1.85714em;"],
        ["bimdata-h4", "24px", "font-size: 1.71429em;"],
        ["bimdata-h5", "20px", "font-size: 1.42857em;"],
        ["bimdata-h6", "16px", "font-size: 1.14286em;"],
        ["bimdata-text", "14px", "font-size: 1em;"],
      ],
      weightClass: [
        ["Class Name", "Output value"],
        ["primary-font", "font-family: 'robotoregular', sans-serif;"],
        ["primary-font-medium", "font-family: 'robotomedium', sans-serif;"],
        ["primary-font-bold", "font-family: 'robotobold', sans-serif;"],
      ],
      weightUtilities: [
        ["Font weight utility class", "Output value"],
        ["var(--primary-font)", "'robotoregular', sans-serif"],
        ["var(--primary-font-medium)", "'robotomedium', sans-serif"],
        ["var(--primary-font-bold)", "'robotobold', sans-serif"],
      ],
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./_Typography.scss";
</style>
