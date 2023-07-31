<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ValidatedFile />
  </Icon>
</template>

<script>
import ValidatedFile from "../BIMDataLibraryIcons/ValidatedFile.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("ValidatedFile", ValidatedFile);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
