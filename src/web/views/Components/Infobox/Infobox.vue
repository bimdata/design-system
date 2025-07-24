<template>
  <main class="article article-infobox">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataInfobox
            :style="{ width: `${boxWidth}px` }"
            :text="text"
            :icon="icon"
            :color="color"
          />
        </template>

        <template #parameters>
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Box width (in px)"
            v-model="boxWidth"
          />
          <div class="m-t-24">
            <BIMDataTextarea
              style="width: 100%; resize: vertical"
              rows="8"
              label="Text"
              placeholder="Text"
              v-model="text"
            />
          </div>
          <div class="m-t-24">
            <BIMDataSelect
              margin="24px 0"
              label="Icon"
              :options="[
                'failed',
                'information',
                'location',
                'success',
                'translate',
                'user',
                'visa',
                'warning',
              ]"
              v-model="icon"
            />
          </div>
          <div class="m-t-24">
            <BIMDataSelect
              margin="24px 0"
              label="Color"
              :options="[
                'granite-light',
                'high',
                'neutral',
                'primary',
                'secondary',
                'success',
                'warning',
              ]"
              v-model="color"
            />
          </div>
        </template>

        <template #import>
          import BIMDataInfobox from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataInfobox/BIMDataInfobox.vue";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataInfobox
              :text="text"
              {{ `icon="${icon}"` }}
              {{ `color="${color}"` }}
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
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
  },
  data() {
    return {
      // Parameters
      boxWidth: 500,
      icon: "information",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
          "Nunc ut diam magna. Donec nec felis eget tellus pellentesque cursus sed et orci. " +
          "Nullam nec ex libero. Morbi elementum finibus metus, nec blandit enim.",
      color: "neutral",
      // Data
      propsData,
    };
  },
  inject: ["BIMDATA_DESIGN_SYSTEM_DARK_THEME"],
  computed: {
    currentTheme() {
      return this.BIMDATA_DESIGN_SYSTEM_DARK_THEME
        ? "theme-dark"
        : "theme-light";
    },
  },
};
</script>
