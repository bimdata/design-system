<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <WindowRight />
  </Icon>
</template>

<script>
import WindowRight from "../BIMDataLibraryIcons/WindowRight.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("WindowRight", WindowRight);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
