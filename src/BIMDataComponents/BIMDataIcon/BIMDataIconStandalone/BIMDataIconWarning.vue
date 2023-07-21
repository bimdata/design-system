<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Warning />
  </Icon>
</template>

<script>
import Warning from "../BIMDataLibraryIcons/Warning.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Warning", Warning);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
