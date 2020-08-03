<template>
  <main class="article article-buttons">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>

      <div class="button-overview">
        <ComponentCode :componentTitle="$route.name" language="javascript" codepenLink="https://codepen.io/bimdata/pen/XWdrKXw" githubLink="https://github.com/bimdata/design-system/blob/develop/src/BIMDataComponents/BIMDataButton/BIMDataButton.vue">
          <template #module>
            <BIMDataButton
              :width="Number(widthButton)"
              :height="Number(heightButton)"
              :disabled="getButtonDisabled()"
              :class="getOverviewButtonClasses()"
              :color="selectedBtnOptionsvalues"
            >
              <BIMDataIcon name="chevron" size="xxxs" v-if="checkboxIconChecked"/>
              <span v-if="checkboxTextChecked">
                BIMData button {{ selectedBtnOptionstypes }}
                {{ selectedBtnOptionskinds }} {{ selectedBtnOptionsvalues }}
              </span>
            </BIMDataButton>
          </template>

          <template #parameters>
            <div
              v-for="[key, values] in Object.entries(btnOptions)"
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
                v-model="$data[`selectedBtnOptions${key}`]"
              >
              </BIMDataRadio>
            </div>
            <div>
              <h5 class="bimdata-h5">modifiers</h5>
              <BIMDataCheckbox
                text="icon"
                v-model="checkboxIconChecked"
                :disabled="checkboxIconDisabled"
              >
              </BIMDataCheckbox>
              <BIMDataCheckbox
                text="text"
                v-model="checkboxTextChecked"
                :disabled="checkboxTextDisabled"
              >
              </BIMDataCheckbox>
              <BIMDataCheckbox
                text="disabled"
                v-model="checkboxDisabledChecked"
              >
              </BIMDataCheckbox>
            </div>

            <h5 class="bimdata-h5">size</h5>
            <BIMDataInput
              v-model="widthButton"
              placeholder="button's min-width in px"
              type="number"
            ></BIMDataInput>
            <BIMDataInput
              v-model="heightButton"
              placeholder="button's height in px"
              type="number"
            ></BIMDataInput>
          </template>

          <template #import>
            import BIMDataButton from
            "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataButton.js";
            <pre v-if="checkboxIconChecked === true">
              import BIMDataButton from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataButton.js";
              import BIMDataIcon from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataIcons.js";
            </pre>
          </template>

          <template #code>
            <pre>
              &lt;BIMDataButton
                width="{{Number(widthButton)}}"
                height="{{Number(heightButton)}}"
                color="{{ selectedBtnOptionsvalues }}"
                {{ selectedBtnOptionstypes }}
                {{ selectedBtnOptionskinds }}
                disabled="{{ getButtonDisabled() }}"&gt;
                {{ getIcon() }}
                {{ getText() }}
              &lt;/BIMDataButton&gt;
            </pre>
          </template>
        </ComponentCode>

        <div class="m-t-24">
          <h5 class="bimdata-h5">Props:</h5>
          <BIMDataTable :rows="propsData"></BIMDataTable>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import colors from "../../../../assets/colors.js"

import BIMDataButton from "../../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataIcon.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

export default {
  name: "Buttons",
  components: {
    ComponentCode,
    BIMDataButton,
    BIMDataTable,
    BIMDataRadio,
    BIMDataCheckbox,
    BIMDataIcon,
    BIMDataInput,
  },
  data() {
    return {
      message: "",
      widthButton: 32,
      heightButton: 32,
      checkboxIconChecked: false,
      checkboxTextChecked: true,
      checkboxDisabledChecked: false,
      selectedBtnOptionstypes: "fill",
      selectedBtnOptionskinds: "radius",
      selectedBtnOptionsvalues: "primary",
      btnOptions: {
        types: ["fill", "outline", "ghost"],
        kinds: ["radius", "square", "rounded"],
        values: colors,
      },
      propsData: [
        ["Props", "Type", "Required", "Default value", "Description"],
        [
          "color",
          "String",
          "true",
          "",
          "Use this props to use ghost button",
        ],
        [
          "width",
          "[Number, String]",
          "",
          "32",
          "Use this props to change the min-width of the button",
        ],
        [
          "height",
          "[Number, String]",
          "",
          "32",
          "Use this props to change the height of the button",
        ],
        [
          "fill",
          "Boolean",
          "",
          "false",
          "Use this props to use fill button",
        ],
        [
          "outline",
          "Boolean",
          "",
          "false",
          "Use this props to use outline button",
        ],
        [
          "ghost",
          "Boolean",
          "",
          "false",
          "Use this props to use ghost button",
        ],
        [
          "radius",
          "Boolean",
          "",
          "false",
          "Use this props to use radius button",
        ],
        [
          "square",
          "Boolean",
          "",
          "false",
          "Use this props to use square button",
        ],
        [
          "rounded",
          "Boolean",
          "",
          "false",
          "Use this props to use rounded button",
        ]
      ],
    };
  },
  computed: {
    checkboxTextDisabled() {
      return (
        this.selectedBtnOptionskinds === "rounded" ||
        this.checkboxIconChecked === false
      );
    },
    checkboxIconDisabled() {
      return (
        this.selectedBtnOptionskinds === "rounded" ||
        this.checkboxTextChecked === false
      );
    },
    buttonDisabled() {
      if (this.checkboxDisabledChecked === true) {
        return ":disabled='disabled'";
      }
      return "";
    },
  },
  watch: {
    selectedBtnOptionskinds: {
      handler(newValue, oldValue) {
        if (newValue === "rounded") {
          this.checkboxTextChecked = false;
          this.checkboxIconChecked = true;
        } else if (oldValue === "rounded") {
          this.checkboxTextChecked = true;
        }
      },
      deep: true,
    },
  },
  methods: {
    getOverviewButtonClasses() {
      return `bimdata-btn__${this.selectedBtnOptionstypes} bimdata-btn__${this.selectedBtnOptionstypes}--${this.selectedBtnOptionsvalues} bimdata-btn__${this.selectedBtnOptionskinds}`;
    },
    getIcon() {
      if (this.checkboxIconChecked) {
        return `<BIMDataIcon name="chevron" size="xxs" />`;
      }
    },
    getText() {
      if (this.checkboxTextChecked) {
        return `Button ${this.selectedBtnOptionskinds} ${this.selectedBtnOptionstypes} ${this.selectedBtnOptionsvalues}`;
      }
    },
    getButtonDisabled() {
      return this.checkboxDisabledChecked;
    },
  },
};
</script>

<style lang="scss" scoped>
// import COMPONENT STYLE
@import "./_Buttons.scss";
</style>
