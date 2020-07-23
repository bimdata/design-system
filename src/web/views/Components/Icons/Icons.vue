<template>
  <main class="article article-icons">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <h3 class="bimdata-h3">Size usage for designers</h3>
      <p class="bimdata-text">Use a 23px box for icons of 23px.</p>
      <div>
        <img src="../../../assets/img/design-system__icon-plus.jpg" alt="" />
        <img src="../../../assets/img/design-system__icon-warning.jpg" alt="" />
      </div>

      <ComponentCode :componentTitle="$route.name">
        <template #module>
          <BIMDataSearchInput
            :clear="true"
            class="bimdata-search-bar__primary"
            placeholder="Search an icon"
            v-model="filter"
            width="95%"
          />
          <span class="icons-numbers">icons: {{ Object.keys(icons).length }}</span>
          <div class="icons">
            <div class="icon" v-for="icon of filteredList" :key="icon" :class="{ active: icon === activeIcon }" @click="onActiveIcons(icon)">
              <BIMDataIcon :name="icon" :size="size" :class="selectedIconOptionsclass"/>
              <p>{{ icon }}</p>
            </div>
          </div>
        </template>

        <template #parameters>
          <div
            class="bimdata-ds__demo__parameters__options"
            v-for="[key, values] in Object.entries(iconOptions)"
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
              v-model="$data[`selectedIconOptions${key}`]"
            >
            </BIMDataRadio>
          </div>
        </template>

        <template #import>
          <pre>
            import BIMDataIcon from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataIcons.js";
          </pre>
        </template>

        <template #code>
          <pre>
            &lt;BIMDataIcon name="{{ activeIcon }}" /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataSearchInput from "../../../../../src/BIMDataComponents/BIMDataSearch/BIMDataSearchInput.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";

import icons from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/index.js";

import BIMDataIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataIcon.vue";

import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

import highlight from "../../../../directives/highlight.js";
import copy from "../../../../directives/copy.js";

export default {
  components: {
    ComponentCode,
    BIMDataSearchInput,
    BIMDataRadio,
    BIMDataIcon,
    BIMDataTable,
  },
  directives: { highlight, copy },
  data() {
    return {
      size: "m",
      icons,
      filter: "",
      selectedIconOptionsclass: "fill-primary",
      activeIcon: "addFile",
      iconOptions: {
        class: [
          "fill-primary",
          "fill-secondary",
          "fill-tertiary",
          "fill-tertiary-lightest",
          "fill-tertiary-dark",
          "fill-tertiary-darkest",
          "fill-white",
          "fill-black",
          "fill-neutral",
          "fill-success",
          "fill-disabled",
          "fill-warning",
          "fill-high",
          "stroke-primary",
          "stroke-secondary",
          "stroke-tertiary",
          "stroke-tertiary-lightest",
          "stroke-tertiary-dark",
          "stroke-tertiary-darkest",
          "stroke-white",
          "stroke-black",
          "stroke-neutral",
          "stroke-success",
          "stroke-disabled",
          "stroke-warning",
          "stroke-high",
        ],
      },
      propsData: [
        ["Props", "Type", "Default value", "Description", "Examples"],
        ["iconName", "String", "'box'", "Use this props to name your icon", ""],
        [
          "width",
          "Number, String",
          "23",
          "Use this props to change the width of the icon",
          "",
        ],
        [
          "height",
          "Number, String",
          "23",
          "Use this props to change the height of the icon",
          "",
        ],
        [
          "iconColor",
          "String",
          "'currentColor'",
          "Use this props to change the height of the button",
          "'red', 'blue', 'green' etc..",
        ],
        [
          "x",
          "Number, String",
          "23",
          "Use this props to place on the x axis (viewbox) your icon",
          "",
        ],
        [
          "y",
          "Number, String",
          "23",
          "Use this props to place on the y axis (viewbox) your icon",
          "",
        ],
        [
          "class",
          "String",
          "23",
          "Use this props to place on the y axis (viewbox) your icon. Warning: This props outclass 'iconColor' porperty.",
          "'bimdata-fill-grey', 'bimdata-stroke-grey'",
        ],
      ],
    };
  },
  computed: {
    filteredList() {
      return  Object.keys(icons).filter(iconName => {
        return iconName.toLowerCase().includes(this.filter.toLowerCase());
      });
    },
  },
  methods: {
    onActiveIcons(iconName) {
      this.activeIcon = iconName;
    },
    onCopy() {
      this.alerts = true;
      this.message = "copied successfully !";
      this.alertType = "success";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
// import BIMDATA COMPONENT VARIABLES
@import "../../../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA COMPONENT MIXINS
@import "../../../../assets/scss/mixins/_font-size.scss";

// import COMPONENT STYLE
@import "./_Icons.scss";
</style>
