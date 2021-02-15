<template>
  <main class="article article-dropdown">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">

        <!-- bloc INTERACTIVE PLAYGROUND - left side -->
        <template #module>
          <BIMDataDropdown
            :list="list"
            :disabled="checkboxDisabledChecked"
            :transitionName="selectedDropdownOptionstransition"
            :directionClass="selectedDropdownOptionsdirection"
          >
            <template #header v-if="checkboxHeaderChecked">
              <span>dropdown example</span>
            </template>
            <template #contentAfterBtn v-if="checkboxAfterBtnChecked">
              hi
            </template>
          </BIMDataDropdown>
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
            text="contentAfterBtn"
            v-model="checkboxAfterBtnChecked"
          >
          </BIMDataCheckbox>
        </template>

        <!-- bloc IMPORTS LINES CODE -->
        <template #import>
          import BIMDataDropdown from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataDropdown.js";
        </template>
        <template #code>
          <pre>
            &lt;BIMDataDropdown
              :list="list"
              elementKey="dropdown"
              :disabled="{{ checkboxDisabledChecked }}"
            &gt;
              {{ getHeader() }} {{ getContentAfterBtn() }}
            &lt;/BIMDataDropdown&gt;
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

import BIMDataDropdown from "../../../../../src/BIMDataComponents/BIMDataDropdown/BIMDataDropdown.vue";
export default {
  components: {
    ComponentCode,
    BIMDataCheckbox,
    BIMDataRadio,
    BIMDataTable,
    BIMDataIcon,
    BIMDataDropdown,
  },
  data() {
    return {
      checkboxDisabledChecked: false,
      checkboxHeaderChecked: true,
      checkboxAfterBtnChecked: false,
      customListCheckbox: false,
      dropdownOptions: {
        transition: ["up", "down"],
        direction: ["up", "down", "right", "left"],
      },
      selectedDropdownOptionstransition: "up",
      selectedDropdownOptionsdirection: "down",
      list: [
        "item 01",
        "item 02",
        "item 03",
        "item 04",
        "item 05",
        "item 06",
      ],
      propsData: [
        ["Props", "Type", "Default value", "Validator", "Description"],
        ["list", "Array", "() => []", "", ""],
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
        ["#header", "Use this slot for add content before the icon button"],
        [
          "#contentAfterBtn",
          "Use this slot for add content after the icon button",
        ],
        ["#element", "Use this slot to custum the elements list"],
      ],
    };
  },
  methods: {
    getHeader() {
      if (this.checkboxHeaderChecked) {
        return `<template #header>
              dropdown list example
            </template>
            `;
      }
    },
    getContentAfterBtn() {
      if (this.checkboxAfterBtnChecked) {
        return `<template #contentAfterBtn>
              hi
            </template>
            `;
      }
    },
  },
};
</script>
