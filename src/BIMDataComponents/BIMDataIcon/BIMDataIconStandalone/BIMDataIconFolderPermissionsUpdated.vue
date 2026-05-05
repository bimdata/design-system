<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FolderPermissionsUpdated />
  </Icon>
</template>

<script>
import FolderPermissionsUpdated from "../BIMDataLibraryIcons/FolderPermissionsUpdated.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FolderPermissionsUpdated", FolderPermissionsUpdated);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
