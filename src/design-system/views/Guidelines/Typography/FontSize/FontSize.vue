<template>
  <div>
    <ComponentCode :componentTitle="$route.name" language="scss">
      <template #module>
        <span :class="getOverviewTextClasses()">text</span>
      </template>
      <template #parameters>
        <div class="bimdata-ds__demo__parameters__options" v-for="[key, values] in Object.entries(textClasses)" :key="key">
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
          @import "@/assets/scss/utilities/_text.scss";
        </pre>
      </template>
      <template #code>
        <pre>&lt;span class="{{selectedTextClassessize}} {{selectedTextClassesweight}}"&gt;text&lt;/span&gt;</pre>
      </template>
    </ComponentCode>
    <div class="m-y-12">
      <h6 class="bimdata-h6">Class summary</h6>
      <BIMDataTable :rows="classSummary"></BIMDataTable>
    </div>
  </div>
</template>

<script>
import ComponentCode from "../../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataRadio from "../../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataTable from "../../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

export default {
  components: {
    ComponentCode,
    BIMDataRadio,
    BIMDataTable
  },
  data() {
    return {
      selectedTextClassessize: "bimdata-h1",
      selectedTextClassesweight: "primary-font",
      textClasses: {
        size: ["bimdata-h1", "bimdata-h2", "bimdata-h3", "bimdata-h4", "bimdata-h5", "bimdata-h6", "bimdata-text"],
        weight: ["primary-font", "primary-font-medium", "primary-font-bold"]
      },
      classSummary: [
        ["Class Name", "Size", "Output value"],
        ["bimdata-h1", "34px (2.4em)", "font-size: 2.42857em;"]
      ]
    }
  },
  methods: {
    getOverviewTextClasses(){
      return `${this.selectedTextClassessize} ${this.selectedTextClassesweight}`
    }
  }
}
</script>

<style lang="scss" scoped>
  // import BIMDATA COMPONENT VARIABLES
  @import "../../../../../assets/scss/_BIMDataVariables.scss";

  // import COMPONENT STYLE
  @import "./_FontSize.scss";
</style>