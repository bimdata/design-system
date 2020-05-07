<template>
  <main class="article utilities-margin">
    <div class="article-wrapper">
      <h2 class="bimdata-h2"> {{ $route.name }} </h2>
      <p class="bimdata-text">All spacing is defined by a base value of 12 pixels. This value of 12 px is the basic unit of measurement for spacing.</p>
      <ComponentCode :componentTitle="$route.name">
        <template #module>
          <div class="ds-spacing">
            <div :class="getMarginClass()">
              <span>{{getMarginText()}}</span>
            </div>
          </div>
        </template>

        <template #parameters>
          <div v-for="[size, values] in Object.entries(checkboxes)" :key="size" >
            <h5 class="bimdata-h5" >{{ size }}</h5>
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
        </template>

        <template #code>
          <pre>
            &lt;div class="{{getMarginText()}}"&gt;
              content here
            &lt;/div&gt;
          </pre>
        </template>
      </ComponentCode>
      <div class="m-y-12">
        <h3 class="bimdata-h3">Class summary</h3>
        <div class="m-y-12">
          <h6 class="bimdata-h6">Global</h6>
          <BIMDataTable :rows="globalClassData"></BIMDataTable>
        </div>
        <div class="m-y-12">
          <h6 class="bimdata-h6">Top, Bottom, Vertical</h6>
          <BIMDataTable :rows="verticalClassData"></BIMDataTable>
        </div>
        <div class="m-y-12">
          <h6 class="bimdata-h6">Left, Right, Horizontal</h6>
          <BIMDataTable :rows="horizontalClassData"></BIMDataTable>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "@/design-system/views/Elements/ComponentCode/ComponentCode.vue";
import BIMDataCheckbox from "@/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

import BIMDataTable from "@/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

