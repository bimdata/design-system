<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <AddFile />
  </Icon>
</template>

<script>
import AddFile from "../BIMDataLibraryIcons/AddFile.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("AddFile", AddFile);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
