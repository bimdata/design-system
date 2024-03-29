<template>
  <main class="article toggle">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataToggle v-model="toggled" :disabled="checkboxDisabledChecked">
            <span v-if="checkboxDefaultSlotChecked">
              {{ toggled ? "on" : "off" }}
            </span>
            <template #right v-if="checkboxRightSlotChecked">
              <span>right content</span>
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
          "@bimdata/design-system/src/BIMDataComponents/BIMDataToggle/BIMDataToggle.vue";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataToggle v-model="toggled" {{ getToggleDisabled() }}&gt;
            {{ getDefaultSlot() }}
            {{ getRightSlot() }}
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
          >Events:</BIMDataText
        >
        <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
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

export default {
  components: {
    ComponentCode,
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
      eventsData: [
        ["Event name", "Payload"],
        ["update:modelValue", "The input state."],
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
    getDefaultSlot() {
      if (this.checkboxDefaultSlotChecked) {
        return "<span>off</span>";
      }
    },
    getRightSlot() {
      if (this.checkboxRightSlotChecked) {
        return "<template #right><span>right content</span></template>";
      }
    },
  },
};
</script>
