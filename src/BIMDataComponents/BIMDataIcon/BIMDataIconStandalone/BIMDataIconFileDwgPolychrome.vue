<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <FileDwgPolychrome />
  </Icon>
</template>

<script>
import FileDwgPolychrome from "../BIMDataLibraryIcons/polychrome/FileDwgPolychrome.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("FileDwgPolychrome", FileDwgPolychrome);
</script>

<style scoped src="../BIMDataIcon.css"></style>
