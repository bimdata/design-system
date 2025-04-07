<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <WindowLeft />
  </Icon>
</template>

<script>
import WindowLeft from "../BIMDataLibraryIcons/WindowLeft.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("WindowLeft", WindowLeft);
</script>

<style scoped src="../BIMDataIcon.css"></style>
