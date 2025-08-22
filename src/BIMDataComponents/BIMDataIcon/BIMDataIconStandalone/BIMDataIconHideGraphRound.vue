<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <ShowGraphRound />
  </Icon>
</template>

<script>
import ShowGraphRound from "../BIMDataLibraryIcons/ShowGraphRound.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("ShowGraphRound", ShowGraphRound);
</script>

<style scoped src="../BIMDataIcon.css"></style>
