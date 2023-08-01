<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <BcfPolychrome />
  </Icon>
</template>

<script>
import BcfPolychrome from "../BIMDataLibraryIcons/polychrome/BcfPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("BcfPolychrome", BcfPolychrome);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
