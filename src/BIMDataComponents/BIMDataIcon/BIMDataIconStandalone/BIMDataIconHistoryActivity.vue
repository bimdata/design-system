<template>
  <Icon
    :fill="fill"
    :fillColor="fillColor"
    :color="color"
    :class="classes"
    :style="style"
  >
    <HistoryActivity />
  </Icon>
</template>

<script>
import HistoryActivity from "../BIMDataLibraryIcons/HistoryActivity.vue";
import makeIcon from "./iconFactory.js";
export default makeIcon("HistoryActivity", HistoryActivity);
</script>

<style scoped src="../BIMDataIcon.css"></style>
