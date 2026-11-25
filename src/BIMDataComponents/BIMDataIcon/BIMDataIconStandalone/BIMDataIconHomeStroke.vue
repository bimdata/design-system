<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <HomeStroke />
  </Icon>
</template>

<script>
import HomeStroke from "../BIMDataLibraryIcons/HomeStroke.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("HomeStroke", HomeStroke);
</script>

<style scoped src="../BIMDataIcon.css"></style>
