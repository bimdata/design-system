<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CameraStroke />
  </Icon>
</template>

<script>
import CameraStroke from "../BIMDataLibraryIcons/CameraStroke.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("CameraStroke", CameraStroke);
</script>

<style scoped src="../BIMDataIcon.css"></style>
