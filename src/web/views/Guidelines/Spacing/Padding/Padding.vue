<template>
  <div class="spacing-system__padding">
    <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">Padding</BIMDataText>
    <ComponentCode componentTitle="Padding">
      <template #module>
        <div class="ds-spacing">
          <div class="ds-spacing__padding" :class="getPaddingClass()">
            <span>{{ getPaddingText() }}</span>
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
            >
              {{ size }}
            </BIMDataText>
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
          &lt;div class="{{ getPaddingText() }}"&gt;
            content here
          &lt;/div&gt;
        </pre>
      </template>
    </ComponentCode>

    <div class="m-y-12">
      <BIMDataText component="h3" color="color-primary" margin="15px 0 10px">
        Class summary
      </BIMDataText>
      <div class="m-y-12">
        <BIMDataText component="h6" color="color-primary" margin="15px 0 10px">
          Global
        </BIMDataText>
        <BIMDataTable
          :rowHeight="36"
          :columns="globalClassData[0]"
          :rows="globalClassData.slice(1)"
        />
      </div>
      <div class="m-y-12">
        <BIMDataText component="h3" color="color-primary" margin="15px 0 10px">
          Top, Bottom, Vertical
        </BIMDataText>
        <BIMDataTable
          :rowHeight="36"
          :columns="verticalClassData[0]"
          :rows="verticalClassData.slice(1)"
        />
      </div>
      <div class="m-y-12">
        <BIMDataText component="h3" color="color-primary" margin="15px 0 10px">
          Left, Right, Horizontal
        </BIMDataText>
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
import BIMDataCheckbox from "../../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataTable from "../../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import ComponentCode from "../../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataCheckbox,
    BIMDataTable,
    BIMDataText,
    ComponentCode,
  },
  data() {
    return {
      checkboxes: {
        "6px": [
          {
            class: "p-6",
            checked: true,
            text: "global padding",
          },
          {
            class: "p-y-6",
            checked: false,
            text: "vertical padding",
          },
          {
            class: "p-x-6",
            checked: false,
            text: "horizontal padding",
          },
          {
            class: "p-t-6",
            checked: false,
            text: "top padding",
          },
          {
            class: "p-b-6",
            checked: false,
            text: "bottom padding",
          },
          {
            class: "p-r-6",
            checked: false,
            text: "right padding",
          },
          {
            class: "p-l-6",
            checked: false,
            text: "left padding",
          },
        ],
        "12px": [
          {
            class: "p-12",
            checked: false,
            text: "global padding",
          },
          {
            class: "p-y-12",
            checked: false,
            text: "vertical padding",
          },
          {
            class: "p-x-12",
            checked: false,
            text: "horizontal padding",
          },
          {
            class: "p-t-12",
            checked: false,
            text: "top padding",
          },
          {
            class: "p-b-12",
            checked: false,
            text: "bottom padding",
          },
          {
            class: "p-r-12",
            checked: false,
            text: "right padding",
          },
          {
            class: "p-l-12",
            checked: false,
            text: "left padding",
          },
        ],
        "18px": [
          {
            class: "p-18",
            checked: false,
            text: "global padding",
          },
          {
            class: "p-y-18",
            checked: false,
            text: "vertical padding",
          },
          {
            class: "p-x-18",
            checked: false,
            text: "horizontal padding",
          },
          {
            class: "p-t-18",
            checked: false,
            text: "top padding",
          },
          {
            class: "p-b-18",
            checked: false,
            text: "bottom padding",
          },
          {
            class: "p-r-18",
            checked: false,
            text: "right padding",
          },
          {
            class: "p-l-18",
            checked: false,
            text: "left padding",
          },
        ],
        "24px": [
          {
            class: "p-24",
            checked: false,
            text: "global padding",
          },
          {
            class: "p-y-24",
            checked: false,
            text: "vertical padding",
          },
          {
            class: "p-x-24",
            checked: false,
            text: "horizontal padding",
          },
          {
            class: "p-t-24",
            checked: false,
            text: "top padding",
          },
          {
            class: "p-b-24",
            checked: false,
            text: "bottom padding",
          },
          {
            class: "p-r-24",
            checked: false,
            text: "right padding",
          },
          {
            class: "p-l-24",
            checked: false,
            text: "left padding",
          },
        ],
        "30px": [
          {
            class: "p-30",
            checked: true,
            text: "global padding",
          },
          {
            class: "p-y-30",
            checked: false,
            text: "vertical padding",
          },
          {
            class: "p-x-30",
            checked: false,
            text: "horizontal padding",
          },
          {
            class: "p-t-30",
            checked: false,
            text: "top padding",
          },
          {
            class: "p-b-30",
            checked: false,
            text: "bottom padding",
          },
          {
            class: "p-r-30",
            checked: false,
            text: "right padding",
          },
          {
            class: "p-l-30",
            checked: false,
            text: "left padding",
          },
        ],
        "36px": [
          {
            class: "p-36",
            checked: false,
            text: "global padding",
          },
          {
            class: "p-y-36",
            checked: false,
            text: "vertical padding",
          },
          {
            class: "p-x-36",
            checked: false,
            text: "horizontal padding",
          },
          {
            class: "p-t-36",
            checked: false,
            text: "top padding",
          },
          {
            class: "p-b-36",
            checked: false,
            text: "bottom padding",
          },
          {
            class: "p-r-36",
            checked: false,
            text: "right padding",
          },
          {
            class: "p-l-36",
            checked: false,
            text: "left padding",
          },
        ],
        "42px": [
          {
            class: "p-42",
            checked: false,
            text: "global padding",
          },
          {
            class: "p-y-42",
            checked: false,
            text: "vertical padding",
          },
          {
            class: "p-x-42",
            checked: false,
            text: "horizontal padding",
          },
          {
            class: "p-t-42",
            checked: false,
            text: "top padding",
          },
          {
            class: "p-b-42",
            checked: false,
            text: "bottom padding",
          },
          {
            class: "p-r-42",
            checked: false,
            text: "right padding",
          },
          {
            class: "p-l-42",
            checked: false,
            text: "left padding",
          },
        ],
        "48px": [
          {
            class: "p-48",
            checked: false,
            text: "global padding",
          },
          {
            class: "p-y-48",
            checked: false,
            text: "vertical padding",
          },
          {
            class: "p-x-48",
            checked: false,
            text: "horizontal padding",
          },
          {
            class: "p-t-48",
            checked: false,
            text: "top padding",
          },
          {
            class: "p-b-48",
            checked: false,
            text: "bottom padding",
          },
          {
            class: "p-r-48",
            checked: false,
            text: "right padding",
          },
          {
            class: "p-l-48",
            checked: false,
            text: "left padding",
          },
        ],
      },
      globalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "p-6",
          "padding: 6px;",
          "Adds 6px padding all the way around the element.",
        ],
        [
          "p-12",
          "padding: 12px;",
          "Adds 12px padding all the way around the element.",
        ],
        [
          "p-18",
          "padding: 18px;",
          "Adds 18px padding all the way around the element.",
        ],
        [
          "p-24",
          "padding: 24px;",
          "Adds 24px padding all the way around the element.",
        ],
      ],
      verticalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "p-y-6",
          "padding-top: 6px; padding-bottom: 6px;",
          "Adds 6px padding to both top and bottom.",
        ],
        ["p-t-6", "padding-top: 6px;", "Adds 6px padding to the top side."],
        [
          "p-b-6",
          "padding-bottom: 6px;",
          "Adds 6px padding to the bottom side.",
        ],
        [
          "p-y-12",
          "padding-top: 12px; padding-bottom: 12px;",
          "Adds 12px padding to both top and bottom.",
        ],
        ["p-t-12", "padding-top: 12px;", "Adds 12px padding to the top side."],
        [
          "p-b-12",
          "padding-bottom: 12px;",
          "Adds 12px padding to the bottom side.",
        ],
        [
          "p-y-18",
          "padding-top: 18px; padding-bottom: 18px;",
          "Adds 18px padding to both top and bottom.",
        ],
        ["p-t-18", "padding-top: 18px;", "Adds 18px padding to the top side."],
        [
          "p-b-18",
          "padding-bottom: 18px;",
          "Adds 18px padding to the bottom side.",
        ],
        [
          "p-y-24",
          "padding-top: 24px; padding-bottom: 24px;",
          "Adds 24px padding to both top and bottom.",
        ],
        ["p-t-24", "padding-top: 24px;", "Adds 24px padding to the top side."],
        [
          "p-b-24",
          "padding-bottom: 24px;",
          "Adds 24px padding to the bottom side.",
        ],
      ],
      horizontalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "p-x-6",
          "padding-left: 6px; padding-right: 6px;",
          "Adds 6px padding to both left and right.",
        ],
        ["p-l-6", "padding-left: 6px;", "Adds 6px padding to the left side."],
        ["p-r-6", "padding-right: 6px;", "Adds 6px padding to the right side."],
        [
          "p-x-12",
          "padding-left: 12px; padding-right: 12px;",
          "Adds 12px padding to both left and right.",
        ],
        [
          "p-l-12",
          "padding-left: 12px;",
          "Adds 12px padding to the left side.",
        ],
        [
          "p-r-12",
          "padding-right: 12px;",
          "Adds 12px padding to the right side.",
        ],
        [
          "p-x-18",
          "padding-left: 18px; padding-right: 18px;",
          "Adds 18px padding to both left and right.",
        ],
        [
          "p-l-18",
          "padding-left: 18px;",
          "Adds 18px padding to the left side.",
        ],
        [
          "p-r-18",
          "padding-right: 18px;",
          "Adds 18px padding to the right side.",
        ],
        [
          "p-x-24",
          "padding-left: 24px; padding-right: 24px;",
          "Adds 24px padding to both left and right.",
        ],
        [
          "p-l-24",
          "padding-left: 24px;",
          "Adds 24px padding to the left side.",
        ],
        [
          "p-r-24",
          "padding-right: 24px;",
          "Adds 24px padding to the right side.",
        ],
      ],
    };
  },
  methods: {
    getPaddingClass() {
      return Object.values(this.checkboxes)
        .flat()
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.class);
    },
    getPaddingText() {
      return this.getPaddingClass().join(" ");
    },
  },
};
</script>

<style scoped lang="scss" src="./_Padding.scss"></style>
