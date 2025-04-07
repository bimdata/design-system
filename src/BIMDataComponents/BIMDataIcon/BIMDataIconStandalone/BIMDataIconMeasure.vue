<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Measure />
  </Icon>
</template>

<script>
import Measure from "../BIMDataLibraryIcons/Measure.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Measure", Measure);
</script>

<style scoped src="../BIMDataIcon.css"></style>
