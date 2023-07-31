<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <DateAscending />
  </Icon>
</template>

<script>
import DateAscending from "../BIMDataLibraryIcons/DateAscending.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("DateAscending", DateAscending);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
