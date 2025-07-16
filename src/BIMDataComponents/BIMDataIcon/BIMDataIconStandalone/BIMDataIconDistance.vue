<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Distance />
  </Icon>
</template>

<script>
import Distance from "../BIMDataLibraryIcons/Distance.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Distance", Distance);
</script>

<style scoped src="../BIMDataIcon.css"></style>
