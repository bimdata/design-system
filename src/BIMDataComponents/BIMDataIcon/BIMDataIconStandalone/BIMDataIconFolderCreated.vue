<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FolderCreated />
  </Icon>
</template>

<script>
import FolderCreated from "../BIMDataLibraryIcons/FolderCreated.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FolderCreated", FolderCreated);
</script>

<style scoped src="../_BIMDataIcon.scss"></style>
