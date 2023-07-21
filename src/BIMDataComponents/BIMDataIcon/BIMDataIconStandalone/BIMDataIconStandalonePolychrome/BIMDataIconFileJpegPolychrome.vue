<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FileJpegPolychrome />
  </Icon>
</template>

<script>
import FileJpegPolychrome from "../../BIMDataLibraryIcons/polychrome/FileJpegPolychrome.vue";
import makeIcon from "../iconFactory.js";
export default makeIcon("FileJpegPolychrome", FileJpegPolychrome);
</script>

<style lang="scss" scoped src="../../../../assets/css/variables.css"></style>

<style lang="scss" src="../../_BIMDataIcon.scss"></style>
