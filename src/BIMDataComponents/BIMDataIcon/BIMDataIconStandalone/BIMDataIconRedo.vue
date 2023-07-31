<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Redo />
  </Icon>
</template>

<script>
import Redo from "../BIMDataLibraryIcons/Redo.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Redo", Redo);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
