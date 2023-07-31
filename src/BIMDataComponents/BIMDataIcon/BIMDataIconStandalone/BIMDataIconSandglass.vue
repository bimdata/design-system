<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Sandglass />
  </Icon>
</template>

<script>
import Sandglass from "../BIMDataLibraryIcons/Sandglass.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Sandglass", Sandglass);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
