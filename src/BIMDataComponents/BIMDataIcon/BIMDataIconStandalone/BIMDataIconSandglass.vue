<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Sandglass />
  </Icon>
</template>

<script>
import Sandglass from "../BIMDataLibraryIcons/Sandglass.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Sandglass", Sandglass);
</script>

<style scoped src="../BIMDataIcon.css"></style>
