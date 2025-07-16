<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Parameters />
  </Icon>
</template>

<script>
import Parameters from "../BIMDataLibraryIcons/Parameters.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("Parameters", Parameters);
</script>

<style scoped src="../BIMDataIcon.css"></style>
