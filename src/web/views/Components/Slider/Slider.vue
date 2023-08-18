<template>
  <main class="article slider">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <div class="m-t-24">
            <BIMDataSlider v-model="slider" min="0" max="100" />
          </div>
        </template>

        <template #parameters> </template>

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
      slider: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>
