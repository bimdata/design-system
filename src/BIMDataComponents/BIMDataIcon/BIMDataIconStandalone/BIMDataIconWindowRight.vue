<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <WindowRight />
  </Icon>
</template>

<script>
import WindowRight from "../BIMDataLibraryIcons/WindowRight.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("WindowRight", WindowRight);
</script>

<style scoped src="../BIMDataIcon.css"></style>
