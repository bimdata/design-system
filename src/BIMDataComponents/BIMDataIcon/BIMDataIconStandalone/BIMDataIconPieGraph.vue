<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <PieGraph />
  </Icon>
</template>

<script>
import PieGraph from "../BIMDataLibraryIcons/PieGraph.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("PieGraph", PieGraph);
</script>

<style scoped lang="scss" src="../_BIMDataIcon.scss"></style>
