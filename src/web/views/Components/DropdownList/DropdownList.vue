<template>
  <main class="article article-dropdown">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <!-- bloc INTERACTIVE PLAYGROUND - left side -->
        <template #module>
          <BIMDataDropdownList
            v-if="getOptionKey"
            :list="optionsGroup"
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
              <span v-if="selectedItem">{{ item.label }}</span>
              <span v-else>dropdown group option list example</span>
            </template>
            <template #contentAfterBtn v-if="checkboxAfterBtnChecked">
              hi
            </template>
            <template #element="{ element }" v-if="checkboxElementChecked">
              <div class="flex items-center">
                <BIMDataIcon
                  name="chevron"
                  size="xxxs"
                  class="fill-primary m-r-6"
                />
                {{ element }}
              </div>
            </template>
          </BIMDataDropdownList>
          <BIMDataDropdownList
            v-else
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
                  class="fill-primary m-r-6"
                />
                {{ element }}
              </div>
            </template>
          </BIMDataDropdownList>
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
          <BIMDataCheckbox
            class="m-y-12"
            text="loading"
            v-model="checkboxLoadingChecked"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            class="m-t-12"
            text="close on element click"
            v-model="checkboxCloseOnElementClickChecked"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            class="m-t-12 m-b-24"
            text="group option"
            v-model="groupOption"
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
          <BIMDataCheckbox
            text="element"
            v-model="checkboxElementChecked"
            :disabled="checkboxElementCheckedDisabled"
          >
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
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>

      <div class="m-t-24">
        <h5 class="bimdata-h5">Slots:</h5>
        <BIMDataTable :rows="slotData"></BIMDataTable>
      </div>

      <div class="m-t-12">
        <h5 class="bimdata-h5">How to add option group to BIMDataDropdownList:</h5>
        <p>
          To add optgroup to BIMDataDropdownList add optionGroup: true property to the
          option object. Remember to provide an optionKey to display your object
          correctly.
        </p>
        <p>Example :</p>
        <Code language="javascript">
          { label: "Title 2", optionGroup: true },
        </Code>
      </div>
    </div>
  </main>
</template>

<script>
import Code from "../../Elements/Code/Code.vue";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataIcon from "../../../../../src/BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";

import BIMDataDropdownList from "../../../../../src/BIMDataComponents/BIMDataDropdownList/BIMDataDropdownList.vue";
export default {
  components: {
    Code,
    ComponentCode,
    BIMDataInput,
    BIMDataCheckbox,
    BIMDataRadio,
    BIMDataTable,
    BIMDataIcon,
    BIMDataDropdownList,
  },
  data() {
    return {
      selectedItem: null,
      numberInput: 6,
      groupOption: false,
      checkboxDisabledChecked: false,
      checkboxLoadingChecked: false,
      checkboxCloseOnElementClickChecked: false,
      checkboxHeaderChecked: true,
      checkboxAfterBtnChecked: false,
      checkboxElementChecked: false,
      customListCheckbox: false,
      checkboxElementCheckedDisabled: false,
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
      optionsGroup: [
        { label: "Title", optionGroup: true },
        { label: "option 1" },
        { label: "option 2" },
        { label: "Title 2", optionGroup: true },
        { label: "option 3" },
        { label: "option 4", disabled: true },
        { label: "option 5" },
        { label: "option 6" },
        { label: "option 7" },
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
        ["#header", "Use this slot for add content before the icon button"],
        [
          "#contentAfterBtn",
          "Use this slot for add content after the icon button",
        ],
        ["#element", "Use this slot to custum the elements list"],
      ],
    };
  },
  computed: {
    item() {
      return this.selectedItem;
    },
    getOptionKey() {
      if (this.groupOption) {
        this.checkboxElementCheckedDisabled = true;
        return true;
      } else {
        this.checkboxElementCheckedDisabled = false;
        return false;
      }
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
                  <BIMDataIcon name="chevron" size="xxxs" class="fill-primary m-r-6" />
                  {{ element }}
                </div>
             </template>`;
      }
    },
  },
};
</script>
