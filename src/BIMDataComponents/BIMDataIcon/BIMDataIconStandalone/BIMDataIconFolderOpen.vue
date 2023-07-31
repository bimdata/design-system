<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FolderOpen />
  </Icon>
</template>

<script>
import FolderOpen from "../BIMDataLibraryIcons/FolderOpen.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("FolderOpen", FolderOpen);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
