<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Smartview />
  </Icon>
</template>

<script>
import Smartview from "../BIMDataLibraryIcons/Smartview.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Smartview", Smartview);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
