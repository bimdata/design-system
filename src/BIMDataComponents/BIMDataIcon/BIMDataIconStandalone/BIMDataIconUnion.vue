<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Union />
  </Icon>
</template>

<script>
import Union from "../BIMDataLibraryIcons/Union.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Union", Union);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
