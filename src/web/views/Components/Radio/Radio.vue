<template>
  <main class="article article-radio">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode
        :componentTitle="$route.name"
        language="javascript"
        codepenLink="https://codepen.io/bimdata/pen/MWyWQep"
        githubLink="https://github.com/bimdata/design-system/blob/develop/src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue"
      >
        <template #module>
          <BIMDataRadio
            text="click on me !"
            id="radiotest"
            value="radiotest"
            v-model="selectedMode"
            :disabled="checkboxDisabledChecked"
          ></BIMDataRadio>
        </template>

        <template #parameters>
          <BIMDataCheckbox
            class="m-b-12"
            text="disabled"
            v-model="checkboxDisabledChecked"
          >
          </BIMDataCheckbox>
          <BIMDataButton color="primary" radius fill @click="resetRadio()"
            >Reset radio button</BIMDataButton
          >
        </template>

        <template #import>
          import BIMDataRadio from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataRadio.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataRadio
            text="click on me !"
            id="radiotest"
            value="radiotest"
            v-model="selectedMode"
            :disabled="checkboxDisabledChecked"&gt;
          &lt;/BIMDataRadio&gt;
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

import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataButton from "../../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataButton,
    BIMDataCheckbox,
    BIMDataRadio,
    BIMDataText,
  },
  data() {
    return {
      selectedMode: null,
      checkboxDisabledChecked: false,
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        ["text", "String", "null", "Use this props to add a label text"],
        ["name", "String", "'option'", ""],
        ["id", "String", "/", ""],
        ["value", "String", "/", ""],
        ["selectedValue", "String", "/", ""],
      ],
    };
  },
  methods: {
    resetRadio() {
      return (this.selectedMode = null);
    },
  },
};
</script>
