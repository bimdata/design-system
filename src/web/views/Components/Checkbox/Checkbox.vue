<template>
  <main class="article article-checkbox">
    <div class="article-wrapper">
      <BIMDataText
        component="h1"
        :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'"
      >
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode
        :componentTitle="$route.name"
        :class="{ 'bimdata-ds__demo__quaternary': checkboxDarkmodeChecked }"
        language="javascript"
        codepenLink="https://codepen.io/bimdata/pen/dyMyvYW"
        githubLink="https://github.com/bimdata/design-system/blob/develop/src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue"
      >
        <template #module>
          <BIMDataCheckbox
            :text="getCheckboxText()"
            v-model="checked"
            :margin="marginInput"
            :disabled="getCheckboxDisabled()"
            :dark="checkboxDarkmodeChecked"
          />
        </template>

        <template #parameters>
          <BIMDataCheckbox
            text="text"
            v-model="checkboxTextChecked"
            :dark="currentTheme === 'theme-dark' ? true : false"
          />
          <BIMDataCheckbox
            text="disabled"
            v-model="checkboxDisabledChecked"
            :dark="currentTheme === 'theme-dark' ? true : false"
          />
          <BIMDataCheckbox
            text="dark"
            v-model="checkboxDarkmodeChecked"
            :dark="currentTheme === 'theme-dark' ? true : false"
          />

          <BIMDataInput
            v-model="marginInput"
            label="Change margin"
            backgroundColor="white"
            :dark="currentTheme === 'theme-dark' ? true : false"
          />
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
              :dark="{{ checkboxDarkmodeChecked }}"
              margin="{{ marginInput }}"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" margin="15px 0 0" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'" margin="15px 0 10px">
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
      checkboxDarkmodeChecked: false,
      marginInput: "0px",
      // Data
      propsData,
      eventsData,
    };
  },
  inject: ["theme"],
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
  computed: {
    currentTheme() {
      return this.theme.value;
    },
  },
};
</script>

<style scoped>
.bimdata-ds__demo__quaternary {
  &:deep(.bimdata-ds__demo__module) {
    background-color: var(--color-quaternary);
  }
}
</style>
