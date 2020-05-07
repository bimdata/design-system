<template>
  <main class="article utilities-padding">
    <div class="article-wrapper">
      <h2 class="bimdata-h2"> {{ $route.name }} </h2>
      <p class="bimdata-text">All spacing is defined by a base value of 12 pixels. This value of 12 px is the basic unit of measurement for spacing.</p>
      <ComponentCode :componentTitle="$route.name">
        <template #module>
          <div class="ds-spacing">
            <div class="ds-spacing__padding" :class="getPaddingClass()">
              <span>{{getPaddingText()}}</span>
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
            &lt;div class="{{getPaddingText()}}"&gt;
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
            class: "p-6",
            checked: true,
            text: "global padding"
          },
          {
            class: "p-y-6",
            checked: false,
            text: "vertical padding"
          },
          {
            class: "p-x-6",
            checked: false,
            text: "horizontal padding"
          },
          {
            class: "p-t-6",
            checked: false,
            text: "top padding"
          },
          {
            class: "p-b-6",
            checked: false,
            text: "bottom padding"
          },
          {
            class: "p-r-6",
            checked: false,
            text: "right padding"
          },
          {
            class: "p-l-6",
            checked: false,
            text: "left padding"
          }
        ],
        '12px': [
          {
            class: "p-12",
            checked: false,
            text: "global padding"
          },
          {
            class: "p-y-12",
            checked: false,
            text: "vertical padding"
          },
          {
            class: "p-x-12",
            checked: false,
            text: "horizontal padding"
          },
          {
            class: "p-t-12",
            checked: false,
            text: "top padding"
          },
          {
            class: "p-b-12",
            checked: false,
            text: "bottom padding"
          },
          {
            class: "p-r-12",
            checked: false,
            text: "right padding"
          },
          {
            class: "p-l-12",
            checked: false,
            text: "left padding"
          }
        ],
        '18px': [
          {
            class: "p-18",
            checked: false,
            text: "global padding"
          },
          {
            class: "p-y-18",
            checked: false,
            text: "vertical padding"
          },
          {
            class: "p-x-18",
            checked: false,
            text: "horizontal padding"
          },
          {
            class: "p-t-18",
            checked: false,
            text: "top padding"
          },
          {
            class: "p-b-18",
            checked: false,
            text: "bottom padding"
          },
          {
            class: "p-r-18",
            checked: false,
            text: "right padding"
          },
          {
            class: "p-l-18",
            checked: false,
            text: "left padding"
          }
        ],
        '24px': [
          {
            class: "p-24",
            checked: false,
            text: "global padding"
          },
          {
            class: "p-y-24",
            checked: false,
            text: "vertical padding"
          },
          {
            class: "p-x-24",
            checked: false,
            text: "horizontal padding"
          },
          {
            class: "p-t-24",
            checked: false,
            text: "top padding"
          },
          {
            class: "p-b-24",
            checked: false,
            text: "bottom padding"
          },
          {
            class: "p-r-24",
            checked: false,
            text: "right padding"
          },
          {
            class: "p-l-24",
            checked: false,
            text: "left padding"
          }
        ]
       },
      globalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "p-6",
          "padding: 6px;",
          "Adds 6px padding all the way around the element."
        ],
        [
          "p-12",
          "padding: 12px;",
          "Adds 12px padding all the way around the element."
        ],
        [
          "p-18",
          "padding: 18px;",
          "Adds 18px padding all the way around the element."
        ],
        [
          "p-24",
          "padding: 24px;",
          "Adds 24px padding all the way around the element."
        ]
      ],
      verticalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "p-y-6",
          "padding-top: 6px; padding-bottom: 6px;",
          "Adds 6px padding to both top and bottom."
        ],
        [
          "p-t-6",
          "padding-top: 6px;",
          "Adds 6px padding to the top side."
        ],
        [
          "p-b-6",
          "padding-bottom: 6px;",
          "Adds 6px padding to the bottom side."
        ],
        [
          "p-y-12",
          "padding-top: 12px; padding-bottom: 12px;",
          "Adds 12px padding to both top and bottom."
        ],
        [
          "p-t-12",
          "padding-top: 12px;",
          "Adds 12px padding to the top side."
        ],
        [
          "p-b-12",
          "padding-bottom: 12px;",
          "Adds 12px padding to the bottom side."
        ],
        [
          "p-y-18",
          "padding-top: 18px; padding-bottom: 18px;",
          "Adds 18px padding to both top and bottom."
        ],
        [
          "p-t-18",
          "padding-top: 18px;",
          "Adds 18px padding to the top side."
        ],
        [
          "p-b-18",
          "padding-bottom: 18px;",
          "Adds 18px padding to the bottom side."
        ],
        [
          "p-y-24",
          "padding-top: 24px; padding-bottom: 24px;",
          "Adds 24px padding to both top and bottom."
        ],
        [
          "p-t-24",
          "padding-top: 24px;",
          "Adds 24px padding to the top side."
        ],
        [
          "p-b-24",
          "padding-bottom: 24px;",
          "Adds 24px padding to the bottom side."
        ]
      ],
      horizontalClassData: [
        ["Class Name", "Output value", "Description"],
        [
          "p-x-6",
          "padding-left: 6px; padding-right: 6px;",
          "Adds 6px padding to both left and right."
        ],
        [
          "p-l-6",
          "padding-left: 6px;",
          "Adds 6px padding to the left side."
        ],
        [
          "p-r-6",
          "padding-right: 6px;",
          "Adds 6px padding to the right side."
        ],
        [
          "p-x-12",
          "padding-left: 12px; padding-right: 12px;",
          "Adds 12px padding to both left and right."
        ],
        [
          "p-l-12",
          "padding-left: 12px;",
          "Adds 12px padding to the left side."
        ],
        [
          "p-r-12",
          "padding-right: 12px;",
          "Adds 12px padding to the right side."
        ],
        [
          "p-x-18",
          "padding-left: 18px; padding-right: 18px;",
          "Adds 18px padding to both left and right."
        ],
        [
          "p-l-18",
          "padding-left: 18px;",
          "Adds 18px padding to the left side."
        ],
        [
          "p-r-18",
          "padding-right: 18px;",
          "Adds 18px padding to the right side."
        ],
        [
          "p-x-24",
          "padding-left: 24px; padding-right: 24px;",
          "Adds 24px padding to both left and right."
        ],
        [
          "p-l-24",
          "padding-left: 24px;",
          "Adds 24px padding to the left side."
        ],
        [
          "p-r-24",
          "padding-right: 24px;",
          "Adds 24px padding to the right side."
        ]
      ]
    }
  },
  methods: {
    getPaddingClass() {
      return Object.values(this.checkboxes).flat().filter(checkbox => checkbox.checked).map(checkbox => checkbox.class)
    },
    getPaddingText() {
      return this.getPaddingClass().join(" ");
    }
  }
}
</script>

  // import BIMDATA COMPONENT VARIABLES
  @import "@/assets/scss/_BIMDataVariables.scss";

  // import BIMDATA COMPONENT UTILITIES
  @import "@/assets/scss/utilities/_text.scss";
  @import "@/assets/scss/utilities/_spacing.scss";

  // import COMPONENT STYLE
  @import "./_Padding.scss";
</style>