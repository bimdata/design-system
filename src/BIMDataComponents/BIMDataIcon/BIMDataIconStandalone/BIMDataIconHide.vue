<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Hide />
  </Icon>
</template>

<script>
import Hide from "../BIMDataLibraryIcons/Hide.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Hide", Hide);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
