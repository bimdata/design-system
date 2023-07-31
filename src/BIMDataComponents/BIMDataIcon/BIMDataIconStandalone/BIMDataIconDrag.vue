<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Drag />
  </Icon>
</template>

<script>
import Drag from "../BIMDataLibraryIcons/Drag.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Drag", Drag);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
