<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ExportIfc />
  </Icon>
</template>

<script>
import ExportIfc from "../BIMDataLibraryIcons/ExportIfc.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("ExportIfc", ExportIfc);
</script>

<style scoped src="../BIMDataIcon.css"></style>
