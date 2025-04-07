<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Hide />
  </Icon>
</template>

<script>
import Hide from "../BIMDataLibraryIcons/Hide.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Hide", Hide);
</script>

<style scoped src="../BIMDataIcon.css"></style>
