<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Save />
  </Icon>
</template>

<script>
import Save from "../BIMDataLibraryIcons/Save.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Save", Save);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
