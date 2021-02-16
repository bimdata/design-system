<template>
  <main class="article article-dropdown">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <!-- bloc INTERACTIVE PLAYGROUND - left side -->
        <template #module>
          <BIMDataDropdownMenu
            :disabled="checkboxDisabledChecked"
            :transitionName="selectedDropdownOptionstransition"
            :directionClass="selectedDropdownOptionsdirection"
          >
            <template #header v-if="checkboxHeaderChecked">
              <span>dropdown menu example</span>
            </template>
            <template #contentAfterHeader v-if="checkboxAfterHeaderChecked">
              hi
            </template>
            <template #element v-if="checkboxElementSlotChecked">
              <ul class="bimdata-list">
                <li v-for="element of list" :key="element">{{ element }}</li>
              </ul>
            </template>
          </BIMDataDropdownMenu>
        </template>

        <!-- bloc PARAMETERS - right side -->
        <template #parameters>
          <h5 class="bimdata-h5">modifiers</h5>
          <BIMDataCheckbox
            class="m-y-12"
            text="disabled"
            v-model="checkboxDisabledChecked"
          >
          </BIMDataCheckbox>
          <div
            v-for="[key, values] in Object.entries(dropdownOptions)"
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
              v-model="$data[`selectedDropdownOptions${key}`]"
            >
            </BIMDataRadio>
          </div>
          <h5 class="bimdata-h5">slots</h5>
          <BIMDataCheckbox text="header" v-model="checkboxHeaderChecked">
          </BIMDataCheckbox>
          <BIMDataCheckbox
            text="contentAfterHeader"
            v-model="checkboxAfterHeaderChecked"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox text="element" v-model="checkboxElementSlotChecked">
          </BIMDataCheckbox>
        </template>

        <!-- bloc IMPORTS LINES CODE -->
        <template #import>
          import BIMDataDropdownMenu from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataDropdownMenu.js";
        </template>
        <template #code>
          <pre>
            &lt;BIMDataDropdownMenu
              :disabled="{{ checkboxDisabledChecked }}"
            &gt;
              {{ getHeader() }} {{ getContentAfterBtn() }} {{ getElement() }}
            &lt;/BIMDataDropdownMenu&gt;
          </pre>
        </template>
      </ComponentCode>

      <!-- bloc DOCUMENTATION -->
      <div class="m-t-24">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>

      <div class="m-t-24">
        <h5 class="bimdata-h5">Slots:</h5>
        <BIMDataTable :rows="slotData"></BIMDataTable>
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataIcon from "../../../../../src/BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";

import BIMDataDropdownMenu from "../../../../../src/BIMDataComponents/BIMDataDropdownMenu/BIMDataDropdownMenu.vue";
export default {
  components: {
    ComponentCode,
    BIMDataCheckbox,
    BIMDataRadio,
    BIMDataTable,
    BIMDataIcon,
    BIMDataDropdownMenu,
  },
  data() {
    return {
      checkboxDisabledChecked: false,
      checkboxHeaderChecked: true,
      checkboxAfterHeaderChecked: false,
      checkboxElementSlotChecked: false,
      customListCheckbox: false,
      dropdownOptions: {
        transition: ["up", "down"],
        direction: ["up", "down", "right", "left"],
      },
      selectedDropdownOptionstransition: "up",
      selectedDropdownOptionsdirection: "down",
      list: ["item 01", "item 02", "item 03", "item 04", "item 05", "item 06"],
      propsData: [
        ["Props", "Type", "Default value", "Validator", "Description"],
        ["disabled", "Boolean", "false", "", ""],
        [
          "transitionName",
          "String",
          "'up'",
          "'up' or 'down' values",
          "Use this props to choose the opening transition of the submenu",
        ],
        [
          "directionClass",
          "String",
          "'down'",
          "'up', 'down', 'right' or 'left' values",
          "Use this props to choose the opening of the submenu.",
        ],
        [
          "width",
          "String",
          "220px",
          "",
          "Use this props to custom width of BIMDataDropdownList component.",
        ],
        [
          "height",
          "String",
          "36px",
          "",
          "Use this props to custom height of BIMDataDropdownList component.",
        ],
      ],
      slotData: [
        ["Slot name", "Description"],
        ["#header", "Use this slot for add content "],
        [
          "#contentAfterHeader",
          "Use this slot for add content after the header slot",
        ],
        ["#element", "Use this slot to custom dropdown menu element content. You can put a list like the example above, or any other element or component of your choice."],
      ],
    };
  },
  methods: {
    getHeader() {
      if (this.checkboxHeaderChecked) {
        return `<template #header>
              dropdown menu example
            </template>
            `;
      }
    },
    getContentAfterBtn() {
      if (this.checkboxAfterHeaderChecked) {
        return `<template #contentAfterHeader>
              hi
            </template>
            `;
      }
    },
    getElement() {
      if (this.checkboxElementSlotChecked) {
        return `<template #element>
              <ul class="bimdata-list">
                <li v-for="element of list" :key="element">{{element}}</li>
              </ul>
            </template>
            `;
      }
    },
  },
};
</script>