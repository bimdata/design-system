<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CancelCamera />
  </Icon>
</template>

<script>
import CancelCamera from "../BIMDataLibraryIcons/CancelCamera.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("CancelCamera", CancelCamera);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
