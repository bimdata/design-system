<template>
  <main class="article article-dropdown">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataDropdownList
            :list="list"
            :perPage="Number(numberInput)"
            elementKey="dropdown"
            :disabled="checkboxDisabledChecked"
            :transitionName="selectedDropdownOptionstransition"
            :directionClass="selectedDropdownOptionsdirection"
            :loading="checkboxLoadingChecked"
          >
            <template #header v-if="checkboxHeaderChecked">
              dropdown list example
            </template>
            <template #contentAfterBtn v-if="checkboxAfterBtnChecked">
              hi
            </template>
            <template #element v-if="checkboxElementChecked">
              <BIMDataCheckbox
                text="custom list with checkbox"
                v-model="customListCheckbox"
              >
              </BIMDataCheckbox>
            </template>
          </BIMDataDropdownList>
        </template>
        <template #parameters>
          <h5 class="bimdata-h5">modifiers</h5>
          <BIMDataCheckbox
            class="m-y-12"
            text="disabled"
            v-model="checkboxDisabledChecked"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            class="m-t-12 m-b-24"
            text="loading"
            v-model="checkboxLoadingChecked"
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
          <BIMDataCheckbox
            text="header"
            v-model="checkboxHeaderChecked"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            text="contentAfterBtn"
            v-model="checkboxAfterBtnChecked"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            text="element"
            v-model="checkboxElementChecked"
          >
          </BIMDataCheckbox>
        </template>
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
              :disabled="{{checkboxDisabledChecked}}"
            &gt;
              {{ getHeader() }} {{ getContentAfterBtn() }} {{ getElement() }}
            &lt;/BIMDataDropdownList&gt;
          </pre>
        </template>
      </ComponentCode>

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
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

import BIMDataDropdownList from "../../../../../src/BIMDataComponents/BIMDataDropdownList/BIMDataDropdownList.vue";
export default {
  components: {
    ComponentCode,
    BIMDataInput,
    BIMDataCheckbox,
    BIMDataRadio,
    BIMDataTable,
    BIMDataDropdownList,
  },
  data() {
    return {
      numberInput: 6,
      checkboxDisabledChecked: false,
      checkboxLoadingChecked: false,
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
      listCustom:[
        { name: 'Square', sides: 4 },
        { name: 'Hexagon', sides: 6 },
        { name: 'Triangle', sides: 3 }
      ],
      propsData: [
        ["Props", "Type", "Default value", "Validator", "Description"],
        ["list", "Array", "() => []", "", ""],
        ["perPage", "Number", "10", "", ""],
        ["elementKey", "String", "", "", ""],
        ["disabled", "Boolean", "false", "", ""],
        ["transitionName", "String", "'up'", "'up' or 'down' values", ""],
        ["directionClass", "String", "'down'", "'up', 'down', 'right' or 'left' values", ""],


      ],
      slotData: [
        ["Slot name", "Description"],
        ["#header", "Use this slot for add content before the icon button"],
        ["#contentAfterBtn", "Use this slot for add content after the icon button"],
        ["#element", "Use this slot to custum the elements list"],
      ],
    }
  },
  methods: {
    getHeader(){
      if(this.checkboxHeaderChecked){
        return `<template #header>
              dropdown list example
            </template>
            `
      }
    },
    getContentAfterBtn(){
      if(this.checkboxAfterBtnChecked){
        return `<template #contentAfterBtn>
              hi
            </template>
            `
      }
    },
    getElement(){
      if(this.checkboxElementChecked){
        return `<template #element>
                <BIMDataCheckbox
                  text="custom list with checkbox"
                  v-model="customListCheckbox"
                >
             </template>`
      }
    }
  }
};
</script>
