<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Ifc />
  </Icon>
</template>

<script>
import Ifc from "../BIMDataLibraryIcons/Ifc.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Ifc", Ifc);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
