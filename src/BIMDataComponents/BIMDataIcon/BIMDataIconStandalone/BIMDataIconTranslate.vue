<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Translate />
  </Icon>
</template>

<script>
import Translate from "../BIMDataLibraryIcons/Translate.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Translate", Translate);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
