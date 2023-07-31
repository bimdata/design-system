<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Show />
  </Icon>
</template>

<script>
import Show from "../BIMDataLibraryIcons/Show.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Show", Show);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
