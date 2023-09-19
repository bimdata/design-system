<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Reset />
  </Icon>
</template>

<script>
import Reset from "../BIMDataLibraryIcons/Reset.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Reset", Reset);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
