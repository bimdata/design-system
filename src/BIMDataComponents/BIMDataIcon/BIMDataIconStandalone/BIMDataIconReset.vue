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

<style scoped src="../BIMDataIcon.css"></style>
