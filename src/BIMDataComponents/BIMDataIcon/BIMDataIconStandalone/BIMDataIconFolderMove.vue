<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FolderMove />
  </Icon>
</template>

<script>
import FolderMove from "../BIMDataLibraryIcons/FolderMove.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("FolderMove", FolderMove);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
