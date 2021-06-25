<template>
  <main class="article article-releases">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
    </div>
  </main>
</template>

<script>
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    BIMDataText,
  },
};
</script>

<style lang="scss" scoped></style>
