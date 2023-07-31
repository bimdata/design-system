<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Success />
  </Icon>
</template>

<script>
import Success from "../BIMDataLibraryIcons/Success.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Success", Success);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
