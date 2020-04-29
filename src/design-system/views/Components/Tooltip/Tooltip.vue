<template>
  <main class="article article-tooltip">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <ComponentCode :componentTitle="$route.name">
        <template #module>
          <BIMDataTooltip message="tooltip here" :className="getOverviewTooltipClasses()">
            <template #content><span>Hover me</span></template>
          </BIMDataTooltip>
        </template>

        <template #parameters>
          <div
            class="bimdata-ds__demo__parameters__options"
            v-for="[key, values] in Object.entries(tooltipOptions)"
            :key="key"
          >
            <h5>{{ key }}</h5>
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
          <div class="bimdata-ds__demo__parameters__options">
              <h5>modifiers</h5>
            <BIMDataCheckbox
              text="arrow"
              v-model="checkboxArrowChecked">
            </BIMDataCheckbox>
          </div>
        </template>

        <template #code>
          <pre>
            &lt;BIMDataTooltip&gt;&lt;/BIMDataTooltip&gt;
          </pre>
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataTooltip from "@/BIMDataComponents/BIMDataTooltip/BIMDataTooltip.vue";
import BIMDataRadio from "@/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataCheckbox from "@/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTooltip,
    BIMDataRadio,
    BIMDataCheckbox
  },
  data(){
    return {
      selectedTooltipOptionsposition: "bottom",
      selectedTooltipOptionscolor: "primary",
      checkboxArrowChecked: false,
      tooltipOptions: {
        position: ["left", "right", "bottom", "up"],
        color: ["primary", "grey"]
      }
    }
  },

  methods: {
    getOverviewTooltipClasses() {
      if (this.checkboxArrowChecked) {
        return `bimdata-tooltip--${this.selectedTooltipOptionsposition} bimdata-tooltip--${this.selectedTooltipOptionscolor} bimdata-tooltip--arrow`
      } else {
        return `bimdata-tooltip--${this.selectedTooltipOptionsposition} bimdata-tooltip--${this.selectedTooltipOptionscolor}`
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_Tooltip.scss";
</style>