<template>
  <main class="article article-textarea">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>

      <ComponentCode
        :componentTitle="$route.name"
        language="javascript"
        codepenLink="https://codepen.io/bimdata/pen/zYqYZrr"
        githubLink="https://github.com/bimdata/design-system/blob/develop/src/BIMDataComponents/BIMDataTextarea/BIMDataTextarea.vue"
      >
        <template #module>
          <BIMDataText
            :component="componentText"
            :color="selectedTextOptionscolor"
            :fontSize="fontSizeText"
            :lineHeight="lineHeightText"
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            <BIMDataText
              :component="'span'"
              color="color-primary"
              fontWeight="primary-font-bold"
              >reprehenderit</BIMDataText
            >
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."</BIMDataText
          >
        </template>

        <template #parameters>
          <div v-for="[key, values] in Object.entries(textOptions)" :key="key">
            <h5 class="bimdata-h5">{{ key }}</h5>
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
            <h5 class="bimdata-h5">Component</h5>
            <BIMDataInput
              @change="componentText = $event.currentTarget.value"
              :modelValue="componentText"
              placeholder="Heading elements or text block (don't forget to press enter)"
            ></BIMDataInput>
          </div>
          <div>
            <h5 class="bimdata-h5">Font size</h5>
            <BIMDataInput
              v-model="fontSizeText"
              placeholder="Change font-size"
            ></BIMDataInput>
          </div>
          <div>
            <h5 class="bimdata-h5">Line-height</h5>
            <BIMDataInput
              v-model="lineHeightText"
              placeholder="Change line-height"
            ></BIMDataInput>
          </div>
        </template>

        <template #import>
          import BIMDataText from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataText.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataTextarea
              label="textarea label"
              name="example"
              v-model="textarea"
              :autofocus="{{ getAutofocus() }}"
              :placeholder="{{ getPlaceholder() }}"
              :disabled="{{ getDisabled() }}"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
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
      componentText: "p",
      fontSizeText: "14px",
      lineHeightText: "18px",
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
          "name",
          "[String, Number]",
          "null",
          "Use this props to give a name to your textarea. Be careful, this props also serves for the id of the textarea, as well as for the 'for' of the label.",
        ],
        [
          "autofocus",
          "Boolean",
          "false",
          "Use this boolean to add an autofocus on your textarea.",
        ],
        [
          "placeholder",
          "String",
          "null",
          "Use this props to add a placeholder to your textarea.",
        ],
        [
          "label",
          "String",
          "' '",
          "Use this props to add a label to your textarea.",
        ],
        [
          "width",
          "[Number, String]",
          "150px",
          "Use this props to change the width of the textarea component.",
        ],
        [
          "height",
          "[Number, String]",
          "32px",
          "Use this props to change the height of the textarea component.",
        ],
        [
          "disabled",
          "Boolean",
          "false",
          "Use this boolean to disabled your textarea.",
        ],
      ],
    };
  },
  methods: {
    getAutofocus() {
      if (this.autofocus) {
        return true;
      } else {
        return false;
      }
    },
    getPlaceholder() {
      if (this.placeholder) {
        this.placeholder = true;
        return "placeholder here";
      }
    },
    getDisabled() {
      if (this.disabled) {
        return true;
      } else {
        return false;
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
