<template>
  <main class="article article-checkbox">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode
        :componentTitle="$route.name"
        language="javascript"
        codepenLink="https://codepen.io/bimdata/pen/dyMyvYW"
        githubLink="https://github.com/bimdata/design-system/blob/develop/src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue"
      >
        <template #module>
          <BIMDataCheckbox
            :text="getCheckboxText()"
            v-model="checked"
            :disabled="getCheckboxDisabled()"
          ></BIMDataCheckbox>
        </template>

        <template #parameters>
          <BIMDataCheckbox text="text" v-model="checkboxTextChecked">
          </BIMDataCheckbox>
          <BIMDataCheckbox text="disabled" v-model="checkboxDisabledChecked">
          </BIMDataCheckbox>
        </template>

        <template #import>
          import BIMDataCheckbox from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataCheckbox.js"
        </template>

        <template #code>
          <pre>
              &lt;BIMDataCheckbox
              :disabled="{{ getCheckboxDisabled() }}"
              text="Your label here"
              v-model="checked"&gt;
              &lt;/BIMDataCheckbox&gt;
            </pre
          >
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

import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataText,
    BIMDataCheckbox,
  },
  data() {
    return {
      checked: false,
      checkboxTextChecked: true,
      checkboxDisabledChecked: false,
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        [
          "text",
          "String",
          "null",
          "Use this props to add text next to the checkbox",
        ],
        [
          "state",
          "Boolean",
          "false",
          "Use this boolean to know if the checkbox is checked or not. If the state === 'null' then the state is 'indeterminate'",
        ],
        [
          "disabled",
          "Boolean",
          "false",
          "Use this props to disabled the checkbox",
        ],
      ],
    };
  },
  methods: {
    getCheckboxDisabled() {
      return this.checkboxDisabledChecked;
    },
    getCheckboxText() {
      if (this.checkboxTextChecked) {
        return "Your label here";
      }
    },
  },
};
</script>
