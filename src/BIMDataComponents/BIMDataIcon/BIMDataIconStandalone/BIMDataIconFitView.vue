<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FitView />
  </Icon>
</template>

<script>
import FitView from "../BIMDataLibraryIcons/FitView.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("FitView", FitView);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
