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
import FileImagePolychrome from "../BIMDataLibraryIcons/polychrome/FileImagePolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FileImagePolychrome", FileImagePolychrome);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
