<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Location />
  </Icon>
</template>

<script>
import Location from "../BIMDataLibraryIcons/Location.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Location", Location);
</script>

<style lang="scss" scoped src="../../../assets/css/variables.css"></style>

<style lang="scss" src="../_BIMDataIcon.scss"></style>
