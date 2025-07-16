<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Pipette />
  </Icon>
</template>

<script>
import Pipette from "../BIMDataLibraryIcons/Pipette.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Pipette", Pipette);
</script>

<style scoped src="../BIMDataIcon.css"></style>
