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
            :disabled="isDisabled"
            :big="isBig"
          />
          <BIMDataRadio
            text="Mode 1"
            value="v1"
            v-model="selectedValue"
            :disabled="isDisabled"
            :big="isBig"
          />
          <BIMDataRadio
            text="Mode 2"
            value="v2"
            v-model="selectedValue"
            :disabled="isDisabled"
            :big="isBig"
          />
          <div style="width: 100%; padding: 36px; text-align: center">
            {{ `Selected Value: ${selectedValue}` }}
          </div>
        </template>

        <template #parameters>
          <BIMDataCheckbox text="disabled" v-model="isDisabled" />
          <BIMDataCheckbox text="big" v-model="isBig" />
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
          "@bimdata/design-system/src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataRadio
              text="{{ text }}"
              value="v0"
              v-model="selectedValue"
              :disabled="{{ isDisabled }}"
              :big="{{ isBig }}"
            /&gt;
            &lt;BIMDataRadio
              text="Mode 1"
              value="v1"
              v-model="selectedValue"
              :disabled="{{ isDisabled }}"
              :big="{{ isBig }}"
            /&gt;
            &lt;BIMDataRadio
              text="Mode 2"
              value="v2"
              v-model="selectedValue"
              :disabled="{{ isDisabled }}"
              :big="{{ isBig }}"
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
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Events:
        </BIMDataText>
        <BIMDataTable :columns="eventsData[0]" :rows="eventsData.slice(1)" />
      </div>

      <div class="m-t-24">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Slots:
        </BIMDataText>
        <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";
import eventsData from "./events-data.js";
import slotsData from "./slots-data.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
  },
  data() {
    return {
      text: "Mode 0",
      selectedValue: null,
      isDisabled: false,
      isBig: false,
      propsData,
      eventsData,
      slotsData,
    };
  },
  methods: {
    resetRadio() {
      this.selectedValue = null;
    },
  },
};
</script>
