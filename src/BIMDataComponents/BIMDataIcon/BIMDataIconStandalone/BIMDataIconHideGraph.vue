<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <HideGraph />
  </Icon>
</template>

<script>
import HideGraph from "../BIMDataLibraryIcons/HideGraph.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("HideGraph", HideGraph);
</script>

<style scoped src="../BIMDataIcon.css"></style>
