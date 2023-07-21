<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Import />
  </Icon>
</template>

<script>
import Import from "../BIMDataLibraryIcons/Import.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Import", Import);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
