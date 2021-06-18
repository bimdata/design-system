<template>
  <main class="article article-textarea">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode
        :componentTitle="$route.name"
        language="javascript"
        codepenLink="https://codepen.io/bimdata/pen/zYqYZrr"
        githubLink="https://github.com/bimdata/design-system/blob/develop/src/BIMDataComponents/BIMDataTextarea/BIMDataTextarea.vue"
      >
        <template #module>
          <BIMDataText
            :component="selectedTextComponent"
            :color="selectedTextOptionscolor"
            :display="displayText"
            :fontSize="fontSizeText"
            :fontWeight="selectedTextFontWeight"
            :lineHeight="lineHeightText"
            :margin="marginText"
            :padding="paddingText"
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            <BIMDataText
              component="span"
              color="color-primary"
              fontWeight="primary-font-bold"
              >reprehenderit</BIMDataText
            >
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </BIMDataText>
        </template>

        <template #parameters>
          <div v-for="[key, values] in Object.entries(textOptions)" :key="key">
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
              v-model="$data[`selectedTextOptions${key}`]"
            >
            </BIMDataRadio>
          </div>
          <div class="article-text__component">
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Component</BIMDataText
            >
            <BIMDataRadio
              v-for="componentText in componentsText"
              :key="componentText"
              :text="componentText"
              :id="componentText"
              :value="componentText"
              :name="componentText"
              v-model="selectedTextComponent"
            >
            </BIMDataRadio>
            <p>
              By default, BIMData has set font-size / line-height for each title
              / text block above. If you want to configure yours, and override
              those of BIMData, use the 2 inputs below
            </p>
          </div>
          <div>
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Font size</BIMDataText
            >
            <BIMDataInput
              v-model="fontSizeText"
              placeholder="Change font-size (in px or em)"
            ></BIMDataInput>
          </div>
          <div>
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Line-height</BIMDataText
            >
            <BIMDataInput
              v-model="lineHeightText"
              placeholder="Change line-height (in px or em)"
            ></BIMDataInput>
          </div>
          <div>
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Font-weight</BIMDataText
            >
            <BIMDataRadio
              v-for="value in fontWeightText"
              :key="value"
              :text="value"
              :id="value"
              :value="value"
              :name="value"
              v-model="selectedTextFontWeight"
            >
            </BIMDataRadio>
          </div>
          <div>
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Display</BIMDataText
            >
            <BIMDataInput
              v-model="displayText"
              placeholder="Change display CSS property"
            ></BIMDataInput>
          </div>
          <div>
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Margin</BIMDataText
            >
            <BIMDataInput
              v-model="marginText"
              placeholder="Change margin"
            ></BIMDataInput>
          </div>
          <div>
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Padding</BIMDataText
            >
            <BIMDataInput
              v-model="paddingText"
              placeholder="Change padding"
            ></BIMDataInput>
          </div>
        </template>

        <template #import>
          import BIMDataText from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataText.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataText
            {{ getComponent() }}
            {{ getColor() }}
            {{ getDisplay() }}
            {{ getFontWeight() }}
            {{ getFontSize() }}
            {{ getLineHeight() }}
            {{ getMargin() }}
            {{ getPadding() }}
          &gt;
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
              &lt;BIMDataText component="span" color="color-primary" fontWeight="primary-font-bold"&gt;reprehenderit&lt;/BIMDataText&gt;
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          &lt;/BIMDataText&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Props:</BIMDataText
        >
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";

import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataRadio,
    BIMDataText,
    BIMDataInput,
  },
  data() {
    return {
      textarea: null,
      autofocus: false,
      placeholder: false,
      disabled: false,
      selectedTextOptionscolor: "color-tertiary-dark",
      selectedTextFontWeight: "primary-font",
      selectedTextComponent: "p",
      displayText: "inline-block",
      fontSizeText: "",
      lineHeightText: "",
      marginText: "",
      paddingText: "",
      fontWeightText: [
        "primary-font",
        "primary-font-medium",
        "primary-font-bold",
      ],
      componentsText: ["h1", "h2", "h3", "h4", "h5", "p"],
      textOptions: {
        color: [
          "color-primary",
          "color-secondary",
          "color-tertiary",
          "color-tertiary-lightest",
          "color-tertiary-dark",
          "color-tertiary-darkest",
          "color-white",
          "color-black",
          "color-high",
          "color-warning",
          "color-success",
          "color-neutral",
          "color-disabled",
        ],
      },
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        [
          "component",
          "String",
          "p",
          "Use this prop to use a particular title / text block. For example: h1, h2, p, span...",
        ],
        [
          "display",
          "String",
          "inline-block",
          "Use this prop to customize the display of the text block",
        ],
        [
          "fontWeight",
          "String",
          "primary-font",
          "Use this prop to customize the font-weight of the text block",
        ],
        [
          "fontSize",
          "String",
          "14px",
          "Use this prop to customize the font-size of the text block. By default, a font-size is assigned for each h1, h2, h3, h4, h5 and p. But if you use this prop you can override it",
        ],
        [
          "lineHeight",
          "String",
          "18px",
          "Use this prop to customize the line-height of the text block. By default, a line-height is assigned for each h1, h2, h3, h4, h5 and p. But if you use this prop you can override it",
        ],
        [
          "margin",
          "String",
          "0px",
          "Use this prop to customize the margin of the text block.",
        ],
        [
          "padding",
          "String",
          "0px",
          "Use this prop to customize the padding of the text block.",
        ],
        [
          "color",
          "String",
          "color-tertiary-dark",
          "Use this prop to customize the color of the text block. To know the authorized values, refer to the 'COLOR UTILITY CLASS' line of the Guidelines & Utilities ; Colors page.",
        ],
      ],
    };
  },
  methods: {
    getColor() {
      if (this.selectedTextOptionscolor != "color-tertiary-darkest") {
        return `color="${this.selectedTextOptionscolor}"`;
      }
    },
    getComponent() {
      if (this.selectedTextComponent != "p") {
        return `component="${this.selectedTextComponent}"`;
      }
    },
    getDisplay() {
      if (this.displayText != "inline-block") {
        return `display="${this.displayText}"`;
      }
    },
    getFontSize() {
      if (this.fontSizeText != "") {
        return `fontSize="${this.fontSizeText}"`;
      }
    },
    getLineHeight() {
      if (this.lineHeightText != "") {
        return `lineHeight="${this.lineHeightText}"`;
      }
    },
    getFontWeight() {
      if (this.selectedTextFontWeight != "primary-font") {
        return `fontWeight="${this.selectedTextFontWeight}"`;
      }
    },
    getMargin() {
      if (this.marginText != "") {
        return `margin="${this.marginText}"`;
      }
    },
    getPadding() {
      if (this.paddingText != "") {
        return `padding="${this.paddingText}"`;
      }
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
@import "./_Text.scss";
</style>
