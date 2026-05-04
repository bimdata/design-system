<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FolderMoved />
  </Icon>
</template>

<script>
import FolderMoved from "../BIMDataLibraryIcons/FolderMoved.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FolderMoved", FolderMoved);
</script>

<style scoped src="../BIMDataIcon.css"></style>
