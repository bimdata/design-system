<template>
  <main class="article typography">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <div class="typography-size m-y-12">
        <BIMDataText component="h3" color="color-primary" margin="15px 0 10px">
          Font size
        </BIMDataText>
        <div class="m-b-24">
          <BIMDataText>
            If you use
            <router-link class="bimdata-link" to="../components/text">
              &lt;BIMDataText&gt;
            </router-link>
            component, you have the possibility of having pre-defined titles:
          </BIMDataText>
        </div>
        <BIMDataTable
          :rowHeight="36"
          :columns="sizeClass[0]"
          :rows="sizeClass.slice(1)"
        />
      </div>
      <div class="typography-weight m-y-12">
        <BIMDataText component="h3" color="color-primary" margin="15px 0 10px">
          Font weights
        </BIMDataText>
        <div class="m-b-24">
          <BIMDataText>Use this css classes in html class :</BIMDataText>
          <BIMDataTable
            :rowHeight="36"
            :columns="fontFamilyClass[0]"
            :rows="fontFamilyClass.slice(1)"
          />
          <Code language="scss">
            <pre>
              @import "@bimdata/design-system/src/assets/css/utilities/_text.css";
            </pre>
          </Code>
        </div>
      </div>

      <div class="typography-use m-y-12">
        <BIMDataText component="h3" color="color-primary" margin="15px 0 10px">
          How to further customize font-size
        </BIMDataText>
        <div class="m-b-24">
          <BIMDataText>
            If the size options set above are not enought to customize the font
            size, you can use this SCSS mixin to customize font-size in 'em':
          </BIMDataText>
        </div>
        <div class="typography-use__content">
          <Code language="scss">
            <pre>
              @import "@bimdata/design-system/src/assets/scss/mixins/_font-size.scss";
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
      sizeClass: [
        ["Component", "Size (px / em)", "Line-height (px / em)"],
        ["h1", "30px / 2.1em", "36px / 2.6em"],
        ["h2", "26px / 1.9em", "30px / 2.1em"],
        ["h3", "24px / 1.7em", "26px / 1.9em"],
        ["h4", "20px / 1.4em", "24px / 1.7em"],
        ["h5", "16px / 1.1em", "20px / 1.4em"],
        ["p", "14px / 1em", "18px / 1.3em"],
      ],
      fontFamilyClass: [
        ["Class Name", "Output value"],
        ["primary-font", "font-family: 'roboto', sans-serif;"],
      ],
    };
  },
};
</script>

<style scoped lang="scss" src="./_Typography.scss"></style>
