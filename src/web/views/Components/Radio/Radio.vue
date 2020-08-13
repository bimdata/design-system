<template>
  <main class="article article-radio">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>

      <ComponentCode :componentTitle="$route.name" language="javascript" codepenLink="https://codepen.io/bimdata/pen/MWyWQep" githubLink="https://github.com/bimdata/design-system/blob/develop/src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue">
        <template #module>
          <BIMDataRadio
            text="click on me !"
            id="radiotest"
            value="radiotest"
            v-model="selectedMode"
          ></BIMDataRadio>
        </template>

        <template #parameters>
          <BIMDataButton
            color="primary"
            radius
            fill
            @click="resetRadio()"
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
            v-model="selectedMode"&gt;
          &lt;/BIMDataRadio&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataButton from "../../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataRadio,
    BIMDataButton,
  },
  data() {
    return {
      selectedMode: null,
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
