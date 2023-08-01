<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <StructurePolychrome />
  </Icon>
</template>

<script>
import StructurePolychrome from "../BIMDataLibraryIcons/polychrome/StructurePolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("StructurePolychrome", StructurePolychrome);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
