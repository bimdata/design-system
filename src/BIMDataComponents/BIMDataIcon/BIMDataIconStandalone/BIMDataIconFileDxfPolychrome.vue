<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FileDxfPolychrome />
  </Icon>
</template>

<script>
import FileDxfPolychrome from "../BIMDataLibraryIcons/polychrome/FileDxfPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FileDxfPolychrome", FileDxfPolychrome);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
