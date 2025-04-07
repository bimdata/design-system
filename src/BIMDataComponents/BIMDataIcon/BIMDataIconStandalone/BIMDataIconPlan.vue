<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Plan />
  </Icon>
</template>

<script>
import Plan from "../BIMDataLibraryIcons/Plan.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Plan", Plan);
</script>

<style scoped src="../BIMDataIcon.css"></style>
