<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Caliper />
  </Icon>
</template>

<script>
import Caliper from "../BIMDataLibraryIcons/Caliper.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Caliper", Caliper);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
