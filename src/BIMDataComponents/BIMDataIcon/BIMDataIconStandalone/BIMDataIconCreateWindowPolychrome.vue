<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CreateWindowPolychrome />
  </Icon>
</template>

<script>
import CreateWindowPolychrome from "../BIMDataLibraryIcons/polychrome/CreateWindowPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("CreateWindowPolychrome", CreateWindowPolychrome);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
