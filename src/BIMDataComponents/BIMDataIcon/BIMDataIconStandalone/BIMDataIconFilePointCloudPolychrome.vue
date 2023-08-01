<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FilePointCloudPolychrome />
  </Icon>
</template>

<script>
import FilePointCloudPolychrome from "../BIMDataLibraryIcons/polychrome/FilePointCloudPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FilePointCloudPolychrome", FilePointCloudPolychrome);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
