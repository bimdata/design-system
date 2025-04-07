<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Structure />
  </Icon>
</template>

<script>
import Structure from "../BIMDataLibraryIcons/Structure.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Structure", Structure);
</script>

<style scoped src="../BIMDataIcon.css"></style>
