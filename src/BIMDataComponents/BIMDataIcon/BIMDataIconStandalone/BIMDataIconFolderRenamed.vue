<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FolderRenamed />
  </Icon>
</template>

<script>
import FolderRenamed from "../BIMDataLibraryIcons/FolderRenamed.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FolderRenamed", FolderRenamed);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
