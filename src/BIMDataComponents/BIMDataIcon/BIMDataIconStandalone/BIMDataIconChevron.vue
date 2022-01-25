<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    width="100%"
    :fill="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Chevron />
  </svg>
</template>

<script>
import Chevron from "../BIMDataLibraryIcons/Chevron.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Chevron", Chevron);
</script>

<style
  lang="scss"
  scoped
  src="../../../assets/scss/_BIMDataVariables.scss"
></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
