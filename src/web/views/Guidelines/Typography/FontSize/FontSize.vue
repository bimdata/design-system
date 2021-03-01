<template>
  <div>
    <ComponentCode :componentTitle="$route.name" language="scss">
      <template #module>
        <span :class="getOverviewTextClasses()">text</span>
      </template>
      <template #parameters>
        <div
          v-for="[key, values] in Object.entries(textClasses)"
          :key="key"
        >
          <h5 class="bimdata-h5">{{ key }}</h5>
          <BIMDataRadio
            v-for="value in values"
            :text="value"
            v-model="$data[`selectedTextClasses${key}`]"
            :key="value"
            :name="key"
            :id="value"
            :value="value"
            class="m-y-6"
          >
          </BIMDataRadio>
        </div>
      </template>
      <template #import>
        <pre>
          // import BIMDATA COMPONENT UTILITIES
          @import "node_modules/@bimdata/design-system/dist/scss/utilities/text.scss"
        </pre>
      </template>
      <template #code>
        <pre>
&lt;span class="{{ selectedTextClassessize }} {{
            selectedTextClassesweight
          }}"&gt;text&lt;/span&gt;</pre
        >
      </template>
    </ComponentCode>
  </div>
</template>

<script>
import ComponentCode from "../../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataRadio from "../../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";

export default {
  components: {
    ComponentCode,
    BIMDataRadio,
  },
  data() {
    return {
      selectedTextClassessize: "bimdata-h1",
      selectedTextClassesweight: "primary-font",
      textClasses: {
        size: [
          "bimdata-h1",
          "bimdata-h2",
          "bimdata-h3",
          "bimdata-h4",
          "bimdata-h5",
          "bimdata-h6",
          "bimdata-text",
        ],
        weight: ["primary-font", "primary-font-medium", "primary-font-bold"],
      },
    };
  },
  methods: {
    getOverviewTextClasses() {
      return `${this.selectedTextClassessize} ${this.selectedTextClassesweight}`;
    },
  },
};
</script>

<style lang="scss" scoped>
// import COMPONENT STYLE
@import "./_FontSize.scss";
</style>
