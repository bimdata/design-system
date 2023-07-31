<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Distance />
  </Icon>
</template>

<script>
import Distance from "../BIMDataLibraryIcons/Distance.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Distance", Distance);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
