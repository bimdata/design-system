<template>
  <main class="article article-dropdown">
    <div class="article-wrapper">
      <BIMDataText
        component="h1"
        :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'"
        >{{ $route.name }}</BIMDataText
      >
      <ComponentCode componentTitle="DropdownMenu" language="javascript">
        <!-- bloc INTERACTIVE PLAYGROUND - left side -->
        <template #module>
          <BIMDataDropdownMenu
            :disabled="checkboxDisabledChecked"
            :transitionName="selectedDropdownOptionstransition"
            :directionClass="selectedDropdownOptionsdirection"
            :menuItems="checkboxTwoLevelChecked ? multiLevelList : []"
            :header="checkboxDisabledHeader"
            :dark="checkboxDarkmodeChecked"
            :border="checkboxBorderChecked"
          >
            <template #header="{ isOpen }" v-if="checkboxHeaderChecked">
              <span>dropdown menu example</span>
              <BIMDataIconChevron :rotate="isOpen ? 90 : 0" size="xxs" />
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
          <BIMDataText
            component="h5"
            :color="
              currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
            "
            margin="15px 0 10px"
            >modifiers</BIMDataText
          >
          <BIMDataCheckbox
            class="m-y-12"
            text="disabled"
            v-model="checkboxDisabledChecked"
            :dark="currentTheme === 'theme-dark' ? true : false"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            class="m-y-12"
            text="header"
            v-model="checkboxDisabledHeader"
            :dark="currentTheme === 'theme-dark' ? true : false"
          >
          </BIMDataCheckbox>
          <div class="m-t-12">
            <BIMDataText
              component="h5"
              :color="
                currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
              "
              >style</BIMDataText
            >
            <BIMDataCheckbox
              margin="12px 0 0"
              text="dark"
              v-model="checkboxDarkmodeChecked"
              :dark="currentTheme === 'theme-dark' ? true : false"
            />
            <BIMDataCheckbox
              margin="0 0 12px"
              text="border"
              v-model="checkboxBorderChecked"
              :dark="currentTheme === 'theme-dark' ? true : false"
            />
          </div>
          <BIMDataText
            component="h5"
            :color="
              currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
            "
            margin="15px 0 10px"
            >two level list</BIMDataText
          >
          <BIMDataCheckbox
            class="m-y-12"
            text="content"
            v-model="checkboxTwoLevelChecked"
            :dark="currentTheme === 'theme-dark' ? true : false"
          >
          </BIMDataCheckbox>

          <div
            v-for="[key, values] in Object.entries(dropdownOptions)"
            :key="key"
          >
            <BIMDataText
              component="h5"
              :color="
                currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
              "
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
              :dark="currentTheme === 'theme-dark' ? true : false"
              v-model="$data[`selectedDropdownOptions${key}`]"
            >
            </BIMDataRadio>
          </div>
          <BIMDataText
            component="h5"
            :color="
              currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
            "
            margin="15px 0 10px"
            >slots</BIMDataText
          >
          <BIMDataCheckbox
            text="header"
            v-model="checkboxHeaderChecked"
            :dark="currentTheme === 'theme-dark' ? true : false"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            text="element"
            v-model="checkboxElementSlotChecked"
            :dark="currentTheme === 'theme-dark' ? true : false"
          >
          </BIMDataCheckbox>
        </template>

        <!-- bloc IMPORTS LINES CODE -->
        <template #import>
          import BIMDataDropdownMenu from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataDropdownMenu/BIMDataDropdownMenu.vue";
        </template>
        <template #code>
          <pre>
            &lt;BIMDataDropdownMenu
              :disabled="{{ checkboxDisabledChecked }}"
              :header="{{ getHeaderProp() }}"
              :dark="{{ checkboxDarkmodeChecked }}"
              :border="{{ checkboxBorderChecked }}"
              {{ getMenuItems() }}
            &gt;
              {{ getHeader() }} {{ getElement() }}
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
        <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data";
import slotsData from "./slots-data";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
  },
  data() {
    return {
      propsData,
      slotsData,
      checkboxDisabledChecked: false,
      checkboxTwoLevelChecked: false,
      checkboxHeaderChecked: true,
      checkboxDarkmodeChecked: false,
      checkboxBorderChecked: true,
      checkboxDisabledHeader: true,
      checkboxAfterHeaderChecked: false,
      checkboxElementSlotChecked: true,
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
          children: {
            position: "up",
            list: [{ name: "project1.1" }],
          },
        },
        { name: "project2", action: () => console.log("clicked") },
        {
          name: "project3",
          children: {
            list: [
              {
                name: "project3.1",
                action: () => console.log("clicked"),
              },
              { name: "project3.2" },
            ],
          },
        },
      ],
    };
  },
  inject: ["theme"],
  methods: {
    getHeader() {
      if (this.checkboxHeaderChecked) {
        return `<template #header="{ isOpen }">
              <span>dropdown menu example</span>
              <BIMDataIconChevron
                :rotate="isOpen ? 90 : 0"
                size="xxs"
              />
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
    getMenuItems() {
      if (this.checkboxTwoLevelChecked) {
        return `:menuItems=${JSON.stringify(this.multiLevelList)}`;
      }
    },
    getHeaderProp() {
      if (this.checkboxDisabledHeader) {
        return true;
      } else {
        return false;
      }
    },
  },
  computed: {
    currentTheme() {
      return this.theme.value;
    },
  },
};
</script>
