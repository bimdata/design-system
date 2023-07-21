<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <System />
  </Icon>
</template>

<script>
import System from "../BIMDataLibraryIcons/System.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("System", System);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
