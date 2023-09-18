<template>
  <main class="article article-icons">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <BIMDataText component="h3" color="color-primary" margin="10px 0">
        Size usage for designers
      </BIMDataText>
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
            width="94%"
          />
          <span class="icons-numbers">icons: {{ filteredList.length }}</span>
          <div class="icons">
            <div
              class="icon"
              v-for="icon of filteredList"
              :key="icon.name"
              :class="{ active: icon === activeIcon }"
              @click="onActiveIcons(icon)"
            >
              <component
                :is="icon"
                :size="selectedIconOptionssize"
                :class="getOverviewIconClasses()"
                :rotate="Number(rotationDeg)"
                :margin="marginIcon"
              />
              <p>{{ icon }}</p>
            </div>
          </div>
        </template>

        <template #parameters>
          <BIMDataText
            component="h5"
            color="color-primary"
            margin="15px 0 10px"
          >
            margin
          </BIMDataText>
          <BIMDataInput
            v-model="marginIcon"
            placeholder="margin around icon (in px)"
            min="0"
          />
          <BIMDataText
            component="h5"
            color="color-primary"
            margin="15px 0 10px"
          >
            rotate
          </BIMDataText>
          <BIMDataInput
            v-model="rotationDeg"
            placeholder="Degree of rotation"
            type="number"
            min="0"
          />
          <div v-for="[key, values] in Object.entries(iconOptions)" :key="key">
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
            >
              {{ key }}
            </BIMDataText>
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
            import {{
              activeIcon
            }} from "@bimdata/design-system/src/BIMDataComponents/BIMDataIcon/BIMDataIconStandalone/{{
              activeIcon
            }}.vue";
          </pre>
        </template>

        <template #code>
          <pre>
            &lt;{{ activeIcon }} {{ getIconOptionsSize() }} {{
              selectedIconOptionstypes
            }} color="{{ selectedIconOptionsvalues }}" {{
              getRotateDegree()
            }} {{ getMarginIcon() }} /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Summary icons size:
        </BIMDataText>
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

import * as allIcons from "../../../../../src/BIMDataComponents/BIMDataIcon/BIMDataIconStandalone/index.js";

import highlight from "../../../../BIMDataDirectives/highlight.js";
import copy from "../../../../BIMDataDirectives/copy.js";

import iconsColors from "../../../../assets/iconsColors.js";

export default {
  components: {
    ComponentCode,
    ...allIcons,
  },
  directives: { highlight, copy },
  data() {
    return {
      marginIcon: "0px",
      rotationDeg: "",
      size: "m",
      allIcons,
      filter: "",
      selectedIconOptionstypes: "fill",
      selectedIconOptionsvalues: "default",
      selectedIconOptionssize: "s",
      checkboxIconRotate: false,
      activeIcon: "BIMDataIconAddFile",
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
          "Example",
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
          "margin",
          "String",
          "",
          "0px",
          "Use this props to add margin value.",
          "0 6px 0 0",
        ],
        [
          "name",
          "String",
          "true",
          "",
          "Use this props to add an icon name to BIMDataIcon.",
          "AddFile",
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
        [
          "stroke",
          "Boolean",
          "",
          "false",
          "Make icon body transparent, keep border drawn.",
        ],
        ["fill", "Boolean", "", "true", "Fill the icon with color."],
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
      return Object.keys(allIcons).filter(iconName => {
        return iconName.toLowerCase().includes(this.filter.toLowerCase());
      });
    },
  },
  methods: {
    test() {
      return this.allIcons.length;
    },
    onActiveIcons(iconName) {
      this.activeIcon = iconName;
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
    getMarginIcon() {
      if (this.marginIcon !== "0px" && this.marginIcon.includes("px")) {
        return `margin="${this.marginIcon}"`;
      }
    },
    getOverviewIconClasses() {
      return `icon-${this.selectedIconOptionstypes} icon-${this.selectedIconOptionstypes}--${this.selectedIconOptionsvalues}`;
    },
  },
};
</script>

<style scoped lang="scss" src="./_Icons.scss"></style>
