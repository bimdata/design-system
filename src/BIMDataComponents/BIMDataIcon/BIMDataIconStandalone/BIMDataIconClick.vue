<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Click />
  </Icon>
</template>

<script>
import Click from "../BIMDataLibraryIcons/Click.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Click", Click);
</script>

<style scoped src="../BIMDataIcon.css"></style>
