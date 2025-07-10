<template>
  <main class="article slider">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <div class="m-t-24">
            <BIMDataSlider
              v-model="slider"
              :min="minRange"
              :max="maxRange"
              :step="step"
              :tooltip="tooltip"
            />
          </div>
        </template>

        <template #parameters>
          <BIMDataInput
            type="number"
            placeholder="Min range"
            v-model="minRange"
          />
          <BIMDataInput
            type="number"
            placeholder="Max range"
            v-model="maxRange"
          />
          <BIMDataInput
            type="number"
            placeholder="Slider default value"
            :modelValue="slider"
            @update:modelValue="slider = +$event"
          />
          <BIMDataInput type="number" placeholder="Step value" v-model="step" />
          <BIMDataCheckbox text="Tooltip" v-model="tooltip" />
        </template>

        <template #import>
          import BIMDataSlider from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataSlider/BIMDataSlider.vue";
        </template>

        <template #code>
          &lt;BIMDataSlider v-model="{{ slider }}" :min="{{ minRange }}"
          :max="{{ maxRange }}" :step="{{ step }}" :tooltip="{{ tooltip }}"
          /&gt;
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Props:
        </BIMDataText>
        <BIMDataTable
          :rowHeight="36"
          :columns="propsData[0]"
          :rows="propsData.slice(1)"
        />
      </div>
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
          Events:
        </BIMDataText>
        <BIMDataTable
          :rowHeight="36"
          :columns="eventsData[0]"
          :rows="eventsData.slice(1)"
        />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";
import eventsData from "./events-data.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
  },
  data() {
    return {
      slider: 40,
      minRange: 0,
      maxRange: 100,
      step: null,
      tooltip: false,
      propsData,
      eventsData,
    };
  },
  inject: ["theme"],
  computed: {
    currentTheme() {
      return this.theme.value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
