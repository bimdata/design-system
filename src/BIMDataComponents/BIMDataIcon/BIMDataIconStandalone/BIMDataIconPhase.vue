<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <Phase />
  </Icon>
</template>

<script>
import Phase from "../BIMDataLibraryIcons/Phase.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("Phase", Phase);
</script>

<style scoped src="../BIMDataIcon.css"></style>
