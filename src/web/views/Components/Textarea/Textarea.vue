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
            :autofocus="autofocus"
            :placeholder="getPlaceholder()"
            :disabled="disabled"
            :readonly="readonly"
            :fitContent="fitContent"
            :resizable="resizable"
            :success="success"
            :successMessage="successMessage"
            :error="error"
            :errorMessage="errorMessage"
          />
        </template>

        <template #parameters>
          <BIMDataCheckbox text="autofocus" v-model="autofocus" />
          <BIMDataCheckbox text="placeholder" v-model="placeholder" />
          <BIMDataCheckbox text="disabled" v-model="disabled" />
          <BIMDataCheckbox text="readonly" v-model="readonly" />
          <BIMDataCheckbox text="fitContent" v-model="fitContent" />
          <BIMDataCheckbox text="resizable" v-model="resizable" />
          <BIMDataCheckbox text="success" v-model="success" />
          <BIMDataInput v-model="successMessage" placeholder="successMessage" />
          <BIMDataCheckbox text="error" v-model="error" />
          <BIMDataInput v-model="errorMessage" placeholder="errorMessage" />
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
              {{ resizable ? "resizable" : "" }}
              {{ success ? "success" : "" }}
              {{ successMessage ? "successMessage" : "" }}
              {{ error ? "error" : "" }}
              {{ errorMessage ? "errorMessage" : "" }}
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0"
          >Props:</BIMDataText
        >
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
        <div class="m-t-24">
          <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
            >Events:</BIMDataText
          >
          <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
        </div>
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0"
          >nota bene:
        </BIMDataText>
        <BIMDataText component="span" color="color-primary" margin="15px 5px">
          This component use the $attrs attribute provided by Vue. Therefore all
          native attribute of this tag are workable.
          <a
            href="https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance"
            target="_blank"
            >More info about $attrs</a
          ></BIMDataText
        >
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataTextarea from "../../../../../src/BIMDataComponents/BIMDataTextarea/BIMDataTextarea.vue";

export default {
  components: {
    ComponentCode,
    BIMDataCheckbox,
    BIMDataTable,
    BIMDataText,
    BIMDataTextarea,
    BIMDataInput,
  },
  data() {
    return {
      textarea: null,
      autofocus: false,
      placeholder: false,
      disabled: false,
      readonly: false,
      fitContent: false,
      resizable: true,
      success: false,
      successMessage: "",
      error: false,
      errorMessage: "",
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        [
          "name",
          "[String, Number]",
          "null",
          "Use this props to give a name to your textarea. Be careful, this props also serves for the id of the textarea, as well as for the 'for' of the label.",
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
          "fitContent",
          "Boolean",
          "false",
          "Use this boolean to make textarea fit the content",
        ],
        [
          "resizable",
          "Boolean",
          "true",
          "Use this boolean to make textarea resizable",
        ],
        [
          "success",
          "Boolean",
          "false",
          "Use this boolean to make textarea color green (success)",
        ],
        [
          "successMessage",
          "String",
          "",
          "Use this props to add a green text (success)",
        ],
        [
          "error",
          "Boolean",
          "false",
          "Use this boolean to make textarea color red (error)",
        ],
        [
          "errorMessage",
          "String",
          "",
          "Use this props to add a red text (error)",
        ],
      ],
      eventsData: [
        ["Event name", "Payload"],
        ["update:modelValue", "The input value."],
      ],
    };
  },
  methods: {
    getPlaceholder() {
      if (this.placeholder) {
        this.placeholder = true;
        return "placeholder here";
      }
    },
  },
};
</script>
