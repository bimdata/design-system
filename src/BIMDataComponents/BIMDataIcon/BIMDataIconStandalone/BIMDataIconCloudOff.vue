<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <CloudOff />
  </Icon>
</template>

<script>
import CloudOff from "../BIMDataLibraryIcons/CloudOff.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("CloudOff", CloudOff);
</script>

<style scoped src="../BIMDataIcon.css"></style>
