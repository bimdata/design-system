<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Folder />
  </Icon>
</template>

<script>
import Folder from "../BIMDataLibraryIcons/Folder.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Folder", Folder);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
