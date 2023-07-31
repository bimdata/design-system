<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Storey />
  </Icon>
</template>

<script>
import Storey from "../BIMDataLibraryIcons/Storey.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Storey", Storey);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
