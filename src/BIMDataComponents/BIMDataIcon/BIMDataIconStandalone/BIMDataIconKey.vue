<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Key />
  </Icon>
</template>

<script>
import Key from "../BIMDataLibraryIcons/Key.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Key", Key);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
