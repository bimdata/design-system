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
    <Close />
  </svg>
</template>

<script>
import Close from "../BIMDataLibraryIcons/Close.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Close", Close);
</script>

<style
  lang="scss"
  scoped
  src="../../../assets/scss/_BIMDataVariables.scss"
></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
