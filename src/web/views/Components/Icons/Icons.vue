<template>
  <main class="article article-icons">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <BIMDataText component="h3" color="color-primary" margin="10px 0"
        >Size usage for designers</BIMDataText
      >
      <BIMDataText>Use a 23px box for icons of 23px.</BIMDataText>
      <div>
        <img src="../../../assets/img/design-system__icon-plus.jpg" alt="" />
        <img src="../../../assets/img/design-system__icon-warning.jpg" alt="" />
      </div>

      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataSearch
            :clear="true"
            class="bimdata-search-bar__primary"
            placeholder="Search an icon"
            v-model="filter"
            width="95%"
          />
          <span class="icons-numbers"
            >icons: {{ Object.keys(icons).length }}</span
          >
          <div class="icons">
            <div
              class="icon"
              v-for="icon of filteredList"
              :key="icon"
              :class="{ active: icon === activeIcon }"
              @click="onActiveIcons(icon)"
            >
              <BIMDataIcon
                :name="icon"
                :size="selectedIconOptionssize"
                :class="getOverviewIconClasses()"
                :rotate="Number(rotationDeg)"
              />
              <p>{{ icon }}</p>
            </div>
          </div>
        </template>

        <template #parameters>
          <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
            >rotate</BIMDataText
          >
          <BIMDataInput
            v-model="rotationDeg"
            placeholder="Degree of rotation"
            type="number"
            min="0"
          ></BIMDataInput>
          <div v-for="[key, values] in Object.entries(iconOptions)" :key="key">
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
              v-model="$data[`selectedIconOptions${key}`]"
            >
            </BIMDataRadio>
          </div>
        </template>

        <template #import>
          <pre>
            import BIMDataIcon from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataIcon.js";
          </pre>
        </template>

        <template #code>
          <pre>
            &lt;BIMDataIcon name="{{ activeIcon }}" {{
              getIconOptionsSize()
            }} {{ selectedIconOptionstypes }} color="{{
              selectedIconOptionsvalues
            }}" {{ getRotateDegree() }}/&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Props:</BIMDataText
        >
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Summary icons size:</BIMDataText
        >
        <BIMDataTable
          :columns="iconsSizeData[0]"
          :rows="iconsSizeData.slice(1)"
        />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataSearch from "../../../../../src/BIMDataComponents/BIMDataSearch/BIMDataSearch.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

import icons from "../../../../../src/BIMDataComponents/BIMDataIcon/BIMDataLibraryIcons/index.js";

import BIMDataIcon from "../../../../../src/BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";

import highlight from "../../../../BIMDataDirectives/highlight.js";
import copy from "../../../../BIMDataDirectives/copy.js";

import iconsColors from "../../../../assets/iconsColors.js";

export default {
  components: {
    ComponentCode,
    BIMDataSearch,
    BIMDataRadio,
    BIMDataInput,
    BIMDataIcon,
    BIMDataTable,
    BIMDataText,
  },
  directives: { highlight, copy },
  data() {
    return {
      rotationDeg: "",
      size: "m",
      icons,
      filter: "",
      selectedIconOptionstypes: "fill",
      selectedIconOptionsvalues: "default",
      selectedIconOptionssize: "s",
      checkboxIconRotate: false,
      activeIcon: "addFile",
      iconOptions: {
        types: ["fill", "stroke"],
        values: iconsColors,
        size: ["xxxs", "xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"],
      },
      propsData: [
        [
          "Props",
          "Type",
          "Required",
          "Default value",
          "Description",
          "Examples",
        ],
        [
          "color",
          "String",
          "",
          "default that matches currentColor",
          "This props allows you to customize the color of the icon's fill.",
          "List of 'values' above",
        ],
        [
          "customSize",
          "[Number, String]",
          "",
          "null",
          "Use this props if size options is not enought for customize size for icon. The icons are in square format, so the width equals the height.",
          "25",
        ],
        [
          "fillColor",
          "String",
          "",
          "currentColor",
          "Use this props if values colors is not enought for customize fill for icon.",
          "red, blue, green...",
        ],
        [
          "name",
          "String",
          "true",
          "",
          "Use this props to add an icon name to BIMDataIcon.",
          "addFile",
        ],
        [
          "rotate",
          "Number",
          "",
          "0",
          "Use this props for rotate your icon.",
          "90, 180",
        ],
        [
          "size",
          "String",
          "",
          "s",
          "Several custom size are available to handle the custom icons size.",
          "xxxs, xxs, xs, s, m, l, xl, xxl, xxxl.",
        ],
      ],
      iconsSizeData: [
        ["Size value", "Output"],
        ["xxxs", "10px"],
        ["xxs", "13px"],
        ["xs", "16px"],
        ["s", "18px"],
        ["m", "22px"],
        ["l", "28px"],
        ["xl", "36px"],
        ["xxl", "45px"],
        ["xxxl", "60px"],
      ],
    };
  },
  computed: {
    filteredList() {
      return Object.keys(icons).filter(iconName => {
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
    getIconOptionsSize() {
      if (this.selectedIconOptionssize === "s") {
        return null;
      } else {
        return `size="${this.selectedIconOptionssize}"`;
      }
    },
    getRotateDegree() {
      if (this.rotationDeg > 0) {
        return `:rotate="${this.rotationDeg}"`;
      }
    },
    getOverviewIconClasses() {
      return `icon-${this.selectedIconOptionstypes} icon-${this.selectedIconOptionstypes}--${this.selectedIconOptionsvalues}`;
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
