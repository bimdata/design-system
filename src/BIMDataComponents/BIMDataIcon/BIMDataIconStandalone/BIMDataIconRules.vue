<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Rules />
  </Icon>
</template>

<script>
import Rules from "../BIMDataLibraryIcons/Rules.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Rules", Rules);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
