<template>
  <main class="article article-dropdown">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode componentTitle="DropdownMenu" language="javascript">
        <!-- bloc INTERACTIVE PLAYGROUND - left side -->
        <template #module>
          <BIMDataDropdownMenu
            :disabled="checkboxDisabledChecked"
            :transitionName="selectedDropdownOptionstransition"
            :directionClass="selectedDropdownOptionsdirection"
            :menuItems="checkboxTwoLevelChecked ? multiLevelList : []"
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
          <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
            >modifiers</BIMDataText
          >
          <BIMDataCheckbox
            class="m-y-12"
            text="disabled"
            v-model="checkboxDisabledChecked"
          >
          </BIMDataCheckbox>
          <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
            >two level list</BIMDataText
          >
          <BIMDataCheckbox
            class="m-y-12"
            text="content"
            v-model="checkboxTwoLevelChecked"
          >
          </BIMDataCheckbox>

          <div
            v-for="[key, values] in Object.entries(dropdownOptions)"
            :key="key"
          >
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >{{ key }}</BIMDataText
            >
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
          <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
            >slots</BIMDataText
          >
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
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Props:</BIMDataText
        >
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-24">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Slots:</BIMDataText
        >
        <BIMDataTable :columns="slotData[0]" :rows="slotData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

import BIMDataDropdownMenu from "../../../../../src/BIMDataComponents/BIMDataDropdownMenu/BIMDataDropdownMenu.vue";
export default {
  components: {
    ComponentCode,
    BIMDataCheckbox,
    BIMDataRadio,
    BIMDataTable,
    BIMDataText,
    BIMDataDropdownMenu,
  },
  data() {
    return {
      checkboxDisabledChecked: false,
      checkboxTwoLevelChecked: false,
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
      multiLevelList: [
        {
          name: "project1",
          children: [
            { name: "project1.1" },
            { name: "project1.2" },
            { name: "project1.3" },
          ],
        },
        { name: "project2" },
        {
          name: "project3",
          children: [
            {
              name: "project3.1",
              action: () => console.log("im clicked"),
            },
            { name: "project3.2" },
          ],
        },
      ],
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
        [
          "menuItems",
          "Array",
          "[]",
          "",
          "Use this props to add content with two level of nesting",
        ],
        [
          "subListMaxHeight",
          "String",
          "auto",
          "",
          "Use this props to define the sub-list maximum length",
        ],
      ],
      slotData: [
        ["Slot name", "Description"],
        ["header", "Use this slot for add content "],
        [
          "contentAfterHeader",
          "Use this slot for add content after the header slot",
        ],
        [
          "element",
          "Use this slot to custom dropdown menu element content. You can put a list like the example above, or any other element or component of your choice.",
        ],
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
