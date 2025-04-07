<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Detach />
  </Icon>
</template>

<script>
import Detach from "../BIMDataLibraryIcons/Detach.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Detach", Detach);
</script>

<style scoped src="../BIMDataIcon.css"></style>
