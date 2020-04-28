<template>
  <main class="article utilities-margin">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <p>All spacing is defined by a base value of 12 pixels. This value of 12 px is the basic unit of measurement for spacing.</p>
      <ComponentCode :componentTitle="$route.name">
        <template #module>
          <div class="ds-spacing">
            <div :class="getMarginClass()">
              <span>{{getMarginText()}}</span>
            </div>
          </div>
        </template>

        <template #parameters>
          <template v-for="checkbox of checkboxes">
            <BIMDataCheckbox
              :text="checkbox.text"
              v-model="checkbox.checked"
              :key="checkbox.text"
              class="m-y-6"
            >
            </BIMDataCheckbox>
          </template>
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
        <h3>Class summary</h3>
        <div class="m-y-12">
          <h6>Global</h6>
          <BIMDataTable :rows="globalClassData"></BIMDataTable>
        </div>
        <div class="m-y-12">
          <h6>Top, Bottom, Vertical</h6>
          <BIMDataTable :rows="verticalClassData"></BIMDataTable>
        </div>
        <div class="m-y-12">
          <h6>Left, Right, Horizontal</h6>
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
      checkboxes: [
        {
          class: "m-6",
          checked: true,
          text: "global 6px margin"
        },
        {
          class: "m-y-6",
          checked: false,
          text: "vertical 6px margin"
        },
        {
          class: "m-x-6",
          checked: false,
          text: "horizontal 6px margin"
        },
        {
          class: "m-t-6",
          checked: false,
          text: "margin top 6px"
        },
        {
          class: "m-b-6",
          checked: false,
          text: "margin bottom 6px"
        },
        {
          class: "m-l-6",
          checked: false,
          text: "margin left 6px"
        },
        {
          class: "m-r-6",
          checked: false,
          text: "margin right 6px"
        },
        {
          class: "m-12",
          checked: false,
          text: "global 12px margin"
        },
        {
          class: "m-y-12",
          checked: false,
          text: "vertical 12px margin"
        },
        {
          class: "m-x-12",
          checked: false,
          text: "horizontal 12px margin"
        },
        {
          class: "m-t-12",
          checked: false,
          text: "margin top 12px"
        },
        {
          class: "m-b-12",
          checked: false,
          text: "margin bottom 12px"
        },
        {
          class: "m-l-12",
          checked: false,
          text: "margin left 12px"
        },
        {
          class: "m-r-12",
          checked: false,
          text: "margin right 12px"
        }
      ],
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
        ]
      ],
      verticalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "m-y-6",
          "margin: 6px 0;",
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
          "margin: 12px 0;",
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
          "Adds 6px margin to the bottom side."
        ]
      ],
      horizontalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "m-x-6",
          "margin: 0 6px;",
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
          "margin: 0 12px;",
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
        ]
      ]
    }
  },
  methods: {
    getMarginClass() {
      return this.checkboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.class);
    },
    getMarginText() {
      return this.getMarginClass().join(" ");
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_Margin.scss";
</style>