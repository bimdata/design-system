<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FolderPolychrome />
  </Icon>
</template>

<script>
import FolderPolychrome from "../../BIMDataLibraryIcons/polychrome/FolderPolychrome.vue";
import makeIcon from "../iconFactory.js";
export default makeIcon("FolderPolychrome", FolderPolychrome);
</script>

<style lang="scss" scoped src="../../../../assets/css/variables.css"></style>

<style lang="scss" src="../../_BIMDataIcon.scss"></style>
