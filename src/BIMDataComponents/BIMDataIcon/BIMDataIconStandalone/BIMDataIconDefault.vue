<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Default />
  </Icon>
</template>

<script>
import Default from "../BIMDataLibraryIcons/Default.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Default", Default);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
