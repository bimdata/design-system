<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Reduced />
  </Icon>
</template>

<script>
import Reduced from "../BIMDataLibraryIcons/Reduced.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Reduced", Reduced);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
