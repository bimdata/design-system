<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ShowGraph />
  </Icon>
</template>

<script>
import ShowGraph from "../BIMDataLibraryIcons/ShowGraph.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("ShowGraph", ShowGraph);
</script>

<style scoped src="../BIMDataIcon.css"></style>
