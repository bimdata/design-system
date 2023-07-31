<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Attach />
  </Icon>
</template>

<script>
import Attach from "../BIMDataLibraryIcons/Attach.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Attach", Attach);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
