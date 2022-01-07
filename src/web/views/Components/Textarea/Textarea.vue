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
          <BIMDataTextarea
            label="textarea label"
            name="example"
            v-model="textarea"
            :autofocus="getAutofocus()"
            :placeholder="getPlaceholder()"
            :disabled="getDisabled()"
            :readonly="getReadonly()"
            :fitContent="getFitContent()"
          />
        </template>

        <template #parameters>
          <BIMDataCheckbox text="autofocus" v-model="autofocus" />
          <BIMDataCheckbox text="placeholder" v-model="placeholder" />
          <BIMDataCheckbox text="disabled" v-model="disabled" />
          <BIMDataCheckbox text="readonly" v-model="readonly" />
          <BIMDataCheckbox text="fitContent" v-model="fitContent" />
        </template>

        <template #import>
          import BIMDataTextarea from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataTextarea.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataTextarea
              label="textarea label"
              name="example"
              v-model="textarea"
              {{ autofocus ? ':autofocus="true"' : "" }}
              {{ placeholder ? ':placeholder="true"' : "" }}
              {{ disabled ? ':disabled="true"' : "" }}
              {{ readonly ? ':readonly="true"' : "" }}
              {{ fitContent ? "fitContent" : "" }}


            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0"
          >Props:</BIMDataText
        >
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataTextarea from "../../../../../src/BIMDataComponents/BIMDataTextarea/BIMDataTextarea.vue";

export default {
  components: {
    ComponentCode,
    BIMDataCheckbox,
    BIMDataTable,
    BIMDataText,
    BIMDataTextarea,
  },
  data() {
    return {
      textarea: null,
      autofocus: false,
      placeholder: false,
      disabled: false,
      readonly: false,
      fitContent: false,
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
        [
          "readonly",
          "Boolean",
          "false",
          "Use this boolean to make your textarea readonly.",
        ],
        [
          "fitContent",
          "Boolean",
          "false",
          "Use this boolean to make textarea fit the content",
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
    getReadonly() {
      if (this.readonly) {
        return true;
      } else {
        return false;
      }
    },
    getFitContent() {
      if (this.fitContent) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
