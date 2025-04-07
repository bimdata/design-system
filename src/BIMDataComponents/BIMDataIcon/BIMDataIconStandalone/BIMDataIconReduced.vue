<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Reduced />
  </Icon>
</template>

<script>
import Reduced from "../BIMDataLibraryIcons/Reduced.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Reduced", Reduced);
</script>

<style scoped src="../BIMDataIcon.css"></style>
