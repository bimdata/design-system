<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ReprocessIfc />
  </Icon>
</template>

<script>
import ReprocessIfc from "../BIMDataLibraryIcons/ReprocessIfc.vue";
import makeIcon from "./iconFactory.js";

export default makeIcon("ReprocessIfc", ReprocessIfc);
</script>

<style scoped lang="scss" src="../BIMDataIcon.css"></style>
