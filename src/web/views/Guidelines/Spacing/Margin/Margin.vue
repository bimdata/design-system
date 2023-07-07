<template>
  <div class="spacing-system__margin">
    <BIMDataText component="h1" color="color-primary">Margin</BIMDataText>
    <ComponentCode componentTitle="margin">
      <template #module>
        <div class="ds-spacing">
          <div :class="getMarginClass()">
            <span>{{ getMarginText() }}</span>
          </div>
        </div>
      </template>

      <template #parameters>
        <div class="grid">
          <div v-for="[size, values] in Object.entries(checkboxes)" :key="size">
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >{{ size }}</BIMDataText
            >
            <BIMDataCheckbox
              :text="value.text"
              v-model="value.checked"
              :key="value.class"
              class="m-y-6"
              :disabled="value.disabled"
              v-for="value in values"
            >
            </BIMDataCheckbox>
          </div>
        </div>
      </template>

      <template #code>
        <pre>
          &lt;div class="{{ getMarginText() }}"&gt;
            content here
          &lt;/div&gt;
        </pre>
      </template>
    </ComponentCode>
    <div class="m-y-12">
      <BIMDataText component="h3" color="color-primary" margin="15px 0 10px"
        >Class summary</BIMDataText
      >
      <div class="m-y-12">
        <BIMDataText component="h6" color="color-primary" margin="15px 0 10px"
          >Global</BIMDataText
        >
        <BIMDataTable
          :rowHeight="36"
          :columns="globalClassData[0]"
          :rows="globalClassData.slice(1)"
        />
      </div>
      <div class="m-y-12">
        <BIMDataText component="h6" color="color-primary" margin="15px 0 10px"
          >Top, Bottom, Vertical</BIMDataText
        >
        <BIMDataTable
          :rowHeight="36"
          :columns="verticalClassData[0]"
          :rows="verticalClassData.slice(1)"
        />
      </div>
      <div class="m-y-12">
        <BIMDataText component="h3" color="color-primary" margin="15px 0 10px"
          >Left, Right, Horizontal</BIMDataText
        >
        <BIMDataTable
          :rowHeight="36"
          :columns="horizontalClassData[0]"
          :rows="horizontalClassData.slice(1)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ComponentCode from "../../../../views/Elements/ComponentCode/ComponentCode.vue";
