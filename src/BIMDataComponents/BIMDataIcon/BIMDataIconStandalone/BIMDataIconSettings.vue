<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Settings />
  </Icon>
</template>

<script>
import Settings from "../BIMDataLibraryIcons/Settings.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Settings", Settings);
</script>

<style scoped src="../BIMDataIcon.css"></style>
