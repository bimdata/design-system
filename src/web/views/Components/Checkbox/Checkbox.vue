<template>
  <main class="article article-checkbox">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
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
          />
        </template>

        <template #parameters>
          <BIMDataCheckbox text="text" v-model="checkboxTextChecked" />
          <BIMDataCheckbox text="disabled" v-model="checkboxDisabledChecked" />
        </template>

        <template #import>
          import BIMDataCheckbox from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue"
        </template>

        <template #code>
          <pre>
            &lt;BIMDataCheckbox
              :disabled="{{ getCheckboxDisabled() }}"
              text="Your label here"
              v-model="checked"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" margin="15px 0 0" color="color-primary">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Events:
        </BIMDataText>
        <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import eventsData from "./events-data.js";
import propsData from "./props-data.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
  },
  data() {
    return {
      checked: false,
      checkboxTextChecked: true,
      checkboxDisabledChecked: false,
      margin: "0px",
      // Data
      propsData,
      eventsData,
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
