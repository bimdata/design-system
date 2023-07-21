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

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
