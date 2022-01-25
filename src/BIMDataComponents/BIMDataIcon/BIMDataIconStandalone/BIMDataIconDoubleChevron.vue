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
    <DoubleChevron />
  </svg>
</template>

<script>
import DoubleChevron from "../BIMDataLibraryIcons/DoubleChevron.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("DoubleChevron", DoubleChevron);
</script>

<style
  lang="scss"
  scoped
  src="../../../assets/scss/_BIMDataVariables.scss"
></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
