<template>
  <main class="article toggle">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataToggle v-model="toggled" :disabled="checkboxDisabledChecked">
            <span v-if="checkboxDefaultSlotChecked">
              {{ toggled ? "on" : "off" }}
            </span>
            <template #right v-if="checkboxRightSlotChecked">
              right content
            </template>
          </BIMDataToggle>
        </template>

        <template #parameters>
          <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
            >modifiers</BIMDataText
          >
          <BIMDataCheckbox
            text="disabled"
            v-model="checkboxDisabledChecked"
            class="m-y-12"
          >
          </BIMDataCheckbox>
          <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
            >slots</BIMDataText
          >
          <BIMDataCheckbox
            text="default"
            v-model="checkboxDefaultSlotChecked"
            class="m-y-12"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            text="right"
            v-model="checkboxRightSlotChecked"
            class="m-y-12"
          >
          </BIMDataCheckbox>
        </template>

        <template #import>
          import BIMDataToggle from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataToggle.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataToggle {{ getToggleDisabled() }}&gt;
            &lt;/BIMDataToggle&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-24">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Props:</BIMDataText
        >
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-24">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Slots:</BIMDataText
        >
        <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataToggle from "../../../../../src/BIMDataComponents/BIMDataToggle/BIMDataToggle.vue";

export default {
  components: {
    ComponentCode,
    BIMDataCheckbox,
    BIMDataTable,
    BIMDataText,
    BIMDataToggle,
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
        ["Slot name", "Description"],
        ["default", "Use this slot to add content before the toggle switch"],
        ["right", "Use this slot to add content after the toggle switch"],
      ],
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
      if (this.checkboxDisabledChecked) {
        return 'disabled="true"';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./_Toggle.scss";
</style>
