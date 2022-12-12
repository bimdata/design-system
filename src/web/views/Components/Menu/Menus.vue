<template>
  <main class="article menu">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>

      <MenuInline />
      <BasicMenu />
    </div>
  </main>
</template>

<script>
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

import MenuInline from "./MenuInline.vue";
import BasicMenu from "./BasicMenu.vue";

export default {
  components: {
    BIMDataText,
    MenuInline,
    BasicMenu,
  },
};
</script>

<style lang="scss" scoped></style>
