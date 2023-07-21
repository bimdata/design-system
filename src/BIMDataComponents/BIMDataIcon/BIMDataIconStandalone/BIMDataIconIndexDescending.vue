<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <IndexDescending />
  </Icon>
</template>

<script>
import IndexDescending from "../BIMDataLibraryIcons/IndexDescending.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("IndexDescending", IndexDescending);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
