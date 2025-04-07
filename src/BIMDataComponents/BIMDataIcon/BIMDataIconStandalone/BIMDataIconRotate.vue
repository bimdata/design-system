<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Rotate />
  </Icon>
</template>

<script>
import Rotate from "../BIMDataLibraryIcons/Rotate.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Rotate", Rotate);
</script>

<style scoped src="../BIMDataIcon.css"></style>
