<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FolderDeleted />
  </Icon>
</template>

<script>
import FolderDeleted from "../BIMDataLibraryIcons/FolderDeleted.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FolderDeleted", FolderDeleted);
</script>

<style scoped src="../BIMDataIcon.css"></style>
