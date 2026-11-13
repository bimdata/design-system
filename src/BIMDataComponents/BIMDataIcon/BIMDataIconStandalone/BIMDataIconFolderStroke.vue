<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FolderStroke />
  </Icon>
</template>

<script>
import FolderStroke from "../BIMDataLibraryIcons/FolderStroke.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("FolderStroke", FolderStroke);
</script>

<style scoped src="../BIMDataIcon.css"></style>
