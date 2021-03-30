<template>
  <main class="article article-tooltip">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataTooltip
            message="tooltip here"
            :className="getOverviewTooltipClasses()"
          >
            <template #content>
              <span>Hover me</span>
            </template>
          </BIMDataTooltip>
        </template>

        <template #parameters>
          <div
            v-for="[key, values] in Object.entries(tooltipOptions)"
            :key="key"
          >
            <h5 class="bimdata-h5">{{ key }}</h5>
            <BIMDataRadio
              v-for="value in values"
              :key="value"
              :text="value"
              :id="value"
              :value="value"
              :name="key"
              v-model="$data[`selectedTooltipOptions${key}`]"
            >
            </BIMDataRadio>
          </div>
          <div>
            <h5 class="bimdata-h5">modifiers</h5>
            <BIMDataCheckbox text="arrow" v-model="checkboxArrowChecked">
            </BIMDataCheckbox>
          </div>
        </template>

        <template #import>
          import BIMDataTooltip from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataTooltip.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataTooltip message="tooltip here" :className="{{
              getOverviewTooltipClasses()
            }}"&gt;
              &lt;template #content&gt;&lt;span&gt;Hover me&lt;/span&gt;&lt;/template&gt;
            &lt;/BIMDataTooltip&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Slots:</h5>
        <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataTooltip from "../../../../../src/BIMDataComponents/BIMDataTooltip/BIMDataTooltip.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTooltip,
    BIMDataRadio,
    BIMDataCheckbox,
    BIMDataTable,
  },
  data() {
    return {
      selectedTooltipOptionsposition: "bottom",
      selectedTooltipOptionscolor: "primary",
      checkboxArrowChecked: true,
      tooltipOptions: {
        position: ["left", "right", "bottom", "up"],
        color: ["primary", "grey"],
      },
      propsData: [
        ["Props", "Type", "Default value", "Required", "Description"],
        [
          "message",
          "String",
          "null",
          "true",
          "Use this props to add a tooltip text.",
        ],
        [
          "className",
          "String",
          " ",
          "true",
          "Use this props to add class and custom your your tooltip.",
        ],
      ],
      slotsData: [
        ["Slot name", "Description"],
        [
          "content",
          "Allows you to wrap any element to add a tooltip to the hover.",
        ],
      ],
    };
  },

  methods: {
    getOverviewTooltipClasses() {
      if (this.checkboxArrowChecked) {
        return `bimdata-tooltip--${this.selectedTooltipOptionsposition} bimdata-tooltip--${this.selectedTooltipOptionscolor} bimdata-tooltip--arrow`;
      } else {
        return `bimdata-tooltip--${this.selectedTooltipOptionsposition} bimdata-tooltip--${this.selectedTooltipOptionscolor}`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// import COMPONENT STYLE
@import "./_Tooltip.scss";
</style>
