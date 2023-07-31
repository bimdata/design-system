<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FileIfcPolychrome />
  </Icon>
</template>

<script>
import FileIfcPolychrome from "../../BIMDataLibraryIcons/polychrome/FileIfcPolychrome.vue";
import makeIcon from "../iconFactory.js";
export default makeIcon("FileIfcPolychrome", FileIfcPolychrome);
</script>

<style lang="scss" scoped src="../../../../assets/css/variables.css"></style>

<style lang="scss" src="../../_BIMDataIcon.scss"></style>
