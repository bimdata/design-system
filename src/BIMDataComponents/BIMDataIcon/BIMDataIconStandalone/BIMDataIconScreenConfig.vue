<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ScreenConfig />
  </Icon>
</template>

<script>
import ScreenConfig from "../BIMDataLibraryIcons/ScreenConfig.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("ScreenConfig", ScreenConfig);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
