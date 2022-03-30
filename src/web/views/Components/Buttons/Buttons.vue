<template>
  <main class="article article-buttons">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <div class="button-overview">
        <ComponentCode
          :componentTitle="$route.name"
          language="javascript"
          codepenLink="https://codepen.io/bimdata/pen/XWdrKXw"
          githubLink="https://github.com/bimdata/design-system/blob/develop/src/BIMDataComponents/BIMDataButton/BIMDataButton.vue"
        >
          <template #module>
            <BIMDataButton
              :width="widthButton"
              :height="heightButton"
              :disabled="getButtonDisabled()"
              :class="getOverviewButtonClasses()"
              :color="selectedBtnOptionsvalues"
              :icon="checkboxIconChecked && !checkboxTextChecked"
            >
              <BIMDataIcon
                name="chevron"
                size="xxxs"
                v-if="checkboxIconChecked"
                :margin="getIconMargin()"
              />
              <span v-if="checkboxTextChecked">
                BIMData button {{ selectedBtnOptionstypes }}
                {{ selectedBtnOptionskinds }} {{ selectedBtnOptionsvalues }}
              </span>
            </BIMDataButton>
          </template>

          <template #parameters>
            <div v-for="[key, values] in Object.entries(btnOptions)" :key="key">
              <BIMDataText
                component="h5"
                margin="15px 0 10px"
                color="color-primary"
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
                v-model="$data[`selectedBtnOptions${key}`]"
              >
              </BIMDataRadio>
            </div>
            <div>
              <BIMDataText
                component="h5"
                margin="15px 0 10px"
                color="color-primary"
              >
                modifiers
              </BIMDataText>
              <BIMDataCheckbox
                text="icon"
                v-model="checkboxIconChecked"
                :disabled="checkboxIconDisabled"
              />
              <BIMDataCheckbox
                text="text"
                v-model="checkboxTextChecked"
                :disabled="checkboxTextDisabled"
              />
              <BIMDataCheckbox
                text="disabled"
                v-model="checkboxDisabledChecked"
              />
            </div>

            <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
              size
            </BIMDataText>
            <BIMDataInput
              v-model="widthButton"
              placeholder="button's min-width in px or %"
            />
            <BIMDataInput
              v-model="heightButton"
              placeholder="button's min-height in px or %"
            />
          </template>

          <template #import>
            import BIMDataButton from
            "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataButton.js";
            <pre v-if="checkboxIconChecked === true">
              import BIMDataButton from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataButton.js";
              import BIMDataIcon from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataIcon.js";
            </pre>
          </template>

          <template #code>
            <pre>
              &lt;BIMDataButton
                {{ getWidthBtn() }} {{ getHeightBtn() }} color="{{
                selectedBtnOptionsvalues
              }}" {{ selectedBtnOptionstypes }} {{ selectedBtnOptionskinds }} {{
                getIconClass()
              }} {{ getButtonDisabled() }}
                &gt;
                {{ getIcon() }}
                {{ getText() }}
              &lt;/BIMDataButton&gt;
            </pre>
          </template>
        </ComponentCode>

        <div class="m-t-24">
          <BIMDataText component="h5" margin="15px 0 0" color="color-primary">
            Props:
          </BIMDataText>
          <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import colors from "../../../../assets/colors.js";
import propsData from "./props-data.js";

import BIMDataButton from "../../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataIcon from "../../../../../src/BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

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
    BIMDataText,
  },
  data() {
    return {
      message: "",
      widthButton: "32px",
      heightButton: "32px",
      checkboxIconChecked: false,
      checkboxTextChecked: true,
      checkboxDisabledChecked: false,
      selectedBtnOptionsicons: "icon",
      selectedBtnOptionstypes: "fill",
      selectedBtnOptionskinds: "radius",
      selectedBtnOptionsvalues: "primary",
      btnOptions: {
        types: ["fill", "outline", "ghost", "ripple"],
        kinds: ["radius", "square", "rounded"],
        values: colors,
      },
      propsData,
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
      if (this.checkboxIconChecked && this.checkboxTextChecked) {
        return '<BIMDataIcon name="chevron" size="xxxs" margin="0 12px 0 0" />';
      }
      if (this.checkboxIconChecked) {
        return '<BIMDataIcon name="chevron" size="xxxs"/>';
      }
    },
    getText() {
      if (this.checkboxTextChecked && this.checkboxIconChecked) {
        return `<span>Button ${this.selectedBtnOptionskinds} ${this.selectedBtnOptionstypes} ${this.selectedBtnOptionsvalues}</span>`;
      }
      if (this.checkboxTextChecked) {
        return `Button ${this.selectedBtnOptionskinds} ${this.selectedBtnOptionstypes} ${this.selectedBtnOptionsvalues}`;
      } else {
        return "";
      }
    },
    getIconMargin() {
      if (this.checkboxTextChecked && this.checkboxIconChecked) {
        return "0 12px 0 0";
      } else {
        return "0";
      }
    },
    getButtonDisabled() {
      if (this.checkboxDisabledChecked) {
        return 'disabled="true"';
      }
    },
    getIconClass() {
      if (this.checkboxIconChecked) {
        return "icon";
      }
    },
    getWidthBtn() {
      if (this.widthButton != "32px") {
        return `width="${this.widthButton}"`;
      }
    },
    getHeightBtn() {
      if (this.heightButton != "32px") {
        return `height="${this.heightButton}"`;
      }
    },
  },
};
</script>
