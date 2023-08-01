<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FilePngPolychrome />
  </Icon>
</template>

<script>
import FilePngPolychrome from "../BIMDataLibraryIcons/polychrome/FilePngPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FilePngPolychrome", FilePngPolychrome);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
