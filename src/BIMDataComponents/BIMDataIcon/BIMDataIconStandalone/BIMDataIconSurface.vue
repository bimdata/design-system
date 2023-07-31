<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Surface />
  </Icon>
</template>

<script>
import Surface from "../BIMDataLibraryIcons/Surface.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Surface", Surface);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
