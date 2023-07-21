<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Parameters />
  </Icon>
</template>

<script>
import Parameters from "../BIMDataLibraryIcons/Parameters.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Parameters", Parameters);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
