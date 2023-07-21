<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FileImagePolychrome />
  </Icon>
</template>

<script>
import FileImagePolychrome from "../../BIMDataLibraryIcons/polychrome/FileImagePolychrome.vue";
import makeIcon from "../iconFactory.js";
export default makeIcon("FileImagePolychrome", FileImagePolychrome);
</script>

<style lang="scss" scoped src="../../../../assets/css/variables.css"></style>

<style lang="scss" src="../../_BIMDataIcon.scss"></style>
