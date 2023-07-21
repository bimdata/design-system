<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Socotec />
  </Icon>
</template>

<script>
import Socotec from "../BIMDataLibraryIcons/Socotec.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Socotec", Socotec);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
