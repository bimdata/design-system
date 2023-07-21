<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Ellipsis />
  </Icon>
</template>

<script>
import Ellipsis from "../BIMDataLibraryIcons/Ellipsis.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Ellipsis", Ellipsis);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
