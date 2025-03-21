<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Camera />
  </Icon>
</template>

<script>
import Camera from "../BIMDataLibraryIcons/Camera.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Camera", Camera);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
