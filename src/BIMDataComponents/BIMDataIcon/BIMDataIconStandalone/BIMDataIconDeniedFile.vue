<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DeniedFile />
  </Icon>
</template>

<script>
import DeniedFile from "../BIMDataLibraryIcons/DeniedFile.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("DeniedFile", DeniedFile);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
