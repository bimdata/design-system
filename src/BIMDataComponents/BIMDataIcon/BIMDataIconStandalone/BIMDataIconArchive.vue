<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Archive />
  </Icon>
</template>

<script>
import Archive from "../BIMDataLibraryIcons/Archive.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Archive", Archive);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
