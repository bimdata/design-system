<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Quit />
  </Icon>
</template>

<script>
import Quit from "../BIMDataLibraryIcons/Quit.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Quit", Quit);
</script>

<style scoped src="../BIMDataIcon.css"></style>
