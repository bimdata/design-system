<template>
  <main class="article article-radio">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode
        :componentTitle="$route.name"
        language="javascript"
        codepenLink="https://codepen.io/bimdata/pen/MWyWQep"
        githubLink="https://github.com/bimdata/design-system/blob/develop/src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue"
      >
        <template #module>
          <BIMDataRadio
            :text="text"
            value="v0"
            v-model="selectedValue"
            :disabled="checkboxDisabledChecked"
            :big="checkboxBigChecked"
          />
          <BIMDataRadio
            text="Mode 1"
            value="v1"
            v-model="selectedValue"
            :disabled="checkboxDisabledChecked"
            :big="checkboxBigChecked"
          />
          <BIMDataRadio
            text="Mode 2"
            value="v2"
            v-model="selectedValue"
            :disabled="checkboxDisabledChecked"
            :big="checkboxBigChecked"
          />
          <div style="width: 100%; padding: 36px; text-align: center">
            {{ `Selected Value: ${selectedValue}` }}
          </div>
        </template>

        <template #parameters>
          <BIMDataCheckbox text="disabled" v-model="checkboxDisabledChecked" />
          <BIMDataCheckbox text="big" v-model="checkboxBigChecked" />
          <BIMDataInput
            style="margin-top: 32px"
            v-model="text"
            placeholder="Text for mode 0"
          />
          <BIMDataButton color="primary" radius fill @click="resetRadio()">
            Reset
          </BIMDataButton>
        </template>

        <template #import>
          import BIMDataRadio from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataRadio.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataRadio
              text="{{ text }}"
              value="v0"
              v-model="selectedValue"
              :disabled="{{ checkboxDisabledChecked }}"
              :big="{{ checkboxBigChecked }}"
            /&gt;
            &lt;BIMDataRadio
              text="Mode 1"
              value="v1"
              v-model="selectedValue"
              :disabled="{{ checkboxDisabledChecked }}"
              :big="{{ checkboxBigChecked }}"
            /&gt;
            &lt;BIMDataRadio
              text="Mode 2"
              value="v2"
              v-model="selectedValue"
              :disabled="{{ checkboxDisabledChecked }}"
              :big="{{ checkboxBigChecked }}"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-24">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Events:</BIMDataText
        >
        <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";
import eventsData from "./events-data.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataButton from "../../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataButton,
    BIMDataCheckbox,
    BIMDataRadio,
    BIMDataText,
    BIMDataInput,
  },
  data() {
    return {
      text: "Mode 0",
      selectedValue: null,
      checkboxDisabledChecked: false,
      checkboxBigChecked: false,
      propsData,
      eventsData,
    };
  },
  methods: {
    resetRadio() {
      return (this.selectedValue = null);
    },
  },
};
</script>
