<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Model3D />
  </Icon>
</template>

<script>
import Model3D from "../BIMDataLibraryIcons/Model3D.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Model3D", Model3D);
</script>

<style scoped src="../BIMDataIcon.css"></style>
