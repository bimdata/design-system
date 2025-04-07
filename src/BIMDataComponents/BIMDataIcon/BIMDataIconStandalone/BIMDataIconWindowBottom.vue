<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <WindowBottom />
  </Icon>
</template>

<script>
import WindowBottom from "../BIMDataLibraryIcons/WindowBottom.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("WindowBottom", WindowBottom);
</script>

<style scoped src="../BIMDataIcon.css"></style>
