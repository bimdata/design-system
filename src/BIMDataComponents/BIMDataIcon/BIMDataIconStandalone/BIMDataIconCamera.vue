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

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