import BIMDataCheckbox from "../../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataTable from "../../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    ComponentCode,
    BIMDataCheckbox,
    BIMDataTable,
    BIMDataText,
  },
  data() {
    return {
      checkboxes: {
        "6px": [
          {
            class: "m-6",
            checked: true,
            text: "global margin",
            disabled: false,
          },
          {
            class: "m-y-6",
            checked: false,
            text: "vertical margin",
            disabled: false,
          },
          {
            class: "m-x-6",
            checked: false,
            text: "horizontal margin",
            disabled: false,
          },
          {
            class: "m-t-6",
            checked: false,
            text: "top margin",
            disabled: false,
          },
          {
            class: "m-b-6",
            checked: false,
            text: "bottom margin",
            disabled: false,
          },
          {
            class: "m-r-6",
            checked: false,
            text: "right margin",
            disabled: false,
          },
          {
            class: "m-l-6",
            checked: false,
            text: "left margin",
            disabled: false,
          },
        ],
        "12px": [
          {
            class: "m-12",
            checked: false,
            text: "global margin",
            disabled: false,
          },
          {
            class: "m-y-12",
            checked: false,
            text: "vertical margin",
            disabled: false,
          },
          {
            class: "m-x-12",
            checked: false,
            text: "horizontal margin",
            disabled: false,
          },
          {
            class: "m-t-12",
            checked: false,
            text: "top margin",
            disabled: false,
          },
          {
            class: "m-b-12",
            checked: false,
            text: "bottom margin",
            disabled: false,
          },
          {
            class: "m-r-12",
            checked: false,
            text: "right margin",
            disabled: false,
          },
          {
            class: "m-l-12",
            checked: false,
            text: "left margin",
            disabled: false,
          },
        ],
        "18px": [
          {
            class: "m-18",
            checked: false,
            text: "global margin",
            disabled: false,
          },
          {
            class: "m-y-18",
            checked: false,
            text: "vertical margin",
            disabled: false,
          },
          {
            class: "m-x-18",
            checked: false,
            text: "horizontal margin",
            disabled: false,
          },
          {
            class: "m-t-18",
            checked: false,
            text: "top margin",
            disabled: false,
          },
          {
            class: "m-b-18",
            checked: false,
            text: "bottom margin",
            disabled: false,
          },
          {
            class: "m-r-18",
            checked: false,
            text: "right margin",
            disabled: false,
          },
          {
            class: "m-l-18",
            checked: false,
            text: "left margin",
            disabled: false,
          },
        ],
        "24px": [
          {
            class: "m-24",
            checked: false,
            text: "global margin",
            disabled: false,
          },
          {
            class: "m-y-24",
            checked: false,
            text: "vertical margin",
            disabled: false,
          },
          {
            class: "m-x-24",
            checked: false,
            text: "horizontal margin",
            disabled: false,
          },
          {
            class: "m-t-24",
            checked: false,
            text: "top margin",
            disabled: false,
          },
          {
            class: "m-b-24",
            checked: false,
            text: "bottom margin",
            disabled: false,
          },
          {
            class: "m-r-24",
            checked: false,
            text: "right margin",
            disabled: false,
          },
          {
            class: "m-l-24",
            checked: false,
            text: "left margin",
            disabled: false,
          },
        ],
        "30px": [
          {
            class: "m-30",
            checked: false,
            text: "global margin",
            disabled: false,
          },
          {
            class: "m-y-30",
            checked: false,
            text: "vertical margin",
            disabled: false,
          },
          {
            class: "m-x-30",
            checked: false,
            text: "horizontal margin",
            disabled: false,
          },
          {
            class: "m-t-30",
            checked: false,
            text: "top margin",
            disabled: false,
          },
          {
            class: "m-b-30",
            checked: false,
            text: "bottom margin",
            disabled: false,
          },
          {
            class: "m-r-30",
            checked: false,
            text: "right margin",
            disabled: false,
          },
          {
            class: "m-l-30",
            checked: false,
            text: "left margin",
            disabled: false,
          },
        ],
        "36px": [
          {
            class: "m-36",
            checked: false,
            text: "global margin",
            disabled: false,
          },
          {
            class: "m-y-36",
            checked: false,
            text: "vertical margin",
            disabled: false,
          },
          {
            class: "m-x-36",
            checked: false,
            text: "horizontal margin",
            disabled: false,
          },
          {
            class: "m-t-36",
            checked: false,
            text: "top margin",
            disabled: false,
          },
          {
            class: "m-b-36",
            checked: false,
            text: "bottom margin",
            disabled: false,
          },
          {
            class: "m-r-36",
            checked: false,
            text: "right margin",
            disabled: false,
          },
          {
            class: "m-l-36",
            checked: false,
            text: "left margin",
            disabled: false,
          },
        ],
        "42px": [
          {
            class: "m-42",
            checked: false,
            text: "global margin",
            disabled: false,
          },
          {
            class: "m-y-42",
            checked: false,
            text: "vertical margin",
            disabled: false,
          },
          {
            class: "m-x-42",
            checked: false,
            text: "horizontal margin",
            disabled: false,
          },
          {
            class: "m-t-42",
            checked: false,
            text: "top margin",
            disabled: false,
          },
          {
            class: "m-b-42",
            checked: false,
            text: "bottom margin",
            disabled: false,
          },
          {
            class: "m-r-42",
            checked: false,
            text: "right margin",
            disabled: false,
          },
          {
            class: "m-l-42",
            checked: false,
            text: "left margin",
            disabled: false,
          },
        ],
        "48px": [
          {
            class: "m-48",
            checked: false,
            text: "global margin",
            disabled: false,
          },
          {
            class: "m-y-48",
            checked: false,
            text: "vertical margin",
            disabled: false,
          },
          {
            class: "m-x-48",
            checked: false,
            text: "horizontal margin",
            disabled: false,
          },
          {
            class: "m-t-48",
            checked: false,
            text: "top margin",
            disabled: false,
          },
          {
            class: "m-b-48",
            checked: false,
            text: "bottom margin",
            disabled: false,
          },
          {
            class: "m-r-48",
            checked: false,
            text: "right margin",
            disabled: false,
          },
          {
            class: "m-l-48",
            checked: false,
            text: "left margin",
            disabled: false,
          },
        ],
      },
      globalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "m-6",
          "margin: 6px;",
          "Adds 6px margin all the way around the element.",
        ],
        [
          "m-12",
          "margin: 12px;",
          "Adds 12px margin all the way around the element.",
        ],
        [
          "m-18",
          "margin: 18px;",
          "Adds 18px margin all the way around the element.",
        ],
        [
          "m-24",
          "margin: 24px;",
          "Adds 24px margin all the way around the element.",
        ],
      ],
      verticalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "m-y-6",
          "margin-top: 6px; margin-bottom: 6px;",
          "Adds 6px margin to both top and bottom.",
        ],
        ["m-t-6", "margin-top: 6px;", "Adds 6px margin to the top side."],
        ["m-b-6", "margin-bottom: 6px;", "Adds 6px margin to the bottom side."],
        [
          "m-y-12",
          "margin-top: 12px; margin-bottom: 12px;",
          "Adds 12px margin to both top and bottom.",
        ],
        ["m-t-12", "margin-top: 12px;", "Adds 12px margin to the top side."],
        [
          "m-b-12",
          "margin-bottom: 12px;",
          "Adds 12px margin to the bottom side.",
        ],
        [
          "m-y-18",
          "margin-top: 18px; margin-bottom: 18px;",
          "Adds 18px margin to both top and bottom.",
        ],
        ["m-t-18", "margin-top: 18px;", "Adds 18px margin to the top side."],
        [
          "m-b-18",
          "margin-bottom: 18px;",
          "Adds 18px margin to the bottom side.",
        ],
        [
          "m-y-24",
          "margin-top: 24px; margin-bottom: 24px;",
          "Adds 24px margin to both top and bottom.",
        ],
        ["m-t-24", "margin-top: 24px;", "Adds 24px margin to the top side."],
        [
          "m-b-24",
          "margin-bottom: 24px;",
          "Adds 24px margin to the bottom side.",
        ],
      ],
      horizontalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "m-x-6",
          "margin-left: 6px; margin-right: 6px;",
          "Adds 6px margin to both left and right.",
        ],
        ["m-l-6", "margin-left: 6px;", "Adds 6px margin to the left side."],
        ["m-r-6", "margin-right: 6px;", "Adds 6px margin to the right side."],
        [
          "m-x-12",
          "margin-left: 12px; margin-right: 12px;",
          "Adds 12px margin to both left and right.",
        ],
        ["m-l-12", "margin-left: 12px;", "Adds 12px margin to the left side."],
        ["m-r-12", "margin-right: 12px;", "Adds 6px margin to the right side."],
        [
          "m-x-18",
          "margin-left: 18px; margin-right: 18px;",
          "Adds 18px margin to both left and right.",
        ],
        ["m-l-18", "margin-left: 18px;", "Adds 18px margin to the left side."],
        [
          "m-r-18",
          "margin-right: 18px;",
          "Adds 18px margin to the right side.",
        ],
        [
          "m-x-24",
          "margin-left: 24px; margin-right: 24px;",
          "Adds 24px margin to both left and right.",
        ],
        ["m-l-24", "margin-left: 24px;", "Adds 24px margin to the left side."],
        [
          "m-r-24",
          "margin-right: 24px;",
          "Adds 24px margin to the right side.",
        ],
      ],
    };
  },
  methods: {
    getMarginClass() {
      return Object.values(this.checkboxes)
        .flat()
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.class);
    },
    getMarginText() {
      return this.getMarginClass().join(" ");
    },
  },
};
</script>

<style scoped lang="scss" src="./_Margin.scss"></style>
