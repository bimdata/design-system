<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FolderLocation />
  </Icon>
</template>

<script>
import FolderLocation from "../BIMDataLibraryIcons/FolderLocation.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("FolderLocation", FolderLocation);
</script>

<style scoped src="../BIMDataIcon.css"></style>
