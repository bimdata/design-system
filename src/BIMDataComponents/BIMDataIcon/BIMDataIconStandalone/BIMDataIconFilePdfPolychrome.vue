<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FilePdfPolychrome />
  </Icon>
</template>

<script>
import FilePdfPolychrome from "../BIMDataLibraryIcons/polychrome/FilePdfPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FilePdfPolychrome", FilePdfPolychrome);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
