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
              :size="fontSizeButton"
              :padding="paddingButton"
              :disabled="getButtonDisabled()"
              :class="getOverviewButtonClasses()"
              :color="selectedBtnOptionsvalues"
              :icon="checkboxIconChecked && !checkboxTextChecked"
            >
              <BIMDataIconChevron
                size="xxxs"
                v-if="checkboxIconChecked"
                :margin="getIconMargin()"
              />
              <span v-if="checkboxTextChecked">
                BIMData button {{ selectedBtnOptionstypes }}
                {{ selectedBtnOptionskinds }} {{ selectedBtnOptionsvalues }} {{ selectedBtnOptionsweight }}
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
              <BIMDataCheckbox text="icon" v-model="checkboxIconChecked" />
              <BIMDataCheckbox text="text" v-model="checkboxTextChecked" />
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
              backgroundColor="white"
              placeholder="button's min-width in px or %"
              margin="24px 0px"
            />
            <BIMDataInput
              v-model="heightButton"
              backgroundColor="white"
              placeholder="button's min-height in px or %"
              margin="24px 0px"
            />
            <BIMDataInput
              v-model="fontSizeButton"
              backgroundColor="white"
              placeholder="button's font-size in px"
              margin="24px 0px"
            />
            <BIMDataInput
              v-model="paddingButton"
              backgroundColor="white"
              placeholder="button's padding in px"
              margin="24px 0px"
            />
          </template>

          <template #import>
            {{ getImportContent() }}
          </template>

          <template #code>
            <pre>
              &lt;BIMDataButton color="{{ selectedBtnOptionsvalues }}" {{
                selectedBtnOptionstypes
              }} {{ selectedBtnOptionskinds }} {{ selectedBtnOptionsweight }} {{ getIconClass() }} {{
                getButtonDisabled()
              }} {{ getWidthBtn() }} {{ getHeightBtn() }} {{ getFontSizeBtn() }} {{ getPaddingBtn() }}&gt;
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

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  name: "Buttons",
  components: {
    ComponentCode,
  },
  data() {
    return {
      message: "",
      widthButton: "32px",
      heightButton: "32px",
      fontSizeButton: "15px",
      paddingButton: "0px 1rem",
      checkboxIconChecked: false,
      checkboxTextChecked: true,
      checkboxDisabledChecked: false,
      selectedBtnOptionsicons: "icon",
      selectedBtnOptionstypes: "fill",
      selectedBtnOptionskinds: "rounded",
      selectedBtnOptionsvalues: "primary",
      selectedBtnOptionsweight: "normal",
      btnOptions: {
        types: ["fill", "ghost", "outline", "ripple"],
        kinds: ["radius", "rounded", "square"],
        values: colors,
        weight: ["normal", "light", "bold"],
      },
      propsData,
    };
  },
  computed: {
    buttonDisabled() {
      if (this.checkboxDisabledChecked === true) {
        return ":disabled='disabled'";
      }
      return "";
    },
  },
  methods: {
    getImportContent() {
      return `
        import BIMDataButton from "@bimdata/design-system/src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
        ${
          this.checkboxIconChecked
            ? 'import BIMDataIconChevron from "@bimdata/design-system/src/BIMDataComponents/BIMDataIcon/BIMDataIconStandalone/BIMDataIconChevron.vue";'
            : ""
        }`;
    },
    getOverviewButtonClasses() {
      return `${this.selectedBtnOptionstypes} ${this.selectedBtnOptionsvalues} ${this.selectedBtnOptionskinds} ${this.selectedBtnOptionsweight}`;
    },
    getIcon() {
      if (this.checkboxIconChecked && this.checkboxTextChecked) {
        return '<BIMDataIconChevron size="xxxs" margin="0 12px 0 0" />';
      }
      if (this.checkboxIconChecked) {
        return '<BIMDataIconChevron size="xxxs"/>';
      }
    },
    getText() {
      if (this.checkboxTextChecked && this.checkboxIconChecked) {
        return `<span>Button ${this.selectedBtnOptionskinds} ${this.selectedBtnOptionstypes} ${this.selectedBtnOptionsvalues} ${this.selectedBtnOptionsweight} </span>`;
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
    getFontSizeBtn() {
      if (this.fontSizeButton != "15px") {
        return `size="${this.fontSizeButton}"`;
      }
    },
    getPaddingBtn() {
      if (this.paddingButton != "0px 1rem") {
        return `padding="${this.paddingButton}"`;
      }
    },
  },
};
</script>
