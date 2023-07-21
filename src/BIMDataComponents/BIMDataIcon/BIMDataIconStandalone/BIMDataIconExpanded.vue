<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Expanded />
  </Icon>
</template>

<script>
import Expanded from "../BIMDataLibraryIcons/Expanded.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Expanded", Expanded);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
