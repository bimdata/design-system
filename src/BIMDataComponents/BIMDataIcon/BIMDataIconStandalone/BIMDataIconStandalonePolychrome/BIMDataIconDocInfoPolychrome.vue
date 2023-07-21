<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DocInfoPolychrome />
  </Icon>
</template>

<script>
import DocInfoPolychrome from "../../BIMDataLibraryIcons/polychrome/DocInfoPolychrome.vue";
import makeIcon from "../iconFactory.js";
export default makeIcon("DocInfoPolychrome", DocInfoPolychrome);
</script>

<style lang="scss" scoped src="../../../../assets/css/variables.css"></style>

<style lang="scss" src="../../_BIMDataIcon.scss"></style>
