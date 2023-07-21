<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Left />
  </Icon>
</template>

<script>
import Left from "../BIMDataLibraryIcons/Left.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Left", Left);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
