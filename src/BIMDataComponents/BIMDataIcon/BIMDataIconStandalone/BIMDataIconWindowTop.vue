<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <WindowTop />
  </Icon>
</template>

<script>
import WindowTop from "../BIMDataLibraryIcons/WindowTop.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("WindowTop", WindowTop);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
