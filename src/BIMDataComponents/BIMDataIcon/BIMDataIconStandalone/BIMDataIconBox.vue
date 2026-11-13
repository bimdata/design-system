<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Box />
  </Icon>
</template>

<script>
import Box from "../BIMDataLibraryIcons/Box.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Box", Box);
</script>

<style scoped src="../BIMDataIcon.css"></style>
