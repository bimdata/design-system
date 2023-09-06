<template>
  <main class="article slider">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <div class="m-t-24">
            <BIMDataSlider v-model="slider" :min="minRange" :max="maxRange" />
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
            v-model="slider"
          />
        </template>

        <template #import>
          import BIMDataSlider from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataSlider/BIMDataSlider.vue";
        </template>

        <template #code> </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
