<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Zone />
  </Icon>
</template>

<script>
import Zone from "../BIMDataLibraryIcons/Zone.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Zone", Zone);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
