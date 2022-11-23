<template>
  <main class="article article-dropdown">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode componentTitle="DropdownList" language="javascript">
        <!-- bloc INTERACTIVE PLAYGROUND - left side -->
        <template #module>
          <BIMDataDropdownList
            :list="list"
            :perPage="Number(numberInput)"
            elementKey="dropdown"
            :disabled="checkboxDisabledChecked"
            :transitionName="selectedDropdownOptionstransition"
            :directionClass="selectedDropdownOptionsdirection"
            :loading="checkboxLoadingChecked"
            :closeOnElementClick="checkboxCloseOnElementClickChecked"
            @element-click="onItemClick"
          >
            <template #header v-if="checkboxHeaderChecked">
              <span v-if="selectedItem">{{ item }}</span>
              <span v-else>dropdown list example</span>
            </template>
            <template #contentAfterBtn v-if="checkboxAfterBtnChecked">
              hi
            </template>
            <template #element="{ element }" v-if="checkboxElementChecked">
              <div class="flex items-center">
                <BIMDataIcon
                  name="chevron"
                  size="xxxs"
                  class="fill-primary"
                  margin="0 6px 0 0"
                />
                {{ element }}
              </div>
            </template>
          </BIMDataDropdownList>
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
          <BIMDataCheckbox
            class="m-y-12"
            text="loading"
            v-model="checkboxLoadingChecked"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            class="m-t-12 m-b-24"
            text="close on element click"
            v-model="checkboxCloseOnElementClickChecked"
          >
          </BIMDataCheckbox>
          <BIMDataInput
            v-model="numberInput"
            placeholder="Number of items per page"
            type="number"
          ></BIMDataInput>
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
            text="contentAfterBtn"
            v-model="checkboxAfterBtnChecked"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox text="element" v-model="checkboxElementChecked">
          </BIMDataCheckbox>
        </template>

        <!-- bloc IMPORTS LINES CODE -->
        <template #import>
          import BIMDataDropdownList from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataDropdownList.js";
        </template>
        <template #code>
          <pre>
            &lt;BIMDataDropdownList
              :list="list"
              :perPage="{{ numberInput }}"
              elementKey="dropdown"
              :disabled="{{ checkboxDisabledChecked }}"
              :closeOnElementClick="{{ checkboxCloseOnElementClickChecked }}"
            &gt;
              {{ getHeader() }} {{ getContentAfterBtn() }} {{ getElement() }}
            &lt;/BIMDataDropdownList&gt;
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

      <div class="m-t-24">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Events:</BIMDataText
        >
        <BIMDataTable :columns="eventData[0]" :rows="eventData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataIcon from "../../../../../src/BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

import BIMDataDropdownList from "../../../../../src/BIMDataComponents/BIMDataDropdownList/BIMDataDropdownList.vue";
export default {
  components: {
    ComponentCode,
    BIMDataInput,
    BIMDataCheckbox,
    BIMDataRadio,
    BIMDataTable,
    BIMDataIcon,
    BIMDataDropdownList,
    BIMDataText,
  },
  data() {
    return {
      selectedItem: null,
      numberInput: 6,
      checkboxDisabledChecked: false,
      checkboxLoadingChecked: false,
      checkboxCloseOnElementClickChecked: false,
      checkboxHeaderChecked: true,
      checkboxAfterBtnChecked: false,
      checkboxElementChecked: false,
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
        "item 07",
        "item 08",
        "item 09",
        "item 10",
        "item 11",
        "item 12",
      ],
      propsData: [
        ["Props", "Type", "Default value", "Validator", "Description"],
        ["list", "Array", "() => []", "", ""],
        [
          "perPage",
          "Number",
          "10",
          "",
          "Use this props to choose the number of elements per page, before displaying the pagination.",
        ],
        ["elementKey", "String", "", "", ""],
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
          "loading",
          "Boolean",
          "false",
          "",
          "Use this props when it's loading.",
        ],
        [
          "closeOnElementClick",
          "Boolean",
          "false",
          "",
          "Use this props to close the dropdown submenu when clicking on the item.",
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
        ["header", "Use this slot for add content before the icon button"],
        [
          "contentAfterBtn",
          "Use this slot for add content after the icon button",
        ],
        ["element", "Use this slot to custum the elements list"],
      ],
      eventData: [
        ["Slot name", "Description"],
        ["element-click", "Use this event to get the clicked element data"],
      ],
    };
  },
  computed: {
    item() {
      return this.selectedItem;
    },
  },
  methods: {
    onItemClick(list) {
      // console.log(this.selectedItem = list);
      this.selectedItem = list;
    },
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
    getElement() {
      if (this.checkboxElementChecked) {
        return `<template #element="{ element }">
                <div class="flex items-center">
                  <BIMDataIcon name="chevron" size="xxxs" class="fill-primary" margin="0 6px 0 0" />
                  {{ element }}
                </div>
             </template>`;
      }
    },
  },
};
</script>
