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
import FileJpegPolychrome from "../BIMDataLibraryIcons/polychrome/FileJpegPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FileJpegPolychrome", FileJpegPolychrome);
</script>

<style scoped src="../BIMDataIcon.css"></style>
