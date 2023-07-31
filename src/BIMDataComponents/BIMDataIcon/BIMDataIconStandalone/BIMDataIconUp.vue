<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Up />
  </Icon>
</template>

<script>
import Up from "../BIMDataLibraryIcons/Up.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Up", Up);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
