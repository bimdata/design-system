<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Organization />
  </Icon>
</template>

<script>
import Organization from "../BIMDataLibraryIcons/Organization.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Organization", Organization);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
