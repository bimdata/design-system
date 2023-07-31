<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Arrow />
  </Icon>
</template>

<script>
import Arrow from "../BIMDataLibraryIcons/Arrow.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Arrow", Arrow);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
