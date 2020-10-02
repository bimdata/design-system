<template>
  <main class="article toggle">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataToggle
            v-model="toggled"
            :disabled="checkboxDisabledChecked"
          >
          <span v-if="checkboxDefaultSlotChecked">
            {{toggled ? "on" : "off"}}
          </span>
          <template #right v-if="checkboxRightSlotChecked">
            right content
          </template>
          </BIMDataToggle>
        </template>

        <template #parameters>
          <h5 class="bimdata-h5">modifiers</h5>
          <BIMDataCheckbox text="disabled" v-model="checkboxDisabledChecked" class="m-y-12">
          </BIMDataCheckbox>
          <h5 class="bimdata-h5">slotss</h5>
          <BIMDataCheckbox text="default" v-model="checkboxDefaultSlotChecked" class="m-y-12">
          </BIMDataCheckbox>
          <BIMDataCheckbox text="right" v-model="checkboxRightSlotChecked" class="m-y-12">
          </BIMDataCheckbox>
        </template>

        <template #import>
          import BIMDataToggle from
            "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataToggle.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataToggle {{getToggleDisabled()}}&gt;
            &lt;/BIMDataToggle&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-24">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>

      <div class="m-t-24">
        <h5 class="bimdata-h5">Slots:</h5>
        <BIMDataTable :rows="slotsData"></BIMDataTable>
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataToggle from "../../../../../src/BIMDataComponents/BIMDataToggle/BIMDataToggle.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

export default {
  components: {
    ComponentCode,
    BIMDataToggle,
    BIMDataCheckbox,
    BIMDataTable
  },
  data() {
    return {
      toggled: false,
      checkboxDisabledChecked: false,
      checkboxDefaultSlotChecked: true,
      checkboxRightSlotChecked: false,
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        ["disabled", "String", "false", "Use this props to disabled toggle"],
      ],
      slotsData: [
        ["Slots", "Description"],
        ["default", "Use this slot to add content before the toggle switch"],
        ["#right", "Use this slot to add content after the toggle switch"],
      ]
    };
  },
  methods: {
    getLabelText() {
      if (this.checkboxLabelChecked) {
        return "your label here";
      }
    },
    getSwitchEnableLabelText() {
      if (this.checkboxSwitchLabelChecked) {
        return "label on";
      }
    },
    getSwitchDisabledLabelText() {
      if (this.checkboxSwitchLabelChecked) {
        return "label off";
      }
    },
    getToggleDisabled() {
      if(this.checkboxDisabledChecked){
        return `disabled="true"`;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@import "./_Toggle.scss";
</style>
