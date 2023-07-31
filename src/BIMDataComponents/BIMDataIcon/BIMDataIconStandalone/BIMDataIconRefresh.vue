<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Refresh />
  </Icon>
</template>

<script>
import Refresh from "../BIMDataLibraryIcons/Refresh.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Refresh", Refresh);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
