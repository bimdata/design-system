<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Pipette />
  </Icon>
</template>

<script>
import Pipette from "../BIMDataLibraryIcons/Pipette.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Pipette", Pipette);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
