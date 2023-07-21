<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FileDwgPolychrome />
  </Icon>
</template>

<script>
import FileDwgPolychrome from "../../BIMDataLibraryIcons/polychrome/FileDwgPolychrome.vue";
import makeIcon from "../iconFactory.js";
export default makeIcon("FileDwgPolychrome", FileDwgPolychrome);
</script>

<style lang="scss" scoped src="../../../../assets/css/variables.css"></style>

<style lang="scss" src="../../_BIMDataIcon.scss"></style>
