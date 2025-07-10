<template>
  <main class="article article-radio">
    <div class="article-wrapper">
      <BIMDataText
        component="h1"
        :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'"
      >
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
            :dark="isDark"
          />
          <BIMDataRadio
            text="Mode 1"
            value="v1"
            v-model="selectedValue"
            :disabled="isDisabled"
            :big="isBig"
            :dark="isDark"
          />
          <BIMDataRadio
            text="Mode 2"
            value="v2"
            v-model="selectedValue"
            :disabled="isDisabled"
            :big="isBig"
            :dark="isDark"
          />
          <div style="width: 100%; padding: 36px; text-align: center">
            {{ `Selected Value: ${selectedValue}` }}
          </div>
        </template>

        <template #parameters>
          <BIMDataCheckbox text="disabled" v-model="isDisabled" />
          <BIMDataCheckbox text="big" v-model="isBig" />
          <BIMDataCheckbox
            text="dark"
            :model-value="isDark"
            @update:modelValue="handleDarkCheckbox"
          />
          <BIMDataInput v-model="text" placeholder="Text for mode 0" />
          <BIMDataButton
            color="primary"
            rounded
            fill
            @click="resetRadio()"
            width="150px"
          >
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
              :dark="{{ isDark }}"
            /&gt;
            &lt;BIMDataRadio
              text="Mode 1"
              value="v1"
              v-model="selectedValue"
              :disabled="{{ isDisabled }}"
              :big="{{ isBig }}"
              :dark="{{ isDark }}"
            /&gt;
            &lt;BIMDataRadio
              text="Mode 2"
              value="v2"
              v-model="selectedValue"
              :disabled="{{ isDisabled }}"
              :big="{{ isBig }}"
              :dark="{{ isDark }}"
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
      isDarkManual: false,
      isDarkManuallySet: false,
      propsData,
      eventsData,
      slotsData,
    };
  },
  inject: ["theme"],
  computed: {
    currentTheme() {
      return this.theme.value;
    },
    isDark() {
      if (this.isDarkManuallySet) {
        return this.isDarkManual;
      }
      return this.currentTheme === "theme-dark";
    },
  },
  methods: {
    resetRadio() {
      this.selectedValue = null;
    },
    handleDarkCheckbox(val) {
      this.isDarkManual = val;
      this.isDarkManuallySet = true;
    },
  },
};
</script>
