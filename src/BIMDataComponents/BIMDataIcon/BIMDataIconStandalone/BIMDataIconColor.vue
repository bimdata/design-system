<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Color />
  </Icon>
</template>

<script>
import Color from "../BIMDataLibraryIcons/Color.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Color", Color);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