export default {
  components: {
    ComponentCode,
    BIMDataCheckbox,
    BIMDataTable
  },
  data() {
    return {
      checkboxes: {
        '6px': [
          {
            class: "m-6",
            checked: true,
            text: "global margin",
            disabled: false
          },
          {
            class: "m-y-6",
            checked: false,
            text: "vertical margin",
            disabled: false
          },
          {
            class: "m-x-6",
            checked: false,
            text: "horizontal margin",
            disabled: false
          },
          {
            class: "m-t-6",
            checked: false,
            text: "top margin",
            disabled: false
          },
          {
            class: "m-b-6",
            checked: false,
            text: "bottom margin",
            disabled: false
          },
          {
            class: "m-r-6",
            checked: false,
            text: "right margin",
            disabled: false
          },
          {
            class: "m-l-6",
            checked: false,
            text: "left margin",
            disabled: false
          }
        ],
        '12px': [
          {
            class: "m-12",
            checked: false,
            text: "global margin",
            disabled: false
          },
          {
            class: "m-y-12",
            checked: false,
            text: "vertical margin",
            disabled: false
          },
          {
            class: "m-x-12",
            checked: false,
            text: "horizontal margin",
            disabled: false
          },
          {
            class: "m-t-12",
            checked: false,
            text: "top margin",
            disabled: false
          },
          {
            class: "m-b-12",
            checked: false,
            text: "bottom margin",
            disabled: false
          },
          {
            class: "m-r-12",
            checked: false,
            text: "right margin",
            disabled: false
          },
          {
            class: "m-l-12",
            checked: false,
            text: "left margin",
            disabled: false
          }
        ],
        '18px': [
          {
            class: "m-18",
            checked: false,
            text: "global margin",
            disabled: false
          },
          {
            class: "m-y-18",
            checked: false,
            text: "vertical margin",
            disabled: false
          },
          {
            class: "m-x-18",
            checked: false,
            text: "horizontal margin",
            disabled: false
          },
          {
            class: "m-t-18",
            checked: false,
            text: "top margin",
            disabled: false
          },
          {
            class: "m-b-18",
            checked: false,
            text: "bottom margin",
            disabled: false
          },
          {
            class: "m-r-18",
            checked: false,
            text: "right margin",
            disabled: false
          },
          {
            class: "m-l-18",
            checked: false,
            text: "left margin",
            disabled: false
          }
        ],
        '24px': [
          {
            class: "m-24",
            checked: false,
            text: "global margin",
            disabled: false
          },
          {
            class: "m-y-24",
            checked: false,
            text: "vertical margin",
            disabled: false
          },
          {
            class: "m-x-24",
            checked: false,
            text: "horizontal margin",
            disabled: false
          },
          {
            class: "m-t-24",
            checked: false,
            text: "top margin",
            disabled: false
          },
          {
            class: "m-b-24",
            checked: false,
            text: "bottom margin",
            disabled: false
          },
          {
            class: "m-r-24",
            checked: false,
            text: "right margin",
            disabled: false
          },
          {
            class: "m-l-24",
            checked: false,
            text: "left margin",
            disabled: false
          }
        ]
       },
      globalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "m-6",
          "margin: 6px;",
          "Adds 6px margin all the way around the element."
        ],
        [
          "m-12",
          "margin: 12px;",
          "Adds 12px margin all the way around the element."
        ],
        [
          "m-18",
          "margin: 18px;",
          "Adds 18px margin all the way around the element."
        ],
        [
          "m-24",
          "margin: 24px;",
          "Adds 24px margin all the way around the element."
        ]
      ],
      verticalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "m-y-6",
          "margin-top: 6px; margin-bottom: 6px;",
          "Adds 6px margin to both top and bottom."
        ],
        [
          "m-t-6",
          "margin-top: 6px;",
          "Adds 6px margin to the top side."
        ],
        [
          "m-b-6",
          "margin-bottom: 6px;",
          "Adds 6px margin to the bottom side."
        ],
        [
          "m-y-12",
          "margin-top: 12px; margin-bottom: 12px;",
          "Adds 12px margin to both top and bottom."
        ],
        [
          "m-t-12",
          "margin-top: 12px;",
          "Adds 12px margin to the top side."
        ],
        [
          "m-b-12",
          "margin-bottom: 12px;",
          "Adds 12px margin to the bottom side."
        ],
        [
          "m-y-18",
          "margin-top: 18px; margin-bottom: 18px;",
          "Adds 18px margin to both top and bottom."
        ],
        [
          "m-t-18",
          "margin-top: 18px;",
          "Adds 18px margin to the top side."
        ],
        [
          "m-b-18",
          "margin-bottom: 18px;",
          "Adds 18px margin to the bottom side."
        ],
        [
          "m-y-24",
          "margin-top: 24px; margin-bottom: 24px;",
          "Adds 24px margin to both top and bottom."
        ],
        [
          "m-t-24",
          "margin-top: 24px;",
          "Adds 24px margin to the top side."
        ],
        [
          "m-b-24",
          "margin-bottom: 24px;",
          "Adds 24px margin to the bottom side."
        ]
      ],
      horizontalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "m-x-6",
          "margin-left: 6px; margin-right: 6px;",
          "Adds 6px margin to both left and right."
        ],
        [
          "m-l-6",
          "margin-left: 6px;",
          "Adds 6px margin to the left side."
        ],
        [
          "m-r-6",
          "margin-right: 6px;",
          "Adds 6px margin to the right side."
        ],
        [
          "m-x-12",
          "margin-left: 12px; margin-right: 12px;",
          "Adds 12px margin to both left and right."
        ],
        [
          "m-l-12",
          "margin-left: 12px;",
          "Adds 12px margin to the left side."
        ],
        [
          "m-r-12",
          "margin-right: 12px;",
          "Adds 6px margin to the right side."
        ],
        [
          "m-x-18",
          "margin-left: 18px; margin-right: 18px;",
          "Adds 18px margin to both left and right."
        ],
        [
          "m-l-18",
          "margin-left: 18px;",
          "Adds 18px margin to the left side."
        ],
        [
          "m-r-18",
          "margin-right: 18px;",
          "Adds 18px margin to the right side."
        ],
        [
          "m-x-24",
          "margin-left: 24px; margin-right: 24px;",
          "Adds 24px margin to both left and right."
        ],
        [
          "m-l-24",
          "margin-left: 24px;",
          "Adds 24px margin to the left side."
        ],
        [
          "m-r-24",
          "margin-right: 24px;",
          "Adds 24px margin to the right side."
        ]
      ]
    }
  },
  methods: {
    getMarginClass() {
      return Object.values(this.checkboxes).flat().filter(checkbox => checkbox.checked).map(checkbox => checkbox.class);
    },
    getMarginText() {
      return this.getMarginClass().join(" ");
    }
  }
}
</script>

<style lang="scss" scoped>
  // import BIMDATA COMPONENT VARIABLES
  @import "@/assets/scss/_BIMDataVariables.scss";

  // import BIMDATA COMPONENT UTILITIES
  @import "@/assets/scss/utilities/_text.scss";
  @import "@/assets/scss/utilities/_spacing.scss";

  // import COMPONENT STYLE
  @import "./_Margin.scss";
</style>