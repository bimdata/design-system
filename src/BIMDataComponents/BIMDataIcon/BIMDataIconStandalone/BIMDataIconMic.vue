<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Mic />
  </Icon>
</template>

<script>
import Mic from "../BIMDataLibraryIcons/Mic.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Mic", Mic);
</script>

<style scoped src="../BIMDataIcon.css"></style>
