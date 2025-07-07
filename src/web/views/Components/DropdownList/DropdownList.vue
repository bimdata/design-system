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
            :search="checkboxSearchChecked"
            :dark="checkboxDarkmodeChecked"
            :border="checkboxBorderChecked"
            :elementLabelKey="elementLabelKey"
            :borderRadius="numberBorderRadius"
          >
            <template #header v-if="checkboxHeaderChecked">
              <span v-if="selectedItem">{{ item }}</span>
              <span v-else>dropdown list example</span>
            </template>
            <template #empty v-if="checkboxEmptyChecked">
              <span class="p-x-6 color-granite">No result</span>
            </template>
            <template #contentAfterBtn v-if="checkboxAfterBtnChecked">
              hi
            </template>
            <template #element="{ element }" v-if="checkboxElementChecked">
              <div class="flex items-center">
                <BIMDataIcon
                  name="chevron"
                  size="xxxs"
                  fill
                  :color="!dark ? 'primary' : 'quaternary-lighter'"
                  margin="0 6px 0 0"
                />
                <span v-if="optionSet === 'object'">{{ element.label }}</span>
                <span v-else>{{ element }}</span>
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
            text="Disabled"
            v-model="checkboxDisabledChecked"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            class="m-y-12"
            text="Loading"
            v-model="checkboxLoadingChecked"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            class="m-y-12"
            text="Close on element click"
            v-model="checkboxCloseOnElementClickChecked"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            class="m-y-12"
            text="Search"
            v-model="checkboxSearchChecked"
          />
          <BIMDataInput
            v-model="numberInput"
            placeholder="Number of items per page"
            type="number"
            backgroundColor="white"
          ></BIMDataInput>
          <BIMDataInput
            v-model="numberBorderRadius"
            placeholder="Border radius"
            backgroundColor="white"
          ></BIMDataInput>
          <div class="m-t-18 m-b-36">
            <BIMDataText component="h5" color="color-primary"
              >style</BIMDataText
            >
            <BIMDataCheckbox
              margin="12px 0 0"
              text="dark"
              v-model="checkboxDarkmodeChecked"
            />
            <BIMDataCheckbox
              margin="0 0 12px"
              text="border"
              v-model="checkboxBorderChecked"
            />
          </div>
          <div class="m-t-24">
            <BIMDataSelect
              label="Option set"
              :options="['string', 'object']"
              :modelValue="optionSet"
              @update:modelValue="changeOptionSet"
            />
          </div>
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
          <BIMDataCheckbox text="empty" v-model="checkboxEmptyChecked" />
        </template>

        <!-- bloc IMPORTS LINES CODE -->
        <template #import>
          import BIMDataDropdownList from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataDropdownList/BIMDataDropdownList.vue";
        </template>
        <template #code>
          <pre>
            &lt;BIMDataDropdownList
              :list="list"
              :dark="{{ checkboxDarkmodeChecked }}"
              :border="{{ checkboxBorderChecked }}"
              :perPage="{{ numberInput }}"
              :borderRadius="{{ numberBorderRadius }}"
              elementKey="dropdown"
              {{ checkboxLoadingChecked ? ':loading="true"' : "" }}
              {{ checkboxDisabledChecked ? ':disabled="true"' : "" }}
              {{
              checkboxCloseOnElementClickChecked
                ? ':closeOnElementClick="true"'
                : ""
            }}
              {{ checkboxSearchChecked ? ':search="true"' : "" }}
              {{ elementLabelKey ? ':elementLabelKey="label"' : "" }}
            &gt;
              {{ getHeader() }} {{ getContentAfterBtn() }} {{ getElement() }} {{
              getEmpty()
            }}
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
        <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import { stringElements, objectElements } from "./option-sets";
import propsData from "./props-data";
import slotData from "./slots-data";
import eventsData from "./events-data";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
  },
  data() {
    return {
      selectedItem: null,
      numberInput: 6,
      numberBorderRadius: "3px",
      checkboxDisabledChecked: false,
      checkboxLoadingChecked: false,
      checkboxCloseOnElementClickChecked: false,
      checkboxSearchChecked: false,
      checkboxDarkmodeChecked: false,
      checkboxBorderChecked: true,
      checkboxHeaderChecked: true,
      checkboxAfterBtnChecked: false,
      checkboxElementChecked: false,
      checkboxEmptyChecked: false,
      customListCheckbox: false,
      dropdownOptions: {
        transition: ["up", "down"],
        direction: ["up", "down", "right", "left"],
      },
      selectedDropdownOptionstransition: "up",
      selectedDropdownOptionsdirection: "down",
      list: stringElements,
      optionSet: "string",
      elementLabelKey: null,
      propsData,
      slotData,
      eventsData,
    };
  },
  computed: {
    item() {
      return this.selectedItem;
    },
  },
  methods: {
    onItemClick(element) {
      this.selectedItem = this.optionSet === "string" ? element : element.label;
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
      if (this.checkboxElementChecked && this.optionSet === "object") {
        return `<template #element="{ element }">
                <div class="flex items-center">
                  <BIMDataIconChevron size="xxxs" fill :color="!dark ? 'primary' : 'quaternary-lighter'" margin="0 6px 0 0" />
                  {{ element.label }}
                </div>
             </template>`;
      }
      if (this.checkboxElementChecked && this.optionSet === "string") {
        return `<template #element="{ element }">
                <div class="flex items-center">
                  <BIMDataIconChevron size="xxxs" fill :color="!dark ? 'primary' : 'quaternary-lighter'" margin="0 6px 0 0" />
                  {{ element }}
                </div>
             </template>`;
      }
    },
    changeOptionSet(value) {
      switch (value) {
        case "string":
          this.elementLabelKey = null;
          this.list = stringElements;
          break;
        case "object":
          this.elementLabelKey = "label";
          this.list = objectElements;
          this.checkboxElementChecked = true;
          break;
      }
      this.optionSet = value;
    },
    getEmpty() {
      if (this.checkboxEmptyChecked) {
        return "<template #empty>No result</template>";
      }
    },
  },
};
</script>
