<template>
  <main class="article color-selector">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <div class="setting-card-item">
            <div
              class="setting-card-item__color"
              :style="{
                'background-color': `#${color}`,
              }"
              @click="displayColorSelector = true"
            ></div>
            <BIMDataColorSelector
              v-if="displayColorSelector"
              v-clickaway="() => (displayColorSelector = false)"
              class="setting-card-item__color-selector"
              :modelValue="color"
              @update:modelValue="updateColorSelector($event)"
            />
          </div>
        </template>

        <template #import>
          import BIMDataColorSelector from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataColorSelector/BIMDataColorSelector.vue"
        </template>

        <template #code>
          <pre>
            &lt;div class="setting-card-item"&gt;
              &lt;div
                class="setting-card-item__color"
                :style="{
                  'background-color': `#${color}`,
                }"
                @click="displayColorSelector = true"
              &gt;&lt;/div&gt;
              &lt;BIMDataColorSelector
                v-if="displayColorSelector"
                class="setting-card-item__color-selector"
                :modelValue="color"
                @update:modelValue="updateColorSelector($event)"
              /&gt;
            &lt;/div&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
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

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Functions:
        </BIMDataText>
        <BIMDataTable
          :columns="functionsData[0]"
          :rows="functionsData.slice(1)"
        />
      </div>
    </div>
  </main>
</template>

<script>
import eventsData from "./events-data.js";
import functionsData from "./functions-data.js";
import propsData from "./props-data.js";

import clickaway from "../../../../BIMDataDirectives/click-away.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
  },
  directives: { clickaway },
  data() {
    return {
      displayColorSelector: false,
      color: "c0c0c0",
      propsData,
      eventsData,
      functionsData,
    };
  },
  inject: ["BIMDATA_DESIGN_SYSTEM_DARK_THEME"],
  methods: {
    updateColorSelector($event) {
      console.log("update color", $event);
      this.color = $event;
    },
  },
  computed: {
    currentTheme() {
      return this.BIMDATA_DESIGN_SYSTEM_DARK_THEME
        ? "theme-dark"
        : "theme-light";
    },
  },
};
</script>

<style scoped lang="scss" src="./_ColorSelector.scss"></style>
