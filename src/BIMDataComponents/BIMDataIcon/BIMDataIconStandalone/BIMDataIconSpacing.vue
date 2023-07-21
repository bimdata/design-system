<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Spacing />
  </Icon>
</template>

<script>
import Spacing from "../BIMDataLibraryIcons/Spacing.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Spacing", Spacing);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
