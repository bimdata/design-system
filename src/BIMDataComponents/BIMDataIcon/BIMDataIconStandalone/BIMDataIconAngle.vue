<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Angle />
  </Icon>
</template>

<script>
import Angle from "../BIMDataLibraryIcons/Angle.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Angle", Angle);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
